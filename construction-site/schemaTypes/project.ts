export default {
  name: 'project',
  type: 'document',
  title: 'Projects',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title', maxLength: 96 } },
    { name: 'description', type: 'text', title: 'Description' },
    { name: 'image', type: 'image', title: 'Image', options: { hotspot: true } },
  ]
}
