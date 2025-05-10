import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '2lbz3r3o',
  dataset: 'production',
  apiVersion: '2023-10-01', 
  useCdn: true,
})
