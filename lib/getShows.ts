import { Episode } from "../src/types/common";

let shows;

async function fetchShows() {
  // Use Cache if Available
  if (shows) {
    console.log("Episodes fetched from cache.");
    return shows;
  }

  let url = `https://${process.env.SIMPLECAST_API_URL}/podcasts/${process.env.PODCAST_ID}/episodes?limit=6`;

  let data;

  try {
    const res = await fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${process.env.SIMPLECAST_TOKEN}`,
      }),
    });
    data = await res.json();
  } catch (err) {
    console.error("Failed to fetch data from API.");
    console.error(err);
  }

  if (!data || !data.collection) {
    return {
      notFound: true,
    };
  }

  shows = data.collection.filter((episode) => episode.status === "published");

  console.log("Episodes fetched from API.");

  return shows;
}

export async function getShows(limit?: number) {
  const shows = await fetchShows();

  const formattedShows: Episode[] = shows.map((episode) => {
    return {
      slug: episode.slug,
      title: episode.title,
      description: episode.description,
      image: episode.image_url,
      publishDate: episode.published_at,
      id: episode.id,
      duration: episode.duration,
    };
  });

  return limit ? formattedShows.slice(0, limit) : formattedShows;
}

export async function getShow(slug: string) {
  const shows = await fetchShows();

  return shows.find((show) => show.slug === slug);
}
