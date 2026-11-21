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
    slug: "kino",
    what: "A desktop editor for teams, with its own agent and an MCP server.",
    ai: "Built-in chat spends Kino agent credit. Generation is billed separately.",
    name: "Kino",
    title: "VidJutsu vs Kino",
    summary:
      "Kino is a desktop editor for teams and agents: your team cuts on a shared timeline, and Kino's own agent or an outside agent edits over MCP. VidJutsu is hosted video editing for the agent you already use: nothing to install, your agent edits in the cloud, and you review in the browser.",
    rows: [
      { topic: "Who edits", them: "Your team on a shared, real-time timeline, plus Kino's built-in chat or an outside agent (Claude Code, Codex, ChatGPT, Cursor) over MCP.", us: "Your own agent (Claude Code, Codex, Cursor or any MCP client), with exact edit operations. You can edit by hand too." },
      { topic: "AI features", them: "Built-in chat spends Kino agent credit, from $5 to $100 a month depending on the plan. Generated images, video, music and voice are billed separately.", us: "Your agent is the AI. It runs on the plan you already pay for. VidJutsu charges only for rendering and storage, and never generates media." },
      { topic: "Where you work", them: "A desktop app for Mac, Windows and Linux. Its local MCP server works while the app is open. A remote MCP server is in early access.", us: "The browser at app.vidjutsu.ai. Your agent connects to a hosted MCP server, so nothing has to be open on your computer." },
      { topic: "Storage", them: "Originals stay on your drive, with 720p proxies in the cloud. 5 GB on Free, 50 GB per editor on Editor.", us: "Files, projects and history live in the cloud. $0.05 per GB-month, with no plan cap." },
      { topic: "Feedback", them: "Review links where anyone can comment at a frame. Notes land on the timeline and can go to the agent. Needs a paid editor plan.", us: "Share links where viewers comment on a moment and a spot on the picture. Your agent treats every open comment as a to-do, makes the change and answers in the thread." },
      { topic: "Rendering", them: "Exports to H.264, HEVC, VP9, AV1 and ProRes.", us: "Renders run on many cloud machines at once, in 1080p or 4K. A small change re-renders only what changed." },
      { topic: "Footage", them: "Plays pro camera formats such as ProRes, DNx, Blackmagic RAW and RED RAW without transcoding.", us: "Built for recorded talk: talking heads, screen recordings and podcasts, edited by transcript." },
      { topic: "Pricing", them: "Free (100 MCP calls a week), Editor at $25 per editor a month, Editor Plus at $200 per editor a month.", us: "Pay as you go from a prepaid wallet: $0.03 per vCPU-minute and $0.05 per GB-month. No monthly fee and no seats." },
    ],
    chooseThem: [
      "Your team edits by hand together and wants live cursors on one timeline.",
      "You cut pro camera formats like ProRes, Blackmagic RAW or RED RAW.",
      "You want generated images, video or music in the same app.",
    ],
    chooseUs: [
      "You want nothing to install, and an agent that keeps working when your computer is closed.",
      "You already pay for an AI plan and don't want agent credits or per-seat plans.",
      "You want to pay only for the renders and storage you use.",
    ],
    trademark: "Kino is a trademark of its owner.",
  },
  {
    slug: "tesseract",
    what: "A local engine your agent drives for edits and motion graphics.",
    ai: "Free engine. Your agent's own costs are separate.",
    name: "Tesseract",
    title: "VidJutsu vs Tesseract by Mirage",
    summary:
      "Tesseract by Mirage is a free local creative engine your agent drives through skills and a CLI, with layers, keyframes and motion graphics: Mirage calls it Premiere and After Effects rebuilt for agents. VidJutsu is hosted: your agent edits in the cloud, your files and history live in one place, and you review and comment in the browser.",
    rows: [
      { topic: "Who edits", them: "Your agent, through Tesseract's skills and its tsrct CLI. A skill can build a browser editor for tweaks by hand.", us: "Your own agent, through a hosted MCP server, CLI or REST API. You can edit by hand in the web app too." },
      { topic: "AI features", them: "No AI of its own. Your agent is the AI, and its costs are separate.", us: "The same idea: your agent is the AI, on the plan you already pay for. VidJutsu charges only for rendering and storage." },
      { topic: "Where it runs", them: "On your computer (Mac, Windows or Linux) or inside a hosted agent's environment. The agent needs local file access and has to run local tools.", us: "In VidJutsu's cloud. Your agent only needs an MCP connection, so any MCP client works." },
      { topic: "Rendering", them: "On the machine where the engine runs, at no charge.", us: "On many cloud machines at once. A small change re-renders only what changed. $0.03 per vCPU-minute." },
      { topic: "Storage and history", them: "Projects are local .tsrct files you keep with your source media.", us: "Files, projects and every revision in the cloud. Undo any single change, or render any earlier revision." },
      { topic: "Feedback", them: "No review or comment links are described in Tesseract's docs.", us: "Share links with comments pinned to the picture. Your agent reads them and makes the change." },
      { topic: "Depth", them: "Deep motion design: keyframes, masks, track mattes, blend modes, 3D scenes and color management. Partial Premiere and After Effects project import and export.", us: "Simple on purpose: cuts, layouts, levels and fades, Studio Sound, captions and styled titles." },
      { topic: "Source", them: "A no-cost binary. The engine source isn't published.", us: "Open-source engine under Apache-2.0, hosted for you." },
      { topic: "Pricing", them: "No charge for the engine. Your agent's usage is separate.", us: "Pay as you go from a prepaid wallet: $0.03 per vCPU-minute and $0.05 per GB-month. No monthly fee." },
    ],
    chooseThem: [
      "You want deep motion graphics, 3D or After Effects-style compositing.",
      "You want everything to run on your own machine at no charge.",
      "You trade projects with Premiere Pro or After Effects.",
    ],
    chooseUs: [
      "You want footage, projects and history in the cloud, not on one computer.",
      "You want review links where people comment and your agent answers.",
      "You want fast cloud renders that don't tie up your machine.",
    ],
    trademark: "Tesseract and Mirage are trademarks of their owner.",
  },
  {
    slug: "palmier",
    what: "A Mac editor with a local MCP server and built-in AI generation.",
    ai: "Generation and Palmier chat spend credits, from $29 a month.",
    name: "Palmier Pro",
    title: "VidJutsu vs Palmier Pro",
    summary:
      "Palmier Pro is a native macOS editor where Claude, Codex or Cursor edit the timeline over a local MCP server, with generated media and a built-in chat on paid plans. VidJutsu is hosted video editing for the agent you already use: it runs in the browser on any computer, renders in the cloud, and never generates media.",
    rows: [
      { topic: "Who edits", them: "You on the timeline, Palmier's built-in chat on paid plans, or Claude, Codex or Cursor over a local MCP server.", us: "Your own agent (Claude Code, Codex, Cursor or any MCP client), with exact edit operations. You can edit by hand too." },
      { topic: "AI features", them: "Credits pay for image, video and audio generation, cloud transcription and Palmier chat: 5,000 a month on Pro, 12,000 on Max.", us: "Your agent is the AI. It runs on the plan you already pay for. VidJutsu doesn't generate media, so there are no generation credits." },
      { topic: "Where you work", them: "A Mac app that needs macOS 26 on Apple Silicon. The MCP server runs only while the app is open.", us: "The browser at app.vidjutsu.ai, on any computer. The MCP server is hosted, so your agent works with nothing open." },
      { topic: "Rendering", them: "Exports H.264, H.265 or ProRes up to 4K, plus XML for Premiere Pro, DaVinci Resolve and Final Cut Pro.", us: "On many cloud machines at once, in 1080p or 4K. A small change re-renders only what changed." },
      { topic: "Storage", them: "Projects live on your Mac. To share one, export a project package to another Palmier user.", us: "Files, projects and every revision in the cloud. Undo any single change." },
      { topic: "Feedback", them: "No review or comment links are described in Palmier's docs.", us: "Share links with comments pinned to the picture. Your agent reads them and makes the change." },
      { topic: "Source", them: "Source published under GPLv3 up to v0.7.6. Later releases are proprietary.", us: "Open-source engine under Apache-2.0, hosted for you." },
      { topic: "Pricing", them: "The editor and MCP connection cost nothing. Pro is $29 a month and Max $69 a month at launch pricing. Enterprise is custom.", us: "Pay as you go from a prepaid wallet: $0.03 per vCPU-minute and $0.05 per GB-month. No monthly fee." },
    ],
    chooseThem: [
      "You're on an Apple Silicon Mac and want a native app.",
      "You want generated video, images, voice and music on the same timeline.",
      "You hand projects to Premiere Pro, DaVinci Resolve or Final Cut Pro by XML.",
    ],
    chooseUs: [
      "You want to work from any computer, with nothing to install.",
      "You want review links where people comment and your agent answers.",
      "You bring your own footage and want to pay only for renders and storage.",
    ],
    trademark: "Palmier is a trademark of its owner.",
  },
  {
    slug: "hyperframes",
    what: "An open-source framework that turns HTML into video.",
    ai: "Framework costs nothing. Studio Pro adds HeyGen models for $25 a month.",
    name: "HyperFrames",
    title: "VidJutsu vs HyperFrames",
    summary:
      "HyperFrames by HeyGen is an open-source framework where your agent writes each scene as HTML and renders it to MP4 on your computer. It shines at motion graphics and promos made from code. VidJutsu is hosted editing for footage you record: your agent cuts it in the cloud, and you review in the browser.",
    rows: [
      { topic: "Who edits", them: "Your agent writes HTML, CSS and animation code, using HyperFrames skills in Claude Code, Codex, Cursor and others.", us: "Your own agent, with exact edit operations on a timeline: cuts, layouts, levels and fades. You can edit by hand too." },
      { topic: "Best at", them: "Motion graphics, product promos, explainers, captions and charts built from code.", us: "Cutting recorded footage, such as talking heads, screen recordings and podcasts, by transcript." },
      { topic: "AI features", them: "The framework has no AI of its own. Studio Pro ($25 a month, 25,000 credits) adds HeyGen's video, image, voice and music models.", us: "Your agent is the AI. It runs on the plan you already pay for. VidJutsu charges only for rendering and storage, and never generates media." },
      { topic: "Setup", them: "Node.js 22 or newer and FFmpeg on your computer, then install the skills.", us: "Nothing to install. Connect your agent once over MCP." },
      { topic: "Rendering", them: "Headless Chrome and FFmpeg on your computer, in Docker, or on AWS Lambda you deploy. A cloud connector through your HeyGen account is in beta.", us: "On many cloud machines at once, in 1080p or 4K. A small change re-renders only what changed." },
      { topic: "Storage and history", them: "A project folder on your computer.", us: "Files, projects and every revision in the cloud. Undo any single change, or render any earlier revision." },
      { topic: "Feedback", them: "A share command publishes a rendered review, with five projects per workspace at no charge.", us: "Share links with comments pinned to the picture. Your agent reads them and makes the change." },
      { topic: "Pricing", them: "Framework, CLI and skills cost nothing, under Apache-2.0.", us: "Open-source engine under Apache-2.0, hosted for you. Pay as you go: $0.03 per vCPU-minute and $0.05 per GB-month." },
    ],
    chooseThem: [
      "You want motion graphics and promos written as code.",
      "You want to render everything locally at no charge.",
      "You want HeyGen avatars and generated media.",
    ],
    chooseUs: [
      "You're editing recorded footage, not building scenes from code.",
      "You want renders, files and history in the cloud, with nothing to install.",
      "You want review links where people comment and your agent answers.",
    ],
    trademark: "HyperFrames and HeyGen are trademarks of HeyGen.",
  },
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
