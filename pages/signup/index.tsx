import CommonHeader from "../../src/components/CommonHeader/CommonHeader";
import Section from "../../src/components/Section/Section";
import styles from "../../src/pages/SignupPage/styles/SignupPage.module.css";
import signupCopy from "../../copy/Signup/index.json";
import Footer from "../../src/components/Footer/Footer";
import MailingListCallToAction from "../../src/components/MailingListCallToAction/MailingListCallToAction";
import Head from "next/head";
import CommonHead from "../../src/components/CommonHead/CommonHead";

export type SignupPageProps = {};

export default function index(props: SignupPageProps) {
  return (
    <>
      <CommonHead
        title="WeMartians Mailing List"
        description="Don't miss out on new announcements from Jake."
        url="https://www.wemartians.com/signup"
      />
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
