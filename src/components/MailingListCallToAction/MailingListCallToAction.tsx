import styles from "./styles/MailingListCallToAction.module.css";
import { mailingList as mailingListCopy } from "../../../copy/Home/index.json";
import MailchimpForm from "../MailchimpForm/MailchimpForm";

export type MailingListCallToActionProps = {};

export default function MailingListCallToAction(
  props: MailingListCallToActionProps
) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{mailingListCopy.title}</h1>
      <p className={styles.mtop}>{mailingListCopy.description}</p>
      <MailchimpForm />
    </div>
  );
}
