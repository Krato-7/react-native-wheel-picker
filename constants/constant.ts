export const allowedTextTypes = [
    "default",
    "titleLarge",
    "titleRegular",
    "titleMedium",
    "titleSmall",
    "titleXS",
    "defaultSemiBold",
    "subtitle",
    "buttonRegular",
    "buttonSmall",
    "buttonXS",
    "paragraphRegular",
    "paragraphMedium",
    "paragraphSmall",
    "paragraphXS",
    "link",
    "bummer",
  ] as const;
  
  export type TextType = (typeof allowedTextTypes)[number];
  