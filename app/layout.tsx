import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://catalystdatascience.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Catalyst Data Science | eCommerce Analytics Consultancy",
    template: "%s | Catalyst Data Science",
  },
  description:
    "Data that works for you. Cloud-based data management, analytics, and data science solutions for eCommerce businesses. Snowflake-certified, Microsoft Fabric, GCP specialists.",
  keywords: [
    "data science",
    "ecommerce analytics",
    "data consultancy",
    "snowflake",
    "microsoft fabric",
    "gcp",
    "analytics",
    "predictive modeling",
    "customer analytics",
    "data infrastructure",
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
    title: "Catalyst Data Science | eCommerce Analytics Consultancy",
    description:
      "Data that works for you. Cloud-based data management, analytics, and data science solutions for eCommerce businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catalyst Data Science | eCommerce Analytics Consultancy",
    description:
      "Data that works for you. Cloud-based data management, analytics, and data science solutions for eCommerce businesses.",
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
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
