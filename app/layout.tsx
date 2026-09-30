import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sky Makeover Studio | Luxury Bridal Artistry",
  description:
    "Luxury bridal artistry and bespoke makeover experiences by Sky Makeover Studio.",
  openGraph: {
    title: "Sky Makeover Studio",
    description: "Luxury bridal artistry and bespoke makeover experiences.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}