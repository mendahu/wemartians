import CommonHeader from "../../src/components/CommonHeader/CommonHeader";
import Section from "../../src/components/Section/Section";
import styles from "../../src/pages/SignupPage/styles/SignupPage.module.css";
import signupCopy from "../../copy/Signup/index.json";
import Footer from "../../src/components/Footer/Footer";
import MailingListCallToAction from "../../src/components/MailingListCallToAction/MailingListCallToAction";
import Head from "next/head";

export type SignupPageProps = {};

export default function index(props: SignupPageProps) {
  return (
    <>
      <Head>
        <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@we_martians" />
        <meta name="twitter:title" content="WeMartians Mailing List" />
        <meta
          name="twitter:description"
          content="Don't miss out on new announcements from Jake."
        />
        <meta
          name="twitter:image"
          content="https://www.wemartians.com/twitter_card_image_wemartians.png"
        />
        <meta property="og:url" content="https://www.wemartians.com/signup" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="WeMartians Mailing List" />
        <meta
          property="og:description"
          content="Don't miss out on new announcements from Jake."
        />
        <meta
          property="og:image"
          content="https://www.wemartians.com/facebook_card_image_wemartians.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta property="og:image:type" content="image/png" />
      </Head>
      <Section component="header" background="map">
        <CommonHeader
          title={signupCopy.header.title}
          breadcrumbs={signupCopy.header.breadcrumbs}
        />
      </Section>
      <main>
        <Section
          component="section"
          background="light"
          className={styles.container}
        >
          <div className={styles.sectionContainer}>
            <MailingListCallToAction color="light" />
          </div>
          <div className={styles.sectionContainer}>
            <h2>{signupCopy.body.listTitle}</h2>
            <ul className={styles.list}>
              {signupCopy.body.listContents.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </Section>
      </main>
      <Section component="footer" background="dark">
        <Footer />
      </Section>
    </>
  );
}
