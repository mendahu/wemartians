const { oldSlugs } = require("./config/redirects.json");

module.exports = {
  images: {
    domains: ["pbs.twimg.com", "image.simplecastcdn.com", "cdn.sanity.io"],
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  async redirects() {
    const oldEpisodeRedirects = [];

    for (const slug in oldSlugs) {
      const redirect = {
        source: `/episode${slug}`,
        destination: `/podcasts/${oldSlugs[slug]}`,
        permanent: true,
      };
      oldEpisodeRedirects.push(redirect);
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
        source: "/2020live",
        destination: "/streams/mars-2020-perseverance-rover-landing",
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
  async rewrites() {
    return [
      {
        source: "/feed/podcast",
        destination: "https://feeds.simplecast.com/kCA68cgb",
      },
    ];
  },
};
