// ---------------------------------------------------------------------------
// Social wall posts.
//
// TODO (admin panel): replace this placeholder list with `GET /api/social-posts`.
// When the client publishes a post on Instagram/YouTube, it gets pushed here
// from the admin side. The shape maps to a "SocialPost" model:
//   { id, image, platform, caption, handle, likes, href }
// `image` becomes the uploaded/synced thumbnail; `platform` drives the badge.
// The mosaic layout adapts to any number of posts automatically.
// ---------------------------------------------------------------------------

import { IMG } from './images.js'

export const SOCIAL_HANDLE = '@garudasfoods'

export const SOCIAL = [
  { id: 's1', image: IMG.biryani, platform: 'instagram', caption: 'Sunday means biryani. Always.', handle: SOCIAL_HANDLE, likes: '3.4k', href: '#' },
  { id: 's2', image: IMG.dosa, platform: 'instagram', caption: 'Crispy dosa, 5 minutes, zero mess.', handle: SOCIAL_HANDLE, likes: '1.9k', href: '#' },
  { id: 's3', image: IMG.kitchenRed, platform: 'youtube', caption: 'Inside the Garudas kitchen — a tour.', handle: SOCIAL_HANDLE, likes: '12k', href: '#' },
  { id: 's4', image: IMG.thali, platform: 'instagram', caption: 'A full thali, anywhere in the world.', handle: SOCIAL_HANDLE, likes: '2.7k', href: '#' },
  { id: 's5', image: IMG.paneerKadai, platform: 'instagram', caption: 'Paneer butter masala done right.', handle: SOCIAL_HANDLE, likes: '4.1k', href: '#' },
  { id: 's6', image: IMG.curryBowls, platform: 'instagram', caption: 'Comfort in a bowl. #GarudasFamily', handle: SOCIAL_HANDLE, likes: '2.2k', href: '#' },
  { id: 's7', image: IMG.cooking, platform: 'youtube', caption: 'From farm to bowl — how we do it.', handle: SOCIAL_HANDLE, likes: '8.6k', href: '#' },
  { id: 's8', image: IMG.idli, platform: 'instagram', caption: 'Soft idli + sambar = morning sorted.', handle: SOCIAL_HANDLE, likes: '1.5k', href: '#' },
  { id: 's9', image: IMG.fruits, platform: 'instagram', caption: 'Straight from our organic farms.', handle: SOCIAL_HANDLE, likes: '3.0k', href: '#' },
]
