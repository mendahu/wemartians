import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "0c6fvt0u",
  dataset: "production",
  useCdn: true,
});

export default client;
