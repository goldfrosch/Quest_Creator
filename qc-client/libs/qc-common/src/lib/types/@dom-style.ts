export type HTMLElementStyle = Partial<CSSStyleDeclaration>;

export type BorderTheme = Pick<
  HTMLElementStyle,
  'borderColor' | 'borderRadius' | 'borderWidth'
>;

export type ColorTheme = Pick<HTMLElementStyle, 'backgroundColor' | 'color'>;

export type FlexPatternTheme = Pick<
  HTMLElementStyle,
  'alignItems' | 'justifyContent' | 'flexDirection' | 'gap'
>;

export type FontTheme = Pick<HTMLElementStyle, 'fontSize' | 'fontWeight'>;
