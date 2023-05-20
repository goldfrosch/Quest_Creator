import { styleVariants } from '@vanilla-extract/css';
import { PALETTE } from '../../themes/palette';

export const background = styleVariants({
  primary: { background: 'blue' },
  secondary: { background: 'aqua' },
});

const ButtomTheme: {
  [key: string]: {
    backgroundColor: keyof typeof PALETTE | string;
    borderColor: keyof typeof PALETTE | string;
    color: keyof typeof PALETTE | string;
  };
} = {
  primary: {
    backgroundColor: PALETTE.BLUE[3],
    borderColor: PALETTE.BLUE[4],
    color: PALETTE.white,
  },
};

export const variant = styleVariants(
  ButtomTheme,
  ({ backgroundColor, borderColor, color }) => [
    { backgroundColor, borderColor, color },
  ]
);
