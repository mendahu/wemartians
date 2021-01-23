import { Episode } from "../src/types/common";

let shows;

const LIMIT = process.env.API_FETCH_LIMIT;

async function fetchShows() {
  // Use Cache if Available
  if (shows) {
    console.log("Episodes fetched from cache.");
    return shows;
  }

  let url = `https://${process.env.SIMPLECAST_API_URL}/podcasts/${process.env.PODCAST_ID}/episodes?limit=${LIMIT}`;

  let data;

  try {
    const res = await fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${process.env.SIMPLECAST_TOKEN}`,
      }),
    });
    data = await res.json();
  } catch (err) {
    throw err;
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

async function fetchShow(id: string) {
  let url = `https://${process.env.SIMPLECAST_API_URL}/episodes/${id}`;

  let data;

  try {
    const res = await fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${process.env.SIMPLECAST_TOKEN}`,
      }),
    });
    data = await res.json();
  } catch (err) {
    throw err;
  }

  if (!data) {
    return {
      notFound: true,
    };
  }

  return data;
}

const formatShow = (episode): Episode => {
  return {
    slug: episode.slug,
    title: episode.title,
    description: episode.description,
    image: episode.image_url || "/album_Art_2021_500-01.png",
    publishDate: episode.published_at,
    id: episode.id,
    duration: episode.duration,
    longDescription: episode.long_description || "",
  };
};

const formatShows = (shows): Episode[] => {
  return shows.map(formatShow);
};

export async function getShows(limit?: number) {
  let shows = [];
  try {
    shows = await fetchShows();
  } catch (err) {
    throw err;
  }

  const formattedShows = formatShows(shows);

  return limit ? formattedShows.slice(0, limit) : formattedShows;
}

export async function getShow(slug: string) {
  let shows = [];
  try {
    shows = await fetchShows();
  } catch (err) {
    throw err;
  }

  const showId = shows.find((show) => show.slug === slug).id;

  let show;

  try {
    show = await fetchShow(showId);
  } catch (err) {
    throw err;
  }

  return formatShow(show);
}
