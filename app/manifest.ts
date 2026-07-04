import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "naklikane industries",
    short_name: "naklikane",
    description:
      "Performance marketing oparty na danych. Google Ads, Meta Ads, LinkedIn Ads oraz analityka internetowa.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#015002",
    lang: "pl",
    icons: [
      {
        src: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}