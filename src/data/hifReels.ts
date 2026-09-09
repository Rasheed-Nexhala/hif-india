export interface HifReel {
  id: string
  /** Path to the self-hosted video file, e.g. "/videos/reels/reel-1.mp4" */
  videoUrl: string
  /** First-frame poster image, shown instantly while the video buffers */
  posterUrl: string
  caption: string
}

/**
 * Self-hosted vertical clips for the homepage Reels showcase — files live in
 * public/videos/reels/ (posters in public/images/reels/). Each entry renders
 * as one slide in the carousel.
 */
export const HIF_REELS: HifReel[] = [
  {
    id: 'reel-1',
    videoUrl: '/videos/reels/reel-1.mp4',
    posterUrl: '/images/reels/reel-1.jpg',
    caption: 'Project Boondh, 11th edition — community football at Nehru Maidan.'
  },
  {
    id: 'reel-2',
    videoUrl: '/videos/reels/reel-2.mp4',
    posterUrl: '/images/reels/reel-2.jpg',
    caption: 'Inside a home visit with HIF Qatar — seeing the need on the ground together.'
  },
  {
    id: 'reel-3',
    videoUrl: '/videos/reels/reel-3.mp4',
    posterUrl: '/images/reels/reel-3.jpg',
    caption: "A children's activity day — games, balloons, and community outdoors."
  },
  {
    id: 'reel-4',
    videoUrl: '/videos/reels/reel-4.mp4',
    posterUrl: '/images/reels/reel-4.jpg',
    caption: 'HIF Youth Wing — a reflection exercise from a mentoring session.'
  }
]
