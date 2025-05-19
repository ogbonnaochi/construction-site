export default {
  name: 'testimonial',
  type: 'document',
  title: 'Testimonial',
  fields: [
    { name: 'name', type: 'string', title: 'Client Name' },
    { name: 'feedback', type: 'text', title: 'Feedback' },
    { name: 'image', type: 'image', title: 'Client Image', options: { hotspot: true } },
  ]
}