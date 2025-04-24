import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '2lbz3r3o', // Replace with your project ID
  dataset: 'production',
  apiVersion: '2023-10-01', // You can set today's date or keep this
  useCdn: true,
})
