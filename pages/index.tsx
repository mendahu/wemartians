import Head from 'next/head';
import Header from '../src/components/Header/Header';
import Section from '../src/components/Section/Section';

export default function Home() {
  return (
    <>
      <Head>
        <title>WeMartians Podcast</title>
      </Head>
      <Section component="header" background="map">
        <Header />
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
