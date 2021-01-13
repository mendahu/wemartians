import Link from "next/link";
import styles from "./styles/Nav.module.css";

export type NavProps = {
  className?: string;
};

export default function Nav(props: NavProps) {
  return (
    <nav className={props.className}>
      <ul className={styles.list}>
        <li>
          <Link href="/podcasts">
            <a className={styles.link}>Podcasts</a>
          </Link>
        </li>
        <li>
          <a href="https://shop.wemartians.com" className={styles.link}>
            Shop
          </a>
        </li>
        <li>
          <a href="https://www.patreon.com/wemartians" className={styles.link}>
            Patreon
          </a>
        </li>
      </ul>
    </nav>
  );
}
