module.exports = {
  images: {
    domains: ["pbs.twimg.com", "image.simplecastcdn.com"],
  },
  async redirects() {
    const oldEpisodeRedirects = [];

    for (let i = 1; i < 100; i++) {
      const episodeNumber = ("00" + i).slice(-3);
      oldEpisodeRedirects.push({
        source: `/episode${episodeNumber}`,
        destination: "/podcasts/",
        permanent: true,
      });
    }

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
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/podcast",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/",
        permanent: true,
      },
      {
        source: "/support",
        destination: "https://www.patreon.com/wemartians",
        permanent: false,
      },
      {
        source: "/patreon",
        destination: "https://www.patreon.com/wemartians",
        permanent: false,
      },
      ...oldEpisodeRedirects,
    ];
  },
};
