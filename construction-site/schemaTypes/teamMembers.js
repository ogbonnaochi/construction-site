// schemas/teamMember.js
export default {
    name: 'teamMember',
    title: 'Team Member',
    type: 'document',
    fields: [
      { name: 'name', title: 'Name', type: 'string' },
      { name: 'specialization', title: 'Specialization', type: 'string' },
      { name: 'experience', title: 'Experience', type: 'string' },
      { name: 'image', title: 'Image', type: 'image' },
      {
        name: 'skills',
        title: 'Skills',
        type: 'array',
        of: [{ type: 'string' }]
      },
    ],
  };
  