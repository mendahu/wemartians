import CommonHeader from "../../src/components/CommonHeader/CommonHeader";
import Section from "../../src/components/Section/Section";
import styles from "../../src/pages/SignupPage/styles/SignupPage.module.css";
import signupCopy from "../../copy/Signup/index.json";
import Footer from "../../src/components/Footer/Footer";
import MailingListCallToAction from "../../src/components/MailingListCallToAction/MailingListCallToAction";

export type SignupPageProps = {};

export default function index(props: SignupPageProps) {
  return (
    <>
      <Section component="header" background="dark">
        <CommonHeader
          title={signupCopy.header.title}
          breadcrumbs={signupCopy.header.breadcrumbs}
        />
      </Section>
      <main>
        <Section component="section" background="light">
          <div>
            <h3>Content Includes:</h3>
            <ul>
              <li>Special Event Notifications</li>
              <li>New Merchandise Launches</li>
              <li>New Content from Jake</li>
            </ul>
          </div>
          <MailingListCallToAction />
        </Section>
      </main>
      <Section component="footer" background="dark">
        <Footer />
      </Section>
    </>
  );
}
