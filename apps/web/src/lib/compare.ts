// Comparison pages: /compare and /compare/<slug>. Claims about other products
// come from their public product pages; keep them fair and dated.

export const CHECKED = "November 2026";

export type Row = { topic: string; them: string; us: string };

export type Comparison = {
  slug: string;
  name: string;
  title: string;
  summary: string;
  what: string;
  ai: string;
  rows: Row[];
  chooseThem: string[];
  chooseUs: string[];
  trademark: string;
};

export const COMPARISONS: Comparison[] = [
  {
    slug: "descript",
    what: "An editor for cutting by hand, with its own AI assistant.",
    ai: "AI tools spend Descript AI credits.",
    name: "Descript",
    title: "VidJutsu vs Descript",
    summary:
      "Descript is an editor for people, with its own built-in AI assistant. VidJutsu is simple video editing for the agent you already use: your agent makes the edits itself, and you review them in your browser.",
    rows: [
      { topic: "Who edits", them: "You, by hand or by asking Descript's built-in AI assistant.", us: "Your own agent (Claude Code, Codex, Cursor or any MCP client), with exact edit operations. You can edit by hand too." },
      { topic: "AI features", them: "Built-in AI tools that spend AI credits from your plan. An outside agent works by sending requests to Descript's assistant.", us: "Your agent is the AI. It runs on the plan you already pay for. VidJutsu charges only for rendering and storage." },
      { topic: "Where you work", them: "A desktop app, plus a web app.", us: "The browser at app.vidjutsu.ai. Nothing to install." },
      { topic: "Feedback", them: "Comments on the project and shared review links.", us: "Comments pinned to a moment and a spot on the picture. Your agent reads them, makes the change and answers in the thread." },
      { topic: "History", them: "Version history of the project.", us: "Every edit is a revision with who made it and why. Undo any single change, or render any earlier revision." },
      { topic: "Rendering", them: "Exports run through Descript.", us: "Renders run on many cloud machines at once, and a small change re-renders only what changed." },
      { topic: "Pricing", them: "Monthly plans with usage limits.", us: "Pay as you go from a prepaid wallet: $0.03 per vCPU-minute and $0.05 per GB-month. No monthly fee." },
    ],
    chooseThem: [
      "You want to do the editing yourself in a polished, all-in-one editor.",
      "You want built-in AI voices, avatars or other generated media.",
    ],
    chooseUs: [
      "You want your agent editing, not clicking through menus.",
      "You make a lot of video and don't want a monthly plan or local exports.",
      "You already pay for an AI plan and don't want to buy AI credits too.",
    ],
    trademark: "Descript is a trademark of Descript, Inc.",
  },
  {
    slug: "davinci-resolve",
    what: "A pro desktop suite for editing, color and effects.",
    ai: "Most AI tools need the paid Studio version.",
    name: "DaVinci Resolve",
    title: "VidJutsu vs DaVinci Resolve",
    summary:
      "DaVinci Resolve is a professional desktop suite for editing, color, effects and audio, driven by an editor's hands. VidJutsu is simple video editing for agents: your agent cuts in the cloud, you review in the browser, and nothing renders on your computer.",
    rows: [
      { topic: "Who edits", them: "You, on a timeline, with deep control over every frame.", us: "Your own agent, with exact edit operations, while you watch and comment. You can edit by hand too." },
      { topic: "AI features", them: "AI tools, mostly in the paid Studio version. Other AI comes through plugins and scripts.", us: "Your agent is the AI. It runs on the plan you already pay for. VidJutsu charges only for rendering and storage." },
      { topic: "Setup", them: "A deep desktop app. Speed depends on your GPU, memory and disk.", us: "Nothing to install. Connect your agent once over MCP." },
      { topic: "Rendering", them: "On your own computer, which is busy until the export finishes.", us: "On many cloud machines at once, in 1080p or 4K. A small change re-renders only what changed." },
      { topic: "Agents", them: "A scripting API on the machine it runs on. Otherwise an agent clicks through the app with computer use, and a simple edit can take hours.", us: "Built for agents: hosted MCP server, CLI and REST API, the same operations the app uses." },
      { topic: "Feedback", them: "Collaboration built around editors and colorists working in the app.", us: "Comments pinned to the picture. Your agent reads them and makes the change." },
      { topic: "Depth", them: "Color grading, visual effects, motion graphics and pro audio mixing.", us: "Simple on purpose: cuts, layouts, levels and fades, Studio Sound, captions and styled titles." },
      { topic: "Pricing", them: "A free version and a paid Studio version.", us: "Pay as you go from a prepaid wallet: $0.03 per vCPU-minute and $0.05 per GB-month. No monthly fee." },
    ],
    chooseThem: [
      "You want frame-level control, color grading or visual effects.",
      "You edit by hand and have a computer that can render quickly.",
    ],
    chooseUs: [
      "You already pay for an AI plan.",
      "You want your agent editing, not clicking through menus.",
      "You don't want renders tying up your machine or running into its limits.",
    ],
    trademark: "DaVinci Resolve is a trademark of Blackmagic Design Pty. Ltd.",
  },
  {
    slug: "premiere-pro",
    what: "A pro desktop editor for cutting by hand.",
    ai: "Generative AI spends Adobe credits.",
    name: "Premiere Pro",
    title: "VidJutsu vs Premiere Pro",
    summary:
      "Premiere Pro is a professional desktop editor built for an editor's hands on a timeline. VidJutsu is simple video editing for agents: your agent cuts in the cloud, you review and comment in the browser.",
    rows: [
      { topic: "Who edits", them: "You, on a timeline, with built-in AI features that help you inside the app.", us: "Your own agent, with exact edit operations. You review, comment and approve, or edit by hand." },
      { topic: "AI features", them: "Generative features spend Adobe generative credits. Other AI comes through third-party plugins.", us: "Your agent is the AI. It runs on the plan you already pay for. VidJutsu charges only for rendering and storage." },
      { topic: "Setup", them: "A complex app to install and configure.", us: "Nothing to install. Connect your agent once over MCP." },
      { topic: "Where you work", them: "A desktop app for Windows and Mac, with your media on your disk.", us: "The browser at app.vidjutsu.ai. Files, projects and history live in the cloud." },
      { topic: "Rendering", them: "On your computer, limited by its hardware.", us: "On many cloud machines at once. A small change re-renders only what changed." },
      { topic: "Agents", them: "Plugins and scripts inside the app. An outside agent clicks through it with computer use, and a simple edit can take hours.", us: "A hosted MCP server, CLI and REST API: the same operations the app uses." },
      { topic: "Depth", them: "A full professional toolset: effects, color, graphics, audio.", us: "Simple on purpose: cuts, layouts, levels and fades, Studio Sound, captions and styled titles." },
      { topic: "Pricing", them: "Monthly plans.", us: "Pay as you go from a prepaid wallet: $0.03 per vCPU-minute and $0.05 per GB-month. No monthly fee." },
    ],
    chooseThem: [
      "You edit by hand and want a full professional toolset.",
      "You need effects, color work or plugins VidJutsu doesn't have.",
    ],
    chooseUs: [
      "You already pay for an AI plan.",
      "You want your agent editing, not clicking through menus.",
      "You make a steady stream of videos and want renders off your computer.",
    ],
    trademark: "Premiere Pro is a trademark of Adobe Inc.",
  },
  {
    slug: "final-cut-pro",
    what: "A fast editor for cutting by hand on a Mac.",
    ai: "Outside AI comes from third-party plugins.",
    name: "Final Cut Pro",
    title: "VidJutsu vs Final Cut Pro",
    summary:
      "Final Cut Pro is a fast Mac editor for people who cut by hand. VidJutsu is simple video editing for agents: it runs in the browser, your agent does the cutting, and renders happen in the cloud.",
    rows: [
      { topic: "Who edits", them: "You, on the magnetic timeline.", us: "Your own agent, with exact edit operations. You review, comment and approve, or edit by hand." },
      { topic: "AI features", them: "A few built-in smart tools. Other AI comes through third-party plugins.", us: "Your agent is the AI. It runs on the plan you already pay for. VidJutsu charges only for rendering and storage." },
      { topic: "Setup", them: "Built for editing by hand, with settings and libraries to set up first.", us: "Nothing to install. Connect your agent once over MCP." },
      { topic: "Where you work", them: "A Mac app (and an iPad app), with your media on your device.", us: "The browser at app.vidjutsu.ai, on any computer with Chrome." },
      { topic: "Rendering", them: "On your Mac, which is busy until the export finishes.", us: "On many cloud machines at once. A small change re-renders only what changed." },
      { topic: "Agents", them: "Not built for an outside agent. An agent has to click through it with computer use, and a simple edit can take hours.", us: "A hosted MCP server, CLI and REST API." },
      { topic: "Feedback", them: "Share an export and collect notes elsewhere.", us: "Comments pinned to the picture. Your agent reads them and makes the change." },
      { topic: "Pricing", them: "A one-time purchase.", us: "Pay as you go from a prepaid wallet: $0.03 per vCPU-minute and $0.05 per GB-month. No monthly fee." },
    ],
    chooseThem: [
      "You're on a Mac, love editing by hand and want it fully offline.",
      "You need its effects, color and motion tools.",
    ],
    chooseUs: [
      "You already pay for an AI plan.",
      "You want your agent editing, not clicking through menus.",
      "You want comments, history and renders in the cloud, on any computer.",
    ],
    trademark: "Final Cut Pro is a trademark of Apple Inc.",
  },
  {
    slug: "capcut",
    what: "An app for quick social clips by hand.",
    ai: "Many AI tools sit behind a paid plan or credits.",
    name: "CapCut",
    title: "VidJutsu vs CapCut",
    summary:
      "CapCut is an editor with templates and effects for making short videos by hand. VidJutsu is simple video editing for agents: your agent cuts long or short videos in the cloud while you review in the browser.",
    rows: [
      { topic: "Who edits", them: "You, with templates, effects and auto tools in the app.", us: "Your own agent, with exact edit operations. You review, comment and approve, or edit by hand." },
      { topic: "AI features", them: "AI tools in the app, many behind a paid plan or credits.", us: "Your agent is the AI. It runs on the plan you already pay for. VidJutsu charges only for rendering and storage." },
      { topic: "Setup", them: "Built for editing by hand, with templates and settings to learn first.", us: "Nothing to install. Connect your agent once over MCP." },
      { topic: "Where you work", them: "Mobile, desktop and web apps.", us: "The browser at app.vidjutsu.ai. Your agent works from wherever it runs." },
      { topic: "Agents", them: "Not built for an outside agent. An agent has to click through it with computer use, and a simple edit can take hours.", us: "A hosted MCP server, CLI and REST API." },
      { topic: "Rendering", them: "Exports from the app.", us: "On many cloud machines at once, in 1080p or 4K. A small change re-renders only what changed." },
      { topic: "History", them: "Undo while you edit.", us: "Every edit kept as a revision with who made it. Undo any single change." },
      { topic: "Pricing", them: "A free version and paid plans.", us: "Pay as you go from a prepaid wallet: $0.03 per vCPU-minute and $0.05 per GB-month. No monthly fee." },
    ],
    chooseThem: [
      "You want trending templates and effects for quick social clips.",
      "You edit on your phone.",
    ],
    chooseUs: [
      "You already pay for an AI plan.",
      "You want your agent editing, not clicking through menus.",
      "You want renders, files and history in the cloud, not on your device.",
    ],
    trademark: "CapCut is a trademark of its owner.",
  },
];

export const bySlug = (slug: string) => COMPARISONS.find((c) => c.slug === slug);
