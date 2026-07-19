import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

// FontAwesome: CSS is imported above; stop the library injecting its own
config.autoAddCss = false;

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const siteUrl = "https://catalystdatascience.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Catalyst Data Science | Data-Driven Product Development",
    template: "%s | Catalyst Data Science",
  },
  description:
    "Catalyst builds data-driven applications for web, iOS, and Android. Machine learning, forecasting, and analytics designed into the product from the first commit. Portland, Maine.",
  keywords: [
    "product development",
    "ios app development",
    "android app development",
    "react native",
    "nextjs",
    "supabase",
    "machine learning",
    "data science",
    "data infrastructure",
    "snowflake",
    "microsoft fabric",
    "gcp",
    "portland maine",
  ],
  authors: [{ name: "Colin G. Wilson" }],
  creator: "Catalyst Data Science",
  publisher: "Catalyst Data Science",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Catalyst Data Science",
    title: "Catalyst Data Science | Data-Driven Product Development",
    description:
      "Catalyst builds data-driven applications for web, iOS, and Android — with the intelligence designed in from the first commit.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catalyst Data Science | Data-Driven Product Development",
    description:
      "Catalyst builds data-driven applications for web, iOS, and Android — with the intelligence designed in from the first commit.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
