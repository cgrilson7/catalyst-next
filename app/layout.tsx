import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Catalyst Data Science | eCommerce Analytics Consultancy",
  description: "Data that works for you. Cloud-based data management, analytics, and data science solutions. Snowflake-certified, GCP specialists.",
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
