import styles from "./styles/Section.module.css";
import classNames from "classnames";
import Image from "next/image";

export type SectionProps = {
  component?: "header" | "footer" | "section" | "main";
  background: "light" | "dark" | "map";
  children?: React.ReactNode;
  className?: string;
};

export default function Section({
  component = "section",
  background,
  children,
  className,
}: SectionProps) {
  const container = (
    <div className={classNames(styles.container, className)}>{children}</div>
  );
  const Element = component;

  return (
    <Element
      className={classNames(
        styles.flexContainer,
        styles[`${background}Background`],
        background === "map" && styles.bgWrap
      )}
    >
      {background === "map" && (
        <Image
          alt="Vallis Marineris Wallpaper"
          src="/header_wallpaper.png"
          layout="fill"
          objectFit={"cover"}
        />
      )}
      {container}
    </Element>
  );
}
