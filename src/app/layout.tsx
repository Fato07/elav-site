import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ironclaw — AI CRM, hosted locally on your Mac",
  description:
    "AI-powered CRM and workflow automation that runs on localhost:3100. Chat with your database, enrich leads, automate outreach. Built on OpenClaw.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Ironclaw — AI CRM, hosted locally on your Mac",
    description:
      "AI-powered CRM and workflow automation that runs on localhost:3100. Chat with your database, enrich leads, automate outreach.",
    type: "website",
    url: "https://ironclaw.sh",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ironclaw — AI CRM, hosted locally on your Mac",
    description:
      "AI-powered CRM and workflow automation that runs on localhost:3100.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={instrumentSerif.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
