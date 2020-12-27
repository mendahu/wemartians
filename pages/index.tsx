import Head from 'next/head';
import Section from '../src/components/Section/Section';

export default function Home() {
  return (
    <>
      <Head>
        <title>WeMartians Podcast</title>
      </Head>
      <Section component="header" background="map">
        <img src="2021_logo-dark.png" width="300px" />
        <h1>WeMartians Podcast</h1>
        <h2>Explore the Solar System together</h2>
        <ul>
          <li>iTunes</li>
          <li>Google</li>
          <li>Spotify</li>
        </ul>
      </Section>
      <main>
        <Section background="light">Episodes</Section>
        <Section background="dark">Patreon</Section>
        <Section background="dark">Mailing List</Section>
        <Section background="light">Shop</Section>
      </main>
      <Section component="footer" background="dark">
        Footer
      </Section>
    </>
  );
}
