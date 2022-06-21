import { createGlobalStyle } from "styled-components";

import RubikLight from "../assets/fonts/Rubik/Rubik-Light.ttf";
import RubikLightItalic from "assets/fonts/Rubik/Rubik-LightItalic.ttf";
import RubikRegular from "assets/fonts/Rubik/Rubik-Regular.ttf";
import RubikRegularItalic from "assets/fonts/Rubik/Rubik-Italic.ttf";
import RubikMedium from "assets/fonts/Rubik/Rubik-Medium.ttf";
import RubikMediumItalic from "assets/fonts/Rubik/Rubik-MediumItalic.ttf";
import RubikSemiBold from "assets/fonts/Rubik/Rubik-SemiBold.ttf";
import RubikSemiBoldItalic from "assets/fonts/Rubik/Rubik-SemiBoldItalic.ttf";
import RubikBold from "assets/fonts/Rubik/Rubik-Bold.ttf";
import RubikBoldItalic from "assets/fonts/Rubik/Rubik-BoldItalic.ttf";
import RubikExtraBold from "assets/fonts/Rubik/Rubik-ExtraBold.ttf";
import RubikExtraBoldItalic from "assets/fonts/Rubik/Rubik-ExtraBoldItalic.ttf";
import RubikBlack from "assets/fonts/Rubik/Rubik-Black.ttf";
import RubikBlackItalic from "assets/fonts/Rubik/Rubik-BlackItalic.ttf";

export const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Rubik';
    font-weight: 300;
    src: url(${RubikLight}) format('truetype');
  }
  @font-face {
    font-family: 'Rubik';
    font-weight: 300;
    font-style: italic;
    src: url(${RubikLightItalic}) format('truetype');
  }
  @font-face {
    font-family: 'Rubik';
    font-weight: 400;
    src: url(${RubikRegular}) format('truetype');
  }
  @font-face {
    font-family: 'Rubik';
    font-weight: 400;
    font-style: italic;
    src: url(${RubikRegularItalic}) format('truetype');
  }
  @font-face {
    font-family: 'Rubik';
    font-weight: 500;
    src: url(${RubikMedium}) format('truetype');
  }
  @font-face {
    font-family: 'Rubik';
    font-weight: 500;
    font-style: italic;
    src: url(${RubikMediumItalic}) format('truetype');
  }
  @font-face {
    font-family: 'Rubik';
    font-weight: 600;
    src: url(${RubikSemiBold}) format('truetype');
  }
  @font-face {
    font-family: 'Rubik';
    font-weight: 600;
    font-style: italic;
    src: url(${RubikSemiBoldItalic}) format('truetype');
  }
  @font-face {
    font-family: 'Rubik';
    font-weight: 700;
    src: url(${RubikBold}) format('truetype');
  }
  @font-face {
    font-family: 'Rubik';
    font-weight: 700;
    font-style: italic;
    src: url(${RubikBoldItalic}) format('truetype');
  }
  @font-face {
    font-family: 'Rubik';
    font-weight: 800;
    src: url(${RubikExtraBold}) format('truetype');
  }
  @font-face {
    font-family: 'Rubik';
    font-weight: 800;
    font-style: italic;
    src: url(${RubikExtraBoldItalic}) format('truetype');
  }
  @font-face {
    font-family: 'Rubik';
    font-weight: 900;
    src: url(${RubikBlack}) format('truetype');
  }
  @font-face {
    font-family: 'Rubik';
    font-weight: 900;
    font-style: italic;
    src: url(${RubikBlackItalic}) format('truetype');
  }
`;
