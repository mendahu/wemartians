import styles from "./styles/MailingListCallToAction.module.css";
import { mailingList as mailingListCopy } from "../../../copy/Home/index.json";
import MailchimpForm from "../MailchimpForm/MailchimpForm";

export type MailingListCallToActionProps = {
  color: "light" | "dark";
};

export default function MailingListCallToAction(
  props: MailingListCallToActionProps
) {
  return (
    <>
      <h1>{mailingListCopy.title}</h1>
      <p className={styles.mtop}>{mailingListCopy.description}</p>
      <MailchimpForm color={props.color} />
    </>
  );
}
