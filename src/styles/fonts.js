import { css } from "styled-components"

import {

  // Sansation
  SansationLight,
  SansationLightItalic,
  SansationRegular,
  SansationItalic,
  SansationBold,
  SansationBoldItalic,

  // SF Pro
  SFProDisplayThin,
  SFProDisplayThinItalic,
  SFProDisplayUltralight,
  SFProDisplayUltralightItalic,
  SFProDisplayLight,
  SFProDisplayLightItalic,
  SFProDisplayRegular,
  SFProDisplayRegularItalic,
  SFProDisplayMedium,
  SFProDisplayMediumItalic,
  SFProDisplaySemibold,
  SFProDisplaySemiboldItalic,
  SFProDisplayBold,
  SFProDisplayBoldItalic,
  SFProDisplayBlack,
  SFProDisplayBlackItalic,
  SFProDisplayHeavy,
  SFProDisplayHeavyItalic,

  // SF Pro Rounded
  SFProRoundedUltralight,
  SFProRoundedThin,
  SFProRoundedLight,
  SFProRoundedRegular,
  SFProRoundedMedium,
  SFProRoundedSemibold,
  SFProRoundedBold,
  SFProRoundedBlack,
  SFProRoundedHeavy,

  // SF Pro Text
  SFProTextUltralight,
  SFProTextUltralightItalic,
  SFProTextThin,
  SFProTextThinItalic,
  SFProTextLight,
  SFProTextLightItalic,
  SFProTextRegular,
  SFProTextRegularItalic,
  SFProTextMedium,
  SFProTextMediumItalic,
  SFProTextSemibold,
  SFProTextSemiboldItalic,
  SFProTextBold,
  SFProTextBoldItalic,
  SFProTextHeavy,
  SFProTextHeavyItalic,
  SFProTextBlack,
  SFProTextBlackItalic,

  // SF Pro Compressed Ultralight (ttf)
  SFProCompressedUltralight,
  SFProCompressedUltralightItalic,
} from "../assets/fonts"


export const Sansation = css`
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

export const SFPro = css`
  @font-face {
    font-family: "SF-Pro-Display-Thin";
    font-weight: 100; /* Thin font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProDisplayThin}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Display-Thin-Italic";
    font-weight: 100; /* Thin font weight */
    font-style: italic; /* Italic font style */
    src: url("${SFProDisplayThinItalic}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Display-Ultralight";
    font-weight: 200; /* Ultralight font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProDisplayUltralight}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Display-Ultralight-Italic";
    font-weight: 200; /* Ultralight font weight */
    font-style: italic; /* Italic font style */
    src: url("${SFProDisplayUltralightItalic}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Display-Light";
    font-weight: 300; /* Light font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProDisplayLight}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Display-Light-Italic";
    font-weight: 300; /* Light font weight */
    font-style: italic; /* Italic font style */
    src: url("${SFProDisplayLightItalic}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Display-Regular";
    font-weight: 400; /* Regular font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProDisplayRegular}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Display-Regular-Italic";
    font-weight: 400; /* Regular font weight */
    font-style: italic; /* Italic font style */
    src: url("${SFProDisplayRegularItalic}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Display-Medium";
    font-weight: 500; /* Medium font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProDisplayMedium}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Display-Medium-Italic";
    font-weight: 500; /* Medium font weight */
    font-style: italic; /* Italic font style */
    src: url("${SFProDisplayMediumItalic}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Display-Semibold";
    font-weight: 600; /* Semibold font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProDisplaySemibold}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Display-Semibold-Italic";
    font-weight: 600; /* Semibold font weight */
    font-style: italic; /* Italic font style */
    src: url("${SFProDisplaySemiboldItalic}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Display-Bold";
    font-weight: 700; /* Bold font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProDisplayBold}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Display-Bold-Italic";
    font-weight: 700; /* Bold font weight */
    font-style: italic; /* Italic font style */
    src: url("${SFProDisplayBoldItalic}") format("opentype");
  }
  @font-face {
    font-family: "SF-Pro-Display-Black";
    font-weight: 800; /* Black font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProDisplayBlack}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Display-Black-Italic";
    font-weight: 800; /* Black font weight */
    font-style: italic; /* Italic font style */
    src: url("${SFProDisplayBlackItalic}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Display-Heavy";
    font-weight: 900; /* Heavy font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProDisplayHeavy}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Display-Heavy-Italic";
    font-weight: 900; /* Heavy font weight */
    font-style: italic; /* Italic font style */
    src: url("${SFProDisplayHeavyItalic}") format("opentype");
  }
`

export const SFProRounded = css`
  @font-face {
    font-family: "SF-Pro-Rounded-Ultralight";
    font-weight: 100; /* Ultralight font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProRoundedUltralight}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Rounded-Thin";
    font-weight: 200; /* Thin font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProRoundedThin}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Rounded-Light";
    font-weight: 300; /* Light font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProRoundedLight}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Rounded-Regular";
    font-weight: 400; /* Regular font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProRoundedRegular}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Rounded-Medium";
    font-weight: 500; /* Medium font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProRoundedMedium}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Rounded-Semibold";
    font-weight: 600; /* Semibold font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProRoundedSemibold}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Rounded-Bold";
    font-weight: 700; /* Bold font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProRoundedBold}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Rounded-Black";
    font-weight: 800; /* Black font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProRoundedBlack}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Rounded-Heavy";
    font-weight: 900; /* Heavy font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProRoundedHeavy}") format("opentype");
  }
`

export const SFProText = css`
  @font-face {
    font-family: "SF-Pro-Text-Ultralight";
    font-weight: 200; /* Ultralight font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProTextUltralight}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Text-Ultralight-Italic";
    font-weight: 200; /* Ultralight font weight */
    font-style: italic; /* Italic font style */
    src: url("${SFProTextUltralightItalic}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Text-Thin";
    font-weight: 300; /* Thin font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProTextThin}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Text-Thin-Italic";
    font-weight: 300; /* Thin font weight */
    font-style: italic; /* Italic font style */
    src: url("${SFProTextThinItalic}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Text-Light";
    font-weight: 400; /* Light font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProTextLight}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Text-Light-Italic";
    font-weight: 400; /* Light font weight */
    font-style: italic; /* Italic font style */
    src: url("${SFProTextLightItalic}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Text-Regular";
    font-weight: 500; /* Regular font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProTextRegular}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Text-Regular-Italic";
    font-weight: 500; /* Regular font weight */
    font-style: italic; /* Italic font style */
    src: url("${SFProTextRegularItalic}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Text-Medium";
    font-weight: 600; /* Medium font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProTextMedium}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Text-Medium-Italic";
    font-weight: 600; /* Medium font weight */
    font-style: italic; /* Italic font style */
    src: url("${SFProTextMediumItalic}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Text-Semibold";
    font-weight: 700; /* Semibold font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProTextSemibold}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Text-Semibold-Italic";
    font-weight: 700; /* Semibold font weight */
    font-style: italic; /* Italic font style */
    src: url("${SFProTextSemiboldItalic}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Text-Bold";
    font-weight: 800; /* Bold font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProTextBold}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Text-Bold-Italic";
    font-weight: 800; /* Bold font weight */
    font-style: italic; /* Italic font style */
    src: url("${SFProTextBoldItalic}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Text-Heavy";
    font-weight: 900; /* Heavy font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProTextHeavy}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Text-Heavy-Italic";
    font-weight: 900; /* Heavy font weight */
    font-style: italic; /* Italic font style */
    src: url("${SFProTextHeavyItalic}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Text-Black";
    font-weight: 1000; /* Black font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProTextBlack}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Text-Black-Italic";
    font-weight: 1000; /* Black font weight */
    font-style: italic; /* Italic font style */
    src: url("${SFProTextBlackItalic}") format("opentype");
  }
`

export const SFProCompressedUltralights = css`
  @font-face {
    font-family: "SF-Pro-Compressed-Ultralight";
    font-weight: 100; /* Ultralight font weight */
    font-style: normal; /* Regular font style */
    src: url("${SFProCompressedUltralight}") format("opentype");
  }

  @font-face {
    font-family: "SF-Pro-Compressed-Ultralight-Italic";
    font-weight: 100; /* Ultralight font weight */
    font-style: italic; /* Italic font style */
    src: url("${SFProCompressedUltralightItalic}") format("opentype");
  }
`