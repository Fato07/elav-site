import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import TerminalDemo from "@/components/terminal-demo";
import Features from "@/components/features";
import Channels from "@/components/channels";
import Providers from "@/components/providers";
import Commands from "@/components/commands";
import OpenSource from "@/components/open-source";
import InstallCTA from "@/components/install-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <div className="section-divider" />
        <TerminalDemo />
        <div className="section-divider" />
        <Features />
        <div className="section-divider" />
        <Channels />
        <div className="section-divider" />
        <Providers />
        <div className="section-divider" />
        <Commands />
        <OpenSource />
        <div className="section-divider" />
        <InstallCTA />
      </main>
      <Footer />
    </>
  );
}
