import styles from "./styles/Breadcrumbs.module.css";
import Link from "next/link";

export type Breadcrumb = {
  label: string;
  href: string;
};

export type BreadcrumbsProps = {
  crumbs: Breadcrumb[];
  currentLocation: string;
};

export default function Breadcrumbs(props: BreadcrumbsProps) {
  return (
    <ul className={styles.breadcrumbsContainer}>
      {props.crumbs.map((breadcrumb, index) => {
        return (
          <li key={index}>
            <Link href={breadcrumb.href}>
              <a className={styles.link}>{breadcrumb.label}</a>
            </Link>
            {" >"}
          </li>
        );
      })}
      <li>{props.currentLocation}</li>
    </ul>
  );
}
