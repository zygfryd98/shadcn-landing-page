import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://naklikane.com"),

  title: {
    default: "naklikane industries",
    template: "%s | naklikane industries",
  },

  description:
    "Performance marketing bez lania wody. Google Ads, Meta Ads, LinkedIn Ads, GA4, GTM i Looker Studio.",

  keywords: [
    "Google Ads",
    "Meta Ads",
    "LinkedIn Ads",
    "Microsoft Ads",
    "Pinterest Ads",
    "TikTok Ads",
    "Google Analytics 4",
    "Google Tag Manager",
    "Looker Studio",
    "Performance Marketing",
    "SEM",
    "PPC",
  ],

  authors: [
    {
      name: "Patryk Żakowicz",
    },
  ],

  creator: "naklikane industries",
  publisher: "naklikane industries",

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: "/apple-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://naklikane.com",
    siteName: "naklikane industries",

    title: "naklikane industries",

    description:
      "Performance marketing bez lania wody. Kampanie, analityka i decyzje oparte na danych.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "naklikane industries",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "naklikane industries",

    description:
      "Performance marketing bez lania wody. Kampanie, analityka i decyzje oparte na danych.",

    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background",
          spaceGrotesk.className
        )}
      >
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="db1b71ac-eac8-40a9-8394-4de9250ef2ec"
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />
        <Script
  id="default-consent"
  strategy="beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}

      gtag('consent', 'default', {
        ad_storage: 'denied',
        analytics_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        functionality_storage: 'granted',
        security_storage: 'granted',
        wait_for_update: 500
      });
    `,
  }}
/>
       <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-N43Z62H9');
    `,
  }}
/>

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
                <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N43Z62H9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
      </body>
    </html>
  );
}