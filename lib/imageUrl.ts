import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanity'

import type { Image as SanityImageSource } from 'sanity' // ✅ works with Sanity v3+

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}