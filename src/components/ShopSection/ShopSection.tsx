import styles from "./styles/ShopSection.module.css";
import { shop as shopCopy } from "../../../copy/Home/index.json";
import Image from "next/image";
import Button from "../Button/Button";

export type ShopSectionProps = {};

export default function ShopSection(props: ShopSectionProps) {
  return (
    <div className={styles.container}>
      <a href={shopCopy.cta.link} target="_blank" rel="noopener">
        <Image
          src="/shop_ad.png"
          height={350}
          width={350}
          className={styles.shopImage}
          alt="Three Space-Themed WeMartians T-Shirts"
        />
      </a>
      <div className={styles.shopTextContainer}>
        <h1>{shopCopy.title}</h1>
        <p>{shopCopy.description}</p>
        <Button
          className={styles.button}
          label={shopCopy.cta.label}
          color="dark"
          href={shopCopy.cta.link}
        />
      </div>
    </div>
  );
}
