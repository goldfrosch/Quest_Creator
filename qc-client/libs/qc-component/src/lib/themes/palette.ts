const RED = [
  '#FF8A8A','#FF5C5C','#FF2E2E','#FF0000','#D10000','#A30000','#750000'
] as const;

const ORANGE = [
  '#FFD68A','#FFC55C','#FFB52E','#FFA500','#D18700','#A36A00','#754C00'
] as const;

const YELLOW = [
  '#FFED8A','#FFE55C','#FFDE2E','#FFD700','#D1B000','#A38A00','#756300'
] as const;

const GREEN = [
  '#B9E9C9','#96DEAE','#73D393','#50C878','#38B261','#2D8F4E','#226C3B'
] as const;

const BLUE = [
  '#B8C7F4','#90A8EE','#6988E7','#4169E1','#214ED3','#1B3FAB','#153084'
] as const;

const PURPLE = [
  '#D7A1F9','#C576F6','#B24BF3','#A020F0','#880ED4','#6C0BA9','#51087E'
] as const;

const MAIN_COLOR = {
  primary: '',
  secondary: '',
  black: '#000000',
  white: '#ffffff',
} as const;

export const PALETTE = {
  ...MAIN_COLOR,
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  BLUE,
  PURPLE,
} as const;