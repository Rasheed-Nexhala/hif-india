/**
 * Curated, license-free Unsplash imagery used purely as ambient/decorative
 * texture (page headers, section backgrounds) — never presented as
 * documentary photos of HIF INDIA's actual projects or beneficiaries.
 * All real project/gallery photography continues to come from
 * `public/images/**` (the organization's own archive).
 */
const unsplash = (id: string, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const UNSPLASH = {
  volunteerHands: unsplash('1593113646773-028c64a8f1b8'), // stacked hands, teamwork
  charityHeartHands: unsplash('1509099836639-18ba1795216d'), // hands, giving
  openBooks: unsplash('1497633762265-9d179a990aa6'), // books / education texture
  volunteerGroup: unsplash('1593113630400-ea4288922497'), // community volunteers
  warmArchitecture: unsplash('1513694203232-719a280e022f'), // warm-toned architecture & shelter
  communityGathering: unsplash('1516726817505-f5ed825624d8'), // community gathering
  goldenHourTexture: unsplash('DL2lZNMAciY'), // house construction / bricklaying for community shelter
  shelterConstruction: unsplash('DL2lZNMAciY'), // hands laying bricks for housing the poor
  handsPlanting: unsplash('1544717297-fa95b6ee9643'), // hands / growth
  medicalCare: unsplash('1584515979956-d9f6e5d09982'), // healthcare & medical relief
  softPattern: unsplash('1517486808906-6ca8b3f04846') // soft ambient pattern
}
