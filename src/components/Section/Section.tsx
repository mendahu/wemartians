import styles from './styles/Section.module.css';
import classNames from 'classnames';

export type SectionProps = {
  component?: 'header' | 'footer' | 'section';
  background: 'light' | 'dark' | 'map';
  children?: React.ReactNode;
};

export default function Section({
  component = 'section',
  background,
  children,
}: SectionProps) {
  const container = <div className={styles.container}>{children}</div>;
  const Element = component;

  return (
    <Element
      className={classNames(
        styles.flexContainer,
        styles[`${background}Background`]
      )}
    >
      {container}
    </Element>
  );
}
