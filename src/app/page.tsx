import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import AppDemo from "@/components/demos/app-demo";
import ImportSection from "@/components/import-section";
import PromptShowcase from "@/components/demos/prompt-showcase";
import CapabilitiesDemo from "@/components/demos/capabilities-demo";
import AnalyticsDemo from "@/components/demos/analytics-demo";
import KanbanDemo from "@/components/demos/kanban-demo";
import DocumentDemo from "@/components/demos/document-demo";
import SkillsStore from "@/components/demos/skills-store";
import TerminalDemo from "@/components/terminal-demo";
import TrustSection from "@/components/yc-backed";
import Pricing from "@/components/pricing";
import ContactCTA from "@/components/install-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* 1. Hook — logo, tagline, CTAs */}
        <Hero />
        {/* 2. Show, don't tell — the actual product */}
        <AppDemo />
        {/* 3. Social proof — import from tools you know */}
        <ImportSection />
        {/* 4. Wow factor — interactive browser automation */}
        <PromptShowcase />
        {/* 5. Core value — what makes it different */}
        <CapabilitiesDemo />
        {/* 6. Analytics — charts & data */}
        <AnalyticsDemo />
        {/* 7. Pipeline — kanban */}
        <KanbanDemo />
        {/* 8. Depth — reports, cron */}
        <DocumentDemo />
        {/* 9. Extensibility — skills */}
        <SkillsStore />
        {/* 10. Agent fleet in action */}
        <div className="section-divider" />
        <TerminalDemo />
        {/* 11. Trust — social proof & stats */}
        <TrustSection />
        {/* 12. Pricing */}
        <Pricing />
        {/* 13. Convert — final CTA */}
        <div className="section-divider" />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
