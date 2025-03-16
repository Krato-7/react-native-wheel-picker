/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { LinearGradient } from "expo-linear-gradient";

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

type GradientType = Record<string, [string, string, ...string[]]>;

export const Colors = {
  colors: {
    CerleanBlue: "#007BFF",
    ElectricBlue: "#0511F3",
    DeepBlue: "#030A8C",
    EmeraldGreen: "#2ECC71",
    DeepGreen: "#00A83E",
    GreenishCyan: "#2BD9A8",
    LightningRed: "#F10505",
    FlameRed: "#FF4500",
    CoolRed: "#F92D48",
    BrightOrange: "#FFA500",
    DeepOrange: "#F27405",
    GoldenSunshine: "#FFD700",
    HotPink: "#FF4081",
    LightningMagenta: "#F5147E",
    ElectricPurple: "#9400D3",
    PureWhite: "#FFFFFF",
    SpaceWhite: "#F5F7F9",
    RoyalWhite: "#F0F1F5",
    SoftAsh: "#E4E6EC",
    ModernAsh: "#CDD2DA",
    DeepAsh: "#B4BBC5",
    SoftGray: "#9BA2B1",
    ModernGray: "#81869C",
    DeepGray: "#63687D",
    SoftCharcoal: "#505568",
    ModernCharcoal: "#3B3C4F",
    DeepCharcoal: "#282839",
    RoyalBlack: "#14141F",
    SpaceBlack: "#06060A",
    PureBlack: "#000000",
  },
  colorsOpacity: {
    PureWhite10: "rgba(255, 255, 255, 0.1)",
    PureWhite40: "rgba(255, 255, 255, 0.40)",
    PureWhite25: "rgba(255, 255, 255, 0.25)",
    ModernCharcoal25: "rgba(59, 60, 79, 0.25)",
    ModernCharcoal10: "rgba(59, 60, 79, 0.1)",
  },
  gradient: {
    linearGradients: {
      BrightSunlight: ["#FF6A1F", "#FFD400"],
      RedSky: ["#FFD951", "#EC201B"],
      EveningSky: ["#E60B92", "#FEA720"],
      DreamyPink: ["#F14FFF", "#FF4F7A"],
      VividPurple: ["#2929FF", "#B829FF"],
      FrostRaincloud: ["#DAE4EB", "#E5E5F0", "#DAE4EB"],
      LightningBlue: ["#82C9FF", "#0051FF"],
      BrightOcean: ["#00FFC2", "#2F9FF1"],
      DeepOcean: ["#00E0FF", "#423FC3"],
      ElectricBlue: ["#46A6FF", "#55FFF5"],
      DreamyCandy: ["#F641F6", "#24E6F5"],
      FrostJungle: ["#97F77D", "#52D54D"],
      DarkSunset: ["#4B12CB", "#FB0E89"],
      BrightGreen: ["#8BFC50", "#54B83A"],
      SoftMint: ["#3DFF8B", "#3DDBFF"],
      FrostEvening: ["#EB2DA2", "#F7B550"],
      BlackGradient: ["#000000", "#000000"]
    } as GradientType,
    radialGradient: {
      ForbiddenSauce: ["#FF1B90", "#F80261", "#ED00C0", "#C500E9", "#7017FF"],
    } as GradientType,
    angularGradient: {
      ColorSpectrum: [
        "#FF0000",
        "#FFFF00",
        "#00FF00",
        "#00FFFF",
        "#0055FF",
        "#FF00FF",
      ],
    } as GradientType,
  },
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  } as const,
};
