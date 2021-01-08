import styles from "./styles/CommonHeader.module.css";
import Image from "next/image";

import Breadcrumbs, { Breadcrumb } from "../Breadcrumbs/Breadcrumbs";

export type CommonHeaderProps = {
  title: string;
  breadcrumbs: {
    crumbs: Breadcrumb[];
    currentLocation: string;
  };
};

export default function CommonHeader(props: CommonHeaderProps) {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <Image src={"/2021_logo-dark.png"} width={100} height={100} />
      </div>
      <div className={styles.headerTitleContainer}>
        <h1 className={styles.title}>{props.title}</h1>

        <Breadcrumbs
          crumbs={props.breadcrumbs.crumbs}
          currentLocation={props.breadcrumbs.currentLocation}
        />
      </div>
    </div>
  );
}
