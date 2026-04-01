export function Footer() {
  return (
    <footer className="px-5 sm:px-8 py-12 sm:py-16 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 sm:gap-12">
          <div>
            <h4 className="text-sm font-semibold mb-4">Product</h4>
            <ul className="space-y-2.5">
              <li><a href="#how-it-works" className="text-[13px] text-ink-muted hover:text-ink transition-colors">How it works</a></li>
              <li><a href="#features" className="text-[13px] text-ink-muted hover:text-ink transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-[13px] text-ink-muted hover:text-ink transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-[13px] text-ink-muted hover:text-ink transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Developers</h4>
            <ul className="space-y-2.5">
              <li><a href="https://docs.vidjutsu.ai" className="text-[13px] text-ink-muted hover:text-ink transition-colors">Docs</a></li>
              <li><a href="https://docs.vidjutsu.ai/api-reference" className="text-[13px] text-ink-muted hover:text-ink transition-colors">API Reference</a></li>
              <li><a href="https://docs.vidjutsu.ai/quickstart" className="text-[13px] text-ink-muted hover:text-ink transition-colors">Quickstart</a></li>
              <li><a href="https://github.com/tfcbot/vidjutsu-cli" className="text-[13px] text-ink-muted hover:text-ink transition-colors">GitHub</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Skills</h4>
            <ul className="space-y-2.5">
              <li><a href="/directory" className="text-[13px] text-ink-muted hover:text-ink transition-colors">Browse all skills</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Alternatives</h4>
            <ul className="space-y-2.5">
              <li><a href="/alternatives/building-with-agents" className="text-[13px] text-ink-muted hover:text-ink transition-colors">Building with agents</a></li>
              <li><a href="/alternatives/diy" className="text-[13px] text-ink-muted hover:text-ink transition-colors">Doing it yourself</a></li>
              <li><a href="/alternatives/hiring-a-va" className="text-[13px] text-ink-muted hover:text-ink transition-colors">Hiring a VA</a></li>
              <li><a href="/alternatives/social-media-agencies" className="text-[13px] text-ink-muted hover:text-ink transition-colors">Social media agencies</a></li>
              <li><a href="/alternatives/scheduling-tools" className="text-[13px] text-ink-muted hover:text-ink transition-colors">Scheduling tools</a></li>
              <li><a href="/alternatives/ai-content-tools" className="text-[13px] text-ink-muted hover:text-ink transition-colors">AI content tools</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="mailto:support@vidjutsu.ai" className="text-[13px] text-ink-muted hover:text-ink transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[13px] text-ink-light">VidJutsu</span>
          <span className="text-[12px] text-ink-light">&copy; {new Date().getFullYear()} VidJutsu. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
