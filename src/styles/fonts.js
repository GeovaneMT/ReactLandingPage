import { css } from "styled-components"

// FONT ICON'S
import {
  SansationRegular,
  SansationItalic,
  SansationLight,
  SansationLightItalic,
  SansationBold,
  SansationBoldItalic
} from "../assets/fonts"

export const MainFontFace = css`
  @font-face {
    font-family: "Sansation";
    font-weight: 500;
    font-style: normal;
    src: url("${SansationRegular}") format("opentype");
  }

  @font-face {
    font-family: "Sansation-Italic";
    font-weight: 500;
    font-style: italic;
    src: url("${SansationItalic}") format("opentype");
  }

  @font-face {
    font-family: "Sansation-Light";
    font-weight: 300;
    font-style: normal;
    src: url("${SansationLight}") format("opentype");
  }

  @font-face {
    font-family: "Sansation-Light-Italic";
    font-weight: 300;
    font-style: italic;
    src: url("${SansationLightItalic}") format("opentype");
  }

  @font-face {
    font-family: "Sansation-Bold";
    font-weight: 800;
    font-style: normal;
    src: url("${SansationBold}") format("opentype");
  }

  @font-face {
    font-family: "Sansation-Bold-Italic";
    font-weight: 800;
    font-style: italic;
    src: url("${SansationBoldItalic}") format("opentype");
  }
`