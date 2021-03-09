import groq from "groq";

const projection = groq`{
  slug,
  title, 
  cta, 
  url, 
  date, 
  "hosts": hosts[]->{name, affiliation, bio, social, image}, 
  "guests": guests[]->{name, affiliation, bio, social, image}, 
  socialImages
}`;

export const streamQuery =
  groq`*[_type == "stream" && slug.current == $slug]` + projection;

export const streamsQuery =
  groq`*[_type == "stream"] | order(date desc)` + projection;
