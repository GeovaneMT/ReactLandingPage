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
      ) : ( <p></p>
      )}
      <PiArrowCircleRight />
    </span>
    <p style={{ fontSize: "1.8rem" }}>{title}</p>
    <p style={{ fontSize: "1.8rem" }}>{fixedTitle}{title}</p>
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