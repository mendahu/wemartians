import styles from './styles/Button.module.css';
import classNames from 'classnames';

export type ButtonProps = {
  color: 'light' | 'dark';
  label: string;
  href?: string;
  icon?: string;
};

export default function Button(props: ButtonProps) {
  return (
    <a
      className={classNames(styles.button, styles[props.color])}
      href={props.href}
    >
      {props.icon}
      <span>{props.label}</span>
    </a>
  );
}
