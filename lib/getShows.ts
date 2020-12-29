import { Episode } from '../src/components/EpisodeCarousel/EpisodeCarousel';

let shows;

async function fetchShows() {
  // Use Cache if Available
  if (shows) {
    console.log('used cache');
    return shows;
  }

  let url = `https://${process.env.SIMPLECAST_API_URL}/podcasts/${process.env.PODCAST_ID}/episodes?limit=6`;

  const res = await fetch(url, {
    headers: new Headers({
      Authorization: `Bearer ${process.env.SIMPLECAST_TOKEN}`,
    }),
  });
  const data = await res.json();

  if (!data || !data.collection) {
    return {
      notFound: true,
    };
  }

  shows = data.collection.filter((episode) => episode.status === 'published');

  return shows;
}

export async function getShows(limit?: number) {
  const shows = await fetchShows();

  return shows.map(
    (episode): Episode => {
      return {
        slug: episode.slug,
        title: episode.title,
        description: episode.description,
        image: episode.image_url,
        publishDate: episode.published_at,
      };
    }
  );
}
