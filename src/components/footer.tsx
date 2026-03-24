"use client";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo & tagline */}
          <div className="flex flex-col items-center sm:items-start gap-1.5">
            <span className="font-[family-name:var(--font-mono)] text-sm font-semibold tracking-wider text-stone-900">
              ELAV AI
            </span>
            <span className="text-xs text-stone-400">
              Powered by OpenClaw
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-stone-500">
            <a
              href="#demo"
              className="hover:text-stone-900 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-stone-900 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="hover:text-stone-900 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-100 text-center">
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} CodesDevs OÜ
          </p>
        </div>
      </div>
    </footer>
  );
}
