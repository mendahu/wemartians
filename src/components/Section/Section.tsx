import styles from './styles/Section.module.css';
import classNames from 'classnames';

export type SectionProps = {
  component?: 'header' | 'footer' | 'section' | 'main';
  background: 'light' | 'dark' | 'map';
  children?: React.ReactNode;
  className?: string;
};

export default function Section({
  component = 'section',
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
        styles[`${background}Background`]
      )}
    >
      {container}
    </Element>
  );
}
