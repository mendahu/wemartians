import styles from "./styles/ShopSection.module.css";
import Image from "next/image";
import Button from "../Button/Button";

const defaultCopy = {
  image: {
    url: "/shop_ad.png",
    altText: "Various T-shirt designs from the WeMartians Shop",
  },
  title: "Get WeMartians Merch",
  description:
    "Check out the latest designs of shirts, mission patches and other merchandise from the WeMartians shop and support the show.",
  buttonLabel: "Shop Merch",
  shopLink: "https://shop.wemartians.com",
};

export type ShopSectionProps = {
  image?: {
    url: string;
    altText: string;
  };
  title?: string;
  description?: string;
  buttonLabel?: string;
  shopLink?: string;
};

export default function ShopSection({
  image = defaultCopy.image,
  title = defaultCopy.title,
  description = defaultCopy.description,
  buttonLabel = defaultCopy.buttonLabel,
  shopLink = defaultCopy.shopLink,
}: ShopSectionProps) {
  return (
    <div className={styles.container}>
      <a href={shopLink} target="_blank" rel="noopener">
        <Image
          src={image.url}
          height={350}
          width={350}
          className={styles.shopImage}
          alt={image.altText}
        />
      </a>
      <div className={styles.shopTextContainer}>
        <h1>{title}</h1>
        <p>{description}</p>
        <Button
          className={styles.button}
          label={buttonLabel}
          color="dark"
          href={shopLink}
        />
      </div>
    </div>
  );
}
