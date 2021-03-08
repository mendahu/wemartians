import groq from "groq";

export const getStreamQuery = (slug: string) => {
  return groq`*[_type == "stream" && slug.current == "${slug}"]{
    slug,
    title, 
    cta, 
    url, 
    date, 
    "hosts": hosts[]->{name, affiliation, bio, social, image}, 
    "guests": guests[]->{name, affiliation, bio, social, image}, 
    socialImages
  }`;
};

export const getStreamsQuery = () => {
  return groq`*[_type == "stream"]{
    slug, 
    title, 
    cta, 
    url, 
    date, 
    socialImages
  }`;
};
