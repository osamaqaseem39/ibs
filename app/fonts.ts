import localFont from "next/font/local";

// Jost font family - using variable font for flexibility
export const jost = localFont({
  src: [
    {
      path: "../public/fonts/Jost/Jost-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../public/fonts/Jost/Jost-Italic-VariableFont_wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-jost",
  display: "swap",
});

// Gazpacho font family - for headings and emphasis
export const gazpacho = localFont({
  src: [
    {
      path: "../public/fonts/Gazpacho/Gazpacho Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Gazpacho/Gazpacho Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Gazpacho/Gazpacho Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Gazpacho/Gazpacho Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Gazpacho/Gazpacho Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Gazpacho/Gazpacho Heavy.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/Gazpacho/Gazpacho Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gazpacho",
  display: "swap",
});

