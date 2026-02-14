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
  title: "Ironclaw — AI Agent That Lives in Your Terminal",
  description:
    "Personal AI assistant and CRM toolkit that runs on your devices. Multi-channel inbox, DuckDB workspace, knowledge management. Built on OpenClaw.",
  openGraph: {
    title: "Ironclaw — AI Agent That Lives in Your Terminal",
    description:
      "Personal AI assistant and CRM toolkit that runs on your devices. Multi-channel inbox, DuckDB workspace, knowledge management.",
    type: "website",
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
