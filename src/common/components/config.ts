import resolveConfig from "tailwindcss/resolveConfig"

import tailwindConfig from "../../../tailwind.config.js"

export interface TailwindBaseColor {
  "100": string
  "200": string
  "300": string
  "400": string
  "500": string
  "600": string
  "700": string
  "800": string
  "900": string
}

export interface AnalyticsColor {
  default: string
  hover: string
  active: string
  disabled: string
  light: string
  dark: string
}

export interface TailwindTheme {
  screens: {
    sm: string
    md: string
    lg: string
    xl: string
  }
  colors: {
    black: string
    white: string
    transparent: string
    primary: AnalyticsColor
    blue: TailwindBaseColor
    gray: TailwindBaseColor
    green: TailwindBaseColor
    indigo: TailwindBaseColor
    orange: TailwindBaseColor
    pink: TailwindBaseColor
    purple: TailwindBaseColor
    red: TailwindBaseColor
    teal: TailwindBaseColor
    yellow: TailwindBaseColor
  }
}

export interface TailwindConfig {
  theme: TailwindTheme
}

export const config: TailwindConfig = resolveConfig(tailwindConfig)
