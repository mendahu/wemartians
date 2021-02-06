import MailingListCallToAction from "../MailingListCallToAction/MailingListCallToAction";
import PatreonCallToAction from "../PatreonCallToAction/PatreonCallToAction";
import Section from "../Section/Section";
import styles from "./styles/PatreonAndMailingListSection.module.css";

export type PatreonAndMailingListSectionProps = {};

export default function PatreonAndMailingListSection(
  props: PatreonAndMailingListSectionProps
) {
  return (
    <Section background="dark" className={styles.ctaContainer}>
      <div className={styles.patreonCtaContainer}>
        <PatreonCallToAction />
      </div>
      <div className={styles.mailingListCtaContainer}>
        <MailingListCallToAction color="dark" />
      </div>
    </Section>
  );
}
