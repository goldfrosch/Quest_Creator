import { ButtonHTMLAttributes } from 'react';
import { PALETTE } from '../../themes/palette';

const ButtomTheme: {
  [key: string]: {
    background: keyof typeof PALETTE | string;
    borderColor: keyof typeof PALETTE | string;
  };
} = {};

interface ButtonProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'style' | 'className'
  > {}

export function Button({ ...props }: ButtonProps) {
  return <button {...props}></button>;
}
