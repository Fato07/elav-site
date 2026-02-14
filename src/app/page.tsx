import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import AppDemo from "@/components/demos/app-demo";
import PromptShowcase from "@/components/demos/prompt-showcase";
import AnalyticsDemo from "@/components/demos/analytics-demo";
import KanbanDemo from "@/components/demos/kanban-demo";
import CapabilitiesDemo from "@/components/demos/capabilities-demo";
import DocumentDemo from "@/components/demos/document-demo";
import SkillsStore from "@/components/demos/skills-store";
import ImportSection from "@/components/import-section";
import TerminalDemo from "@/components/terminal-demo";
import Features from "@/components/features";
import YCBacked from "@/components/yc-backed";
import OpenSource from "@/components/open-source";
import InstallCTA from "@/components/install-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <AppDemo />
        <PromptShowcase />
        <AnalyticsDemo />
        <KanbanDemo />
        <CapabilitiesDemo />
        <DocumentDemo />
        <SkillsStore />
        <ImportSection />
        <div className="section-divider" />
        <TerminalDemo />
        <div className="section-divider" />
        <Features />
        <YCBacked />
        <OpenSource />
        <div className="section-divider" />
        <InstallCTA />
      </main>
      <Footer />
    </>
  );
}
