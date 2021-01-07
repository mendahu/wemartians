import styles from './styles/Button.module.css';
import classNames from 'classnames';

export type ButtonProps = {
  color: 'light' | 'dark';
  label: string;
  href?: string;
  icon?: string;
  className?: string;
  onClick?: () => void;
  size?: 'lg' | 'sm';
};

export default function Button(props: ButtonProps) {
  const size = props.size || 'lg';

  return (
    <a
      className={classNames(
        styles.button,
        styles[props.color],
        props.className,
        styles[size]
      )}
      onClick={props.onClick}
      href={props.href}
    >
      {props.icon}
      <span>{props.label}</span>
    </a>
  );
}
