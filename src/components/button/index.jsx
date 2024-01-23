import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import { PiArrowCircleRight } from "react-icons/pi";

const CommonLinkContent = ({
  iconSize,
  iconColor,
  icon,
  title,
  fixedTitle,
}) => (
  <>
    <span style={{ fontSize: iconSize, color: iconColor }}>
      {icon ? (
        icon
      ) : (
        <svg
          width="0"
          height="0"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="image"
          className="svg-inline--fa fa-image fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M0 32v448c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32zm96 352v64h256v-64zM496 32v64H400L333.41 99.41 350.82 82l37.89 37.89L464 82v96h64zm0 112c-88.22 0-160 71.78-160 160s71.78 160 160 160 160-71.78 160-160-71.78-160-160-160zm-16 219.42C456.12 391.45 416.82 416 376 416s-80.12-24.55-104-62.58C256.92 353.66 238.4 344 216 344s-40.92 9.66-56 9.42C117.09 352.42 64 295.88 64 224c0-70.59 57.47-128 128-128 49.34 0 92.92 28.23 114.19 69.44C320.78 167.7 345.55 160 376 160c39.82 0 79.12 24.55 104 62.58C455.08 158.34 474.6 168 496 168s40.92-9.66 56-9.42C394.91 159.58 448 216.12 448 288c0 70.59-57.47 128-128 128-49.34 0-92.92-28.23-114.19-69.44z"
          ></path>
        </svg>
      )}
      <PiArrowCircleRight />
    </span>
    <p style={{ fontSize: "1.8rem" }}>{title}</p>
    <p style={{ fontSize: "1.8rem" }}>{fixedTitle}</p>
  </>
)
export const Button = ({
  title = "Título",
  fixedTitle = "Ir Para",
  hiddenTitle = "Hidden Title",
  iconSize = "2.4rem",
  icon = "",
  to = "",
  backgroundColor = "",
  textColor = "",
  iconColor = "",
  onClick = () => console.log("Button clicked"),
  ...rest
}) => {
  const isExternalLink = to.startsWith("http") || to.startsWith("//")

  const commonLinkProps = {
    to,
    style: { fontSize: iconSize, color: textColor, iconColor },
    children: (
      <CommonLinkContent
        {...{ iconSize, iconColor: iconColor, icon, title, fixedTitle }}
      />
    ),
    ...rest,
  }

  const linkProps = isExternalLink
    ? { ...commonLinkProps, target: "_blank", rel: "noopener noreferrer" }
    : commonLinkProps

  if (!to) {
    return (
      <Container
        $backgroundColor={backgroundColor}
        $textColor={textColor}
        onClick={onClick}
        {...rest}
      >
        <div {...rest}>
          {commonLinkProps.children}
          <p>{hiddenTitle}</p>
        </div>
      </Container>
    )
  }

  return (
    <Container
      $backgroundColor={backgroundColor}
      $textColor={textColor}
      onClick={onClick}
      {...rest}
    >
      <Link {...linkProps} />
    </Container>
  )
}