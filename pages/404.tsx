import CommonHeader from "../src/components/CommonHeader/CommonHeader";
import Footer from "../src/components/Footer/Footer";
import Section from "../src/components/Section/Section";
import { header as headerCopy } from "../copy/ErrorPage/index.json";
import styles from "../src/pages/ErrorPage/styles/ErrorPage.module.css";

export type ErrorPageProps = {};

export default function ErrorPage(props: ErrorPageProps) {
  return (
    <>
      <Section component="header" background="map">
        <CommonHeader
          title={headerCopy.title}
          breadcrumbs={headerCopy.breadcrumbs}
        />
      </Section>
      <main>
        <Section background="light">
          <div className={styles.container}>
            <h1 className={styles.title}>404</h1>
            <h2 className={styles.subtitle}>Page not found!</h2>
            <p className={styles.paragraph}>
              The page you're looking for doesn't seem to exist.
            </p>
          </div>
        </Section>
      </main>
      <Section component="footer" background="dark">
        <Footer />
      </Section>
    </>
  );
}
