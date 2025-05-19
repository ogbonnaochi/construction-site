export default {
  name: 'teamMember',
  type: 'document',
  title: 'Team Member',
  fields: [
    { name: 'name', type: 'string', title: 'Full Name' },
    { name: 'specialization', type: 'string', title: 'Specialization' },
    { name: 'experience', type: 'string', title: 'Experience' },
    { name: 'image', type: 'image', title: 'Image', options: { hotspot: true } },
    {
      name: 'skills',
      type: 'array',
      title: 'Skills',
      of: [{ type: 'string' }]
    }
  ]
}