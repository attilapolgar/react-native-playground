const colorOptions = {
  orange: {
    FAINT: '#FFF5E7',
    LIGHT: '#DEBA89',
    COLOR: '#AF7C37',
    DARK: '#804C06',
    DARKEST: '#4E2D00',
  },
  green: {
    FAINT: '#B3C6B8',
    LIGHT: '#66A677',
    COLOR: '#298341',
    COLOR_DARK: '#04601C',
    DARKEST: '#003A0F',
  },
  yellow: {
    FAINT: '#FFFB72',
    LIGHT: '#EEE946',
    COLOR: '#DFDA18',
    COLOR_DARK: '#B0AC0A',
    DARKEST: '#898600',
  },
}

export const base = {
  FONT_SIZE_TINY: 8,
  FONT_SIZE_SMALL: 12,
  FONT_SIZE_MEDIUM: 14,
  FONT_SIZE_LARGE: 18,
  FONT_SIZE_EXTRA_LARGE: 24,
  FONT_SIZE_MASSIVE: 34,

  FONT_WEIGHT_LIGHT: '200',
  FONT_WEIGHT_MEDIUM: '500',
  FONT_WEIGHT_BOLD: '700',

  ELEVATION: 0,
  BORDER_RADIUS: 0,
}

const fancy = {
  ...base,
  ELEVATION: 15,
  BORDER_RADIUS: 10,
}

const makeTheme = (primaryColor, secondaryColor, sizes) => ({
  PRIMARY_BACKGROUND_COLOR: primaryColor.LIGHT,
  PRIMARY_BACKGROUND_LIGHT: primaryColor.FAINT,

  SECONDARY_BACKGROUND_COLOR: secondaryColor.LIGHT,
  SECONDARY_BACKGROUND_LIGHT: secondaryColor.FAINT,

  PRIMARY_TEXT_COLOR: '#ffffff',
  PRIMARY_TEXT_LIGHT: '#f7f7f7',
  ...sizes,
})

export const darkTheme = makeTheme(
  colorOptions.green,
  colorOptions.orange,
  base
)

export const lightTheme = makeTheme(
  colorOptions.orange,
  colorOptions.yellow,
  fancy
)
