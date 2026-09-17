export interface HifFeatureVideo {
  id: string
  /** Path to the self-hosted landscape video, e.g. "/videos/features/feature-1.mp4" */
  videoUrl: string
  /** First-frame poster image, shown instantly while the video buffers */
  posterUrl: string
  caption: string
}

/**
 * Self-hosted landscape clips for the homepage Feature Video showcase —
 * files live in public/videos/features/ (posters in public/images/features/).
 */
export const HIF_FEATURE_VIDEOS: HifFeatureVideo[] = [
  {
    id: 'feature-1',
    videoUrl: '/videos/features/feature-1.mp4',
    posterUrl: '/images/features/feature-1.jpg',
    caption: 'Field story 1 — moments from our work on the ground.'
  },
  {
    id: 'feature-2',
    videoUrl: '/videos/features/feature-2.mp4',
    posterUrl: '/images/features/feature-2.jpg',
    caption: 'Field story 2 — a closer look at compassion in action.'
  }
]
