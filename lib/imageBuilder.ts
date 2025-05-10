import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanityClient'

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}
console.log("Project Image:", project.image);
console.log("Generated URL:", urlFor(project.image).url());