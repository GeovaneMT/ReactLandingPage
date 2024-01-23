import {
  PiInstagramLogoFill,
  PiWhatsappLogoFill,
  PiBookOpenTextFill,
  PiFacebookLogoFill,
} from "react-icons/pi"

export const SocialIcons = [
  {
    icon: <PiWhatsappLogoFill />,
    iconColor: "black",
    title: " Whatsapp",
    fixedTitle: "Filtrar",
    onClick: () => console.log("Button clicked"),
  },
  {
    icon: <PiBookOpenTextFill />,
    iconColor: "black",
    title: " Catálogo",
    fixedTitle: "Filtrar",
    onClick: () => console.log("Button clicked"),
  },
  {
    icon: <PiFacebookLogoFill />,
    iconColor: "black",
    title: " Facebook",
    fixedTitle: "Filtrar",
    onClick: () => console.log("Button clicked"),
  },
  {
    icon: <PiInstagramLogoFill />,
    iconColor: "black",
    title: " Instagram",
    fixedTitle: "Filtrar",
    onClick: () => console.log("Button clicked"),
  },
]
