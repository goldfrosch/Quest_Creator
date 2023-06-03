import { styleVariants } from '@vanilla-extract/css';
import { PALETTE } from '../../themes/palette';
import { BorderTheme, ColorTheme } from '@libs/qc-common';

type ButtonThemeKey = 'primary' | 'secondary';
export type ButtonThemeType = Record<ButtonThemeKey, ColorTheme & BorderTheme>;

export const ButtomTheme: ButtonThemeType = {
  primary: {
    backgroundColor: PALETTE.BLUE[3],
    borderColor: PALETTE.BLUE[4],
    color: PALETTE.white,
  },
  secondary: {
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
