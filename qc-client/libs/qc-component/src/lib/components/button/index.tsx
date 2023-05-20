import { ButtonHTMLAttributes } from 'react';
import { PALETTE } from '../../themes/palette';

interface ButtonThemeType {
  background: keyof typeof PALETTE | string;
  borderColor: keyof typeof PALETTE | string;
  color: keyof typeof PALETTE | string;
}

const ButtomTheme: {
  [key: string]: {
    background: keyof typeof PALETTE | string;
    borderColor: keyof typeof PALETTE | string;
    color: keyof typeof PALETTE | string;
  };
} = {
  primary: {
    background: PALETTE.BLUE[3],
    borderColor: PALETTE.BLUE[4],
    color: PALETTE.white,
  },
};

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style' | 'className'> {
  theme: keyof typeof ButtomTheme | ButtonThemeType;
}

export function Button({ theme, ...props }: ButtonProps) {
  return <button {...props}></button>;
}
