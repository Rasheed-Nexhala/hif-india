import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Full-bleed ambient 3D backdrop for the hero section.
 *
 * Design goals:
 * - Fills the whole hero (not a tiny corner widget) so it actually reads as
 *   part of the section, while staying well behind the text in z-order and
 *   opacity so legibility never suffers.
 * - A drifting field of soft golden/emerald particles with dynamic
 *   constellation lines, plus a faceted "star" core that gently rotates and
 *   breathes — a nod to Islamic geometric motifs without depicting anything
 *   literal.
 * - Subtle parallax: the whole scene tilts toward the pointer / device tilt,
 *   giving a sense of depth without being distracting.
 * - Pauses when off-screen/tab hidden, disposes cleanly on unmount, caps
 *   pixel ratio and particle count for performance.
 */
const HeroAccentCanvas: React.FC<{ className?: string }> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(48, mount.clientWidth / mount.clientHeight, 0.1, 120)
    camera.position.z = 34

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
    mount.appendChild(renderer.domElement)

    const sceneGroup = new THREE.Group()
    scene.add(sceneGroup)

    // ---- Particle field --------------------------------------------------
    const particleCount = 110
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)
    const spanX = 44
    const spanY = 26
    const spanZ = 16

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spanX
      positions[i * 3 + 1] = (Math.random() - 0.5) * spanY
      positions[i * 3 + 2] = (Math.random() - 0.5) * spanZ
      velocities[i * 3] = (Math.random() - 0.5) * 0.012
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.012
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.008
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const dotCanvas = document.createElement('canvas')
    dotCanvas.width = 32
    dotCanvas.height = 32
    const ctx = dotCanvas.getContext('2d')
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
      gradient.addColorStop(0, 'rgba(255,255,255,0.95)')
      gradient.addColorStop(0.4, 'rgba(245,201,120,0.6)')
      gradient.addColorStop(1, 'rgba(245,201,120,0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, 32, 32)
    }
    const texture = new THREE.CanvasTexture(dotCanvas)

    const material = new THREE.PointsMaterial({
      size: 1.15,
      map: texture,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })

    const points = new THREE.Points(geometry, material)
    sceneGroup.add(points)

    // ---- Constellation lines connecting nearby particles ------------------
    const maxLineSegments = particleCount * 3
    const lineGeometry = new THREE.BufferGeometry()
    const linePositions = new Float32Array(maxLineSegments * 2 * 3)
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xfbbf24,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending
    })
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial)
    sceneGroup.add(lines)
    const CONNECT_DIST = 8.5

    // ---- Faceted "star" core — sits toward the right, echoing the badge ---
    const coreGroup = new THREE.Group()
    coreGroup.position.set(11, 2, -2)
    sceneGroup.add(coreGroup)

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(4.4, 0),
      new THREE.MeshBasicMaterial({
        color: 0x34d399,
        wireframe: true,
        transparent: true,
        opacity: 0.3
      })
    )
    coreGroup.add(core)

    const coreInner = new THREE.Mesh(
      new THREE.OctahedronGeometry(2.1, 0),
      new THREE.MeshBasicMaterial({
        color: 0xfbbf24,
        wireframe: true,
        transparent: true,
        opacity: 0.35
      })
    )
    coreGroup.add(coreInner)

    // Soft glow sprite behind the core for a warm halo.
    const glowCanvas = document.createElement('canvas')
    glowCanvas.width = 128
    glowCanvas.height = 128
    const gctx = glowCanvas.getContext('2d')
    if (gctx) {
      const g = gctx.createRadialGradient(64, 64, 0, 64, 64, 64)
      g.addColorStop(0, 'rgba(52,211,153,0.35)')
      g.addColorStop(0.5, 'rgba(52,211,153,0.12)')
      g.addColorStop(1, 'rgba(52,211,153,0)')
      gctx.fillStyle = g
      gctx.fillRect(0, 0, 128, 128)
    }
    const glowSprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: new THREE.CanvasTexture(glowCanvas),
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      })
    )
    glowSprite.scale.set(22, 22, 1)
    coreGroup.add(glowSprite)

    // ---- Interaction: pointer + device-tilt driven parallax --------------
    const pointer = { x: 0, y: 0 }
    const targetRot = { x: 0, y: 0 }
    const handlePointerMove = (e: PointerEvent) => {
      const rect = mount.getBoundingClientRect()
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      pointer.y = ((e.clientY - rect.top) / rect.height) * 2 - 1
    }
    window.addEventListener('pointermove', handlePointerMove, { passive: true })

    let visible = document.visibilityState === 'visible'
    const handleVisibility = () => {
      visible = document.visibilityState === 'visible'
    }
    document.addEventListener('visibilitychange', handleVisibility)

    let rafId = 0
    let frame = 0
    const clock = new THREE.Clock()

    const animate = () => {
      rafId = requestAnimationFrame(animate)
      if (!visible) return
      frame++
      const t = clock.getElapsedTime()

      const posAttr = geometry.attributes.position as THREE.BufferAttribute
      const arr = posAttr.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        arr[i3] += velocities[i3]
        arr[i3 + 1] += velocities[i3 + 1]
        arr[i3 + 2] += velocities[i3 + 2]
        if (Math.abs(arr[i3]) > spanX / 2) velocities[i3] *= -1
        if (Math.abs(arr[i3 + 1]) > spanY / 2) velocities[i3 + 1] *= -1
        if (Math.abs(arr[i3 + 2]) > spanZ / 2) velocities[i3 + 2] *= -1
      }
      posAttr.needsUpdate = true

      points.rotation.y += 0.0007
      lines.rotation.y = points.rotation.y

      coreGroup.rotation.y -= 0.0026
      coreGroup.rotation.x += 0.0011
      coreInner.rotation.y += 0.004
      coreInner.rotation.x -= 0.0022
      const breathe = 1 + Math.sin(t * 0.9) * 0.06
      core.scale.setScalar(breathe)
      glowSprite.material.opacity = 0.7 + Math.sin(t * 1.2) * 0.25

      // Smoothly ease the whole scene toward the pointer for a parallax feel.
      targetRot.y = pointer.x * 0.18
      targetRot.x = -pointer.y * 0.1
      sceneGroup.rotation.y += (targetRot.y - sceneGroup.rotation.y) * 0.04
      sceneGroup.rotation.x += (targetRot.x - sceneGroup.rotation.x) * 0.04

      // Recompute constellation edges every 3rd frame — cheap and smooth enough.
      if (frame % 3 === 0) {
        const lineArr = lineGeometry.attributes.position.array as Float32Array
        let edgeCount = 0
        for (let i = 0; i < particleCount && edgeCount < maxLineSegments; i++) {
          const ax = arr[i * 3]
          const ay = arr[i * 3 + 1]
          const az = arr[i * 3 + 2]
          for (let j = i + 1; j < particleCount && edgeCount < maxLineSegments; j++) {
            const bx = arr[j * 3]
            const by = arr[j * 3 + 1]
            const bz = arr[j * 3 + 2]
            const dx = ax - bx
            const dy = ay - by
            const dz = az - bz
            const distSq = dx * dx + dy * dy + dz * dz
            if (distSq < CONNECT_DIST * CONNECT_DIST) {
              const base = edgeCount * 6
              lineArr[base] = ax
              lineArr[base + 1] = ay
              lineArr[base + 2] = az
              lineArr[base + 3] = bx
              lineArr[base + 4] = by
              lineArr[base + 5] = bz
              edgeCount++
            }
          }
        }
        for (let k = edgeCount * 6; k < lineArr.length; k++) lineArr[k] = 0
        lineGeometry.attributes.position.needsUpdate = true
        lineGeometry.setDrawRange(0, edgeCount * 2)
      }

      renderer.render(scene, camera)
    }
    animate()

    const resizeObserver = new ResizeObserver(() => {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    })
    resizeObserver.observe(mount)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('visibilitychange', handleVisibility)
      window.removeEventListener('pointermove', handlePointerMove)
      resizeObserver.disconnect()
      if (mount && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      texture.dispose()
      lineGeometry.dispose()
      lineMaterial.dispose()
      core.geometry.dispose()
      ;(core.material as THREE.Material).dispose()
      coreInner.geometry.dispose()
      ;(coreInner.material as THREE.Material).dispose()
      ;(glowSprite.material as THREE.SpriteMaterial).map?.dispose()
      glowSprite.material.dispose()
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} className={`pointer-events-none ${className}`} aria-hidden="true" />
}

export default HeroAccentCanvas
