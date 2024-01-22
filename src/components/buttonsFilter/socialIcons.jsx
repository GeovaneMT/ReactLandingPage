import {
  PiInstagramLogoFill,
  PiWhatsappLogoFill,
  PiBookOpenTextFill,
  PiFacebookLogoFill,
} from "react-icons/pi"

export const SocialIcons = [
  {
    icon: <PiWhatsappLogoFill />,
    title: " Whatsapp",
    fixedTitle: "Filtrar",
    onClick: () => console.log("Button clicked"),
  },
  {
    icon: <PiBookOpenTextFill />,
    title: " Catálogo",
    fixedTitle: "Filtrar",
    onClick: () => console.log("Button clicked"),
  },
  {
    icon: <PiFacebookLogoFill />,
    title: " Facebook",
    fixedTitle: "Filtrar",
    onClick: () => console.log("Button clicked"),
  },
  {
    icon: <PiInstagramLogoFill />,
    title: " Instagram",
    fixedTitle: "Filtrar",
    onClick: () => console.log("Button clicked"),
  },
]
