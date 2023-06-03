import { ButtonHTMLAttributes } from 'react';
import * as styles from './button.css';

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style' | 'className'> {
  theme: keyof typeof styles.ButtomTheme;
}

export function Button({ theme, ...props }: ButtonProps) {
  return <button className={styles.variant[theme]} {...props}></button>;
}
