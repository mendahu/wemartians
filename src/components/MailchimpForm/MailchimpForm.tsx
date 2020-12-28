import styles from './styles/MailchimpForm.module.css';
import { mailchimpForm as mailchimpFormCopy } from '../../../copy/copy.json';
import Button from '../Button/Button';
import { useState } from 'react';

export type MailchimpFormProps = {};

export default function MailchimpForm(props: MailchimpFormProps) {
  const [email, setEmail] = useState('');
  const [falseForm, setFalseForm] = useState('');

  return (
    <div className={styles.formContainer}>
      <form
        action={mailchimpFormCopy.cta.action}
        method="post"
        name="mc-embedded-subscribe-form"
        target="_blank"
        className={styles.form}
        noValidate
      >
        <div className={styles.inputContainer}>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name="EMAIL"
            placeholder={mailchimpFormCopy.formPlaceholder}
            required
            className={styles.formInput}
          />
          <div
            style={{ position: 'absolute', left: '-5000px' }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_5b308fe85dae4499e221bae6e_3393e4d487"
              tabIndex={-1}
              onChange={(e) => setFalseForm(e.target.value)}
              value={falseForm}
            />
          </div>
          <div className={styles.subscribeButtonContainer}>
            <input
              className={styles.subscribeButton}
              type="submit"
              value={mailchimpFormCopy.cta.label}
              name="subscribe"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
