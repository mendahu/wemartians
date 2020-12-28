import { footer as footerCopy } from '../../../copy/copy.json';
import Image from 'next/image';
import styles from './styles/Footer.module.css';

const twitterBaseUrl = 'https://www.twitter.com/';

export type FooterProps = {};

export default function Footer(props: FooterProps) {
  return (
    <div>
      <h1>{footerCopy.title}</h1>
      <div className={styles.socialContainer}>
        {footerCopy.twitterAccounts.map((account, index) => {
          return (
            <div key={index} className={styles.socialCard}>
              <div>
                <a target="_blank" href={`${twitterBaseUrl}${account.handle}`}>
                  <Image
                    layout={'fixed'}
                    src={account.profileImage}
                    width={75}
                    height={75}
                    className={styles.socialProfileImage}
                  />
                </a>
              </div>
              <div className={styles.socialHandleContainer}>
                <a target="_blank" href={`${twitterBaseUrl}${account.handle}`}>
                  <h2>{account.name}</h2>
                  <h3>@{account.handle}</h3>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <p className={styles.copyright}>
        {String.fromCharCode(169)} {footerCopy.copyright.year}{' '}
        {footerCopy.copyright.name}
      </p>
    </div>
  );
}
