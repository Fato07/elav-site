import type { Metadata } from "next";
import { Instrument_Serif, Rajdhani } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elav — Your AI Operations Team",
  description:
    "Not one chatbot. A team of 7 specialized AI agents running your business operations 24/7. Built on OpenClaw.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Elav — Your AI Operations Team",
    description:
      "Not one chatbot. A team of 7 specialized AI agents running your business operations 24/7. Built on OpenClaw.",
    type: "website",
    url: "https://elav.ai",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elav — Your AI Operations Team",
    description:
      "Not one chatbot. A team of 7 specialized AI agents running your business operations 24/7. Built on OpenClaw.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${rajdhani.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
