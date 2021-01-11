module.exports = {
  images: {
    domains: ["pbs.twimg.com", "image.simplecastcdn.com"],
  },
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/donors",
        destination: "/",
        permanent: true,
      },
      {
        source: "/travel-grant",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
