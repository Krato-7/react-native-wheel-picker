import React from 'react';
import {Text, type TextProps, StyleSheet} from 'react-native';
// import { TextType, allowedTextTypes } from "constants/constant";
import {Fonts} from 'constants/Font';
import {useTheme} from 'constants/ThemeContext';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | 'default'
    | 'titleLarge'
    | 'titleRegular'
    | 'titleMedium'
    | 'titleSmall'
    | 'titleXS'
    | 'defaultSemiBold'
    | 'subtitle'
    | 'buttonRegular'
    | 'buttonSmall'
    | 'buttonXS'
    | 'paragraphRegular'
    | 'paragraphMedium'
    | 'paragraphSmall'
    | 'paragraphXS'
    | 'link'
    | 'defaultSemiBold'
    | 'subtitle'
    | 'bummer';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  // const color = useThemeColor(
  //   { light: Colors.colors.SpaceBlack, dark: Colors.colors.PureWhite },
  //   "text"
  // );

  const {colors} = useTheme(); // Get theme and colors
  const textColor = colors.text; // Extract text color

  return (
    <Text
      {...(rest as TextProps)}
      style={[
        {color: textColor},
        type === 'default' ? styles.default : undefined,
        type === 'titleLarge' ? styles.titleLarge : undefined,
        type === 'titleRegular' ? styles.titleRegular : undefined,
        type === 'titleMedium' ? styles.titleMedium : undefined,
        type === 'titleSmall' ? styles.titleSmall : undefined,
        type === 'titleXS' ? styles.titleXS : undefined,
        type === 'buttonRegular' ? styles.buttonRegular : undefined,
        type === 'buttonSmall' ? styles.buttonSmall : undefined,
        type === 'buttonXS' ? styles.buttonXS : undefined,
        type === 'paragraphRegular' ? styles.paragraphRegular : undefined,
        type === 'paragraphMedium' ? styles.paragraphMedium : undefined,
        type === 'paragraphSmall' ? styles.paragraphSmall : undefined,
        type === 'paragraphXS' ? styles.paragraphXS : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'bummer' ? styles.bummer : undefined,

        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Fonts.fontFamily.primary,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  titleLarge: {
    fontSize: 34,
    fontWeight: 600,
    lineHeight: 40.8,
    letterSpacing: -1,
    fontFamily: Fonts.fontFamily.primary,
  },
  titleRegular: {
    fontSize: 28,
    fontWeight: 600,
    lineHeight: 33.6,
    letterSpacing: -0.5,
    fontFamily: Fonts.fontFamily.primary,
  },
  titleMedium: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: 26.4,
    letterSpacing: 0,
    fontFamily: Fonts.fontFamily.primary,
  },
  titleSmall: {
    fontSize: 18,
    fontWeight: 500,
    lineHeight: 21.6,
    letterSpacing: 0,
    fontFamily: Fonts.fontFamily.primary,
  },
  titleXS: {
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 14.4,
    letterSpacing: 0,
    fontFamily: Fonts.fontFamily.primary,
  },
  buttonRegular: {
    fontSize: 17,
    fontWeight: 500,
    lineHeight: 20.4,
    letterSpacing: 0,
    fontFamily: Fonts.fontFamily.primary,
  },
  buttonSmall: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 18,
    letterSpacing: 0,
    fontFamily: Fonts.fontFamily.primary,
  },
  buttonXS: {
    fontSize: 13,
    fontWeight: 500,
    lineHeight: 15.6,
    letterSpacing: 0,
    fontFamily: Fonts.fontFamily.primary,
  },
  paragraphRegular: {
    fontSize: 17,
    fontWeight: 400,
    lineHeight: 20.4,
    letterSpacing: 0,
    fontFamily: Fonts.fontFamily.primary,
  },
  paragraphMedium: {
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 18,
    letterSpacing: 0,
    fontFamily: Fonts.fontFamily.primary,
  },
  paragraphSmall: {
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 15.6,
    letterSpacing: 0,
    fontFamily: Fonts.fontFamily.primary,
  },
  paragraphXS: {
    fontSize: 10,
    fontWeight: 400,
    lineHeight: 12,
    letterSpacing: 0,
    fontFamily: Fonts.fontFamily.primary,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
  bummer: {
    fontSize: 64,
    fontWeight: 700,
    lineHeight: 67,
    letterSpacing: -1,
    fontFamily: Fonts.fontFamily.primary,
  },
});
