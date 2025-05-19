export const getAllProjectsQuery = `*[_type == "project"]{
    _id,
    title,
    slug,
    shortDescription,
    fullDescription,
    image
  }`;
  
  export const getAllTeamMembersQuery = `*[_type == "teamMember"]{
    _id,
    name,
    specialization,
    experience,
    skills,
    "image": image.asset->url
  }`;
  