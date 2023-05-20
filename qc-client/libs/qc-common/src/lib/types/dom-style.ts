export type HTMLElementStyle = CSSStyleDeclaration;

export type ColorTheme = Pick<HTMLElementStyle, 'backgroundColor' | 'color'>;

export type BorderTheme = Pick<
  HTMLElementStyle,
  'borderColor' | 'borderRadius' | 'borderWidth'
>;

export type FlexPatternTheme = Pick<
  HTMLElementStyle,
  'alignItems' | 'justifyContent' | 'flexDirection' | 'gap'
>;
