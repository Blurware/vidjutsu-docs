/* Static picture of the VidJutsu editor, drawn at 1120x700 and scaled by <Fit>. */
type Props = {
  view?: "edit" | "shotlist";
  comments?: boolean;
  pin?: boolean;
  menu?: "none" | "script" | "versions";
};

export function EditorMock({ view = "edit", comments: showComments = true, pin = true, menu = "none" }: Props) {
  const sl = view === "shotlist";
  const comments = sl ? false : showComments;
  const v = {
    slOn: sl ? "#4A4A4A" : "transparent", slText: sl ? "#FFFFFF" : "#9A9A9A",
    edOn: sl ? "transparent" : "#4A4A4A", edText: sl ? "#9A9A9A" : "#FFFFFF",
    editTools: sl ? "none" : "flex",
    editDisplay: sl ? "none" : "flex",
    slDisplay: sl ? "flex" : "none",
    comments: comments ? "flex" : "none",
    cmtBtn: comments ? "#3A3A3A" : "transparent", cmtLine: comments ? "#4A4A4A" : "transparent",
    frameW: comments ? "400px" : "640px",
    pin: pin && !sl ? "block" : "none",
    menuScript: menu === "script" && !sl ? "flex" : "none",
    menuVersions: menu === "versions" && !sl ? "flex" : "none",
    verBg: menu === "versions" ? "#3A3A3A" : "transparent", verLine: menu === "versions" ? "#4A4A4A" : "#3A3A3A",
  };
  return (
    <div aria-hidden="true">
<div style={{ position: "relative", width: "1120px", height: "700px", boxSizing: "border-box", display: "flex", flexDirection: "column", overflow: "hidden", borderRadius: "12px", fontFamily: "-apple-system, BlinkMacSystemFont, Inter, sans-serif", fontSize: "12px", lineHeight: "1.45", background: "#141414", color: "#ECECEC", border: "1px solid #2A2A2A" }}>


<div style={{ height: "44px", flex: "none", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto minmax(0,1fr)", alignItems: "center", gap: "12px", padding: "0 10px", borderBottom: "1px solid #323232", background: "#1C1C1C" }}>
<div style={{ display: "flex", alignItems: "center", gap: "8px", minWidth: "0" }}>
<span style={{ color: "#9A9A9A", fontSize: "15px", width: "22px", textAlign: "center" }}>‹</span>
<div style={{ minWidth: "0" }}><div style={{ fontWeight: "650", fontSize: "13px" }}>Launch video</div><div style={{ color: "#9A9A9A", fontSize: "10.5px", whiteSpace: "nowrap" }}>Edited by Claude Code · 1:58 · Revision r14</div></div>
</div>
<div style={{ display: "flex", padding: "2px", borderRadius: "999px", border: "1px solid #3A3A3A", background: "#262626", fontSize: "12px" }}>
<span style={{ padding: "4px 13px", borderRadius: "999px", background: v.slOn, color: v.slText }}>Shot list</span>
<span style={{ padding: "4px 13px", borderRadius: "999px", background: v.edOn, color: v.edText }}>Edit</span>
</div>
<div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "6px" }}>
<div style={{ display: v.editTools, alignItems: "center", gap: "6px" }}>
<div style={{ display: "flex", padding: "1px", borderRadius: "999px", border: "1px solid #3A3A3A", background: "#262626", color: "#BDBDBD" }}>
<span style={{ width: "26px", height: "24px", display: "grid", placeItems: "center" }}>↶</span><span style={{ width: "26px", height: "24px", display: "grid", placeItems: "center" }}>↷</span><span style={{ width: "26px", height: "24px", display: "grid", placeItems: "center" }}>▥</span>
</div>
<span style={{ width: "26px", height: "26px", borderRadius: "999px", display: "grid", placeItems: "center", background: v.cmtBtn, border: `1px solid ${v.cmtLine}`, color: "#D0D0D0" }}>▢</span>
<span style={{ width: "22px", textAlign: "center", color: "#BDBDBD", letterSpacing: "1px" }}>···</span>
<span style={{ display: "flex", alignItems: "center", gap: "6px", padding: "4px 10px", borderRadius: "7px", border: `1px solid ${v.verLine}`, background: v.verBg }}><svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></svg>Versions</span>
<span style={{ padding: "5px 13px", borderRadius: "999px", background: "#F2F3F5", color: "#111214", fontWeight: "650" }}>⇪ Render</span>
</div>
<span style={{ width: "24px", textAlign: "center", color: "#BDBDBD", fontSize: "14px" }}>⚙</span>
</div>
</div>


<div style={{ flex: "1", minHeight: "0", display: v.editDisplay, flexDirection: "column" }}>
<div style={{ flex: "1", minHeight: "0", display: "flex" }}>


<div style={{ width: "168px", flex: "none", borderRight: "1px solid #323232", display: "flex", flexDirection: "column" }}>
<div style={{ padding: "9px 12px", fontWeight: "650", borderBottom: "1px solid #323232" }}>Files</div>
<div style={{ margin: "8px 10px", padding: "5px 8px", border: "1px solid #323232", borderRadius: "6px", color: "#7A7A7A", fontSize: "11px" }}>⌕ Search words in files</div>
<div style={{ padding: "0 6px", display: "flex", flexDirection: "column", gap: "2px" }}>
<div style={{ padding: "6px", borderRadius: "6px", background: "#262626", display: "flex", gap: "8px", alignItems: "center" }}><span style={{ width: "34px", height: "20px", borderRadius: "3px", background: "linear-gradient(135deg,#5A5A5A,#2E2E2E)", flex: "none" }}></span><div style={{ minWidth: "0" }}><div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>camera-take-3</div><div style={{ color: "#9A9A9A", fontSize: "10.5px" }}>Cold open · 0:42</div></div></div>
<div style={{ padding: "6px", display: "flex", gap: "8px", alignItems: "center" }}><span style={{ width: "34px", height: "20px", borderRadius: "3px", background: "linear-gradient(135deg,#D8D8D8,#8A8A8A)", flex: "none" }}></span><div style={{ minWidth: "0" }}><div>screen-demo</div><div style={{ color: "#9A9A9A", fontSize: "10.5px" }}>The demo · 1:04</div></div></div>
<div style={{ padding: "6px", display: "flex", gap: "8px", alignItems: "center" }}><span style={{ width: "34px", height: "20px", borderRadius: "3px", background: "linear-gradient(135deg,#6A6A6A,#3A3A3A)", flex: "none" }}></span><div style={{ minWidth: "0" }}><div>camera-take-5</div><div style={{ color: "#9A9A9A", fontSize: "10.5px" }}>Wrap up · 0:21</div></div></div>
<div style={{ padding: "6px", display: "flex", gap: "8px", alignItems: "center" }}><span style={{ width: "34px", height: "20px", borderRadius: "3px", background: "#262626", border: "1px solid #323232", flex: "none", display: "grid", placeItems: "center", color: "#9A9A9A", fontSize: "9px" }}>♪</span><div style={{ minWidth: "0" }}><div>launch-bed</div><div style={{ color: "#9A9A9A", fontSize: "10.5px" }}>Music · 2:10</div></div></div>
</div>
</div>


<div style={{ width: "262px", flex: "none", borderRight: "1px solid #323232", display: "flex", flexDirection: "column", position: "relative" }}>
<div style={{ padding: "9px 12px", fontWeight: "650", borderBottom: "1px solid #323232" }}>Script</div>
<div style={{ padding: "10px 12px", fontSize: "13px", lineHeight: "1.85" }}>
<span style={{ display: "block", fontSize: "10.5px", fontWeight: "650", color: "#9A9A9A" }}>Max</span>
Editing is the part everyone skips. <span style={{ color: "#9A9A9A" }}>……</span> So I let my agent do it. <span style={{ background: "rgba(255,255,255,.32)", borderRadius: "3px", padding: "1px 1px" }}>I drop in a take and ask for a tight cut.</span> <span style={{ color: "#9A9A9A" }}>……</span> Then I comment right on the video, <span style={{ background: "rgba(242,201,76,.25)", borderRadius: "3px" }}>and</span> it renders in the cloud while I keep working.
<span style={{ display: "block", marginTop: "8px", fontSize: "10.5px", fontWeight: "650", color: "#9A9A9A" }}>Max</span>
That's it. <span style={{ color: "#9A9A9A" }}>……</span> That's the whole edit.
</div>
<div style={{ display: v.menuScript, position: "absolute", left: "118px", top: "116px", width: "170px", padding: "4px", borderRadius: "8px", background: "rgba(40,40,40,.96)", border: "1px solid #3E3E3E", boxShadow: "0 12px 30px rgba(0,0,0,.5)", flexDirection: "column", fontSize: "12px", zIndex: "3" }}>
<div style={{ padding: "5px 9px", borderRadius: "5px", background: "#3A3A3A" }}>Comment…</div>
<div style={{ padding: "5px 9px" }}>Delete words</div>
<div style={{ padding: "5px 9px", color: "#9A9A9A" }}>Play from here</div>
</div>
</div>


<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", padding: "12px", background: "#161616" }}>
<div style={{ position: "relative", width: v.frameW, aspectRatio: "16 / 9", borderRadius: "6px", background: "#000" }}>
<div style={{ position: "absolute", inset: "7% 6%", borderRadius: "4px", background: "#EDEDED", overflow: "hidden", display: "flex", flexDirection: "column" }}>
<div style={{ height: "9%", background: "#D6D6D6" }}></div>
<div style={{ flex: "1", display: "flex", gap: "6%", padding: "5%" }}>
<div style={{ width: "26%", display: "flex", flexDirection: "column", gap: "8px" }}><div style={{ height: "8px", borderRadius: "3px", background: "#BDBDBD" }}></div><div style={{ height: "8px", width: "70%", borderRadius: "3px", background: "#CFCFCF" }}></div><div style={{ height: "8px", width: "85%", borderRadius: "3px", background: "#CFCFCF" }}></div></div>
<div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "8px" }}><div style={{ height: "18%", width: "60%", borderRadius: "4px", background: "#2B2B2B" }}></div><div style={{ flex: "1", borderRadius: "5px", background: "#DCDCDC" }}></div></div>
</div>
</div>
<div style={{ position: "absolute", right: "5%", bottom: "8%", width: "20%", aspectRatio: "1", borderRadius: "50%", background: "#3A3A3A", border: "2px solid #fff", overflow: "hidden" }}>
<div style={{ position: "absolute", left: "34%", top: "18%", width: "34%", height: "34%", borderRadius: "50%", background: "#CFCFCF" }}></div>
<div style={{ position: "absolute", left: "16%", top: "58%", width: "68%", height: "60%", borderRadius: "40% 40% 0 0", background: "#7A7A7A" }}></div>
</div>

<div style={{ display: v.pin, position: "absolute", left: "47%", top: "38%", zIndex: "2" }}>
<div style={{ position: "absolute", width: "16px", height: "16px", margin: "-8px 0 0 -8px", borderRadius: "50%", background: "#F2F3F5", border: "2px solid #fff", boxShadow: "0 0 0 2px rgba(0,0,0,.5)" }}></div>
<div style={{ position: "absolute", left: "12px", top: "12px", width: "190px", padding: "7px 9px", borderRadius: "4px 10px 10px 10px", background: "#1C1C1C", border: "1px solid #323232", boxShadow: "0 6px 20px rgba(0,0,0,.45)", fontSize: "11.5px" }}>
<div style={{ color: "#9A9A9A", fontSize: "10px" }}>Max · 0:41</div>
<div>Zoom in on this button</div>
</div>
</div>
</div>
<div style={{ display: "flex", alignItems: "center", gap: "10px", color: "#9A9A9A", width: v.frameW }}>
<span style={{ width: "24px", height: "24px", borderRadius: "50%", background: "#ECECEC", color: "#141414", display: "grid", placeItems: "center", fontSize: "9px" }}>▶</span>
<span>0:41 / 1:58</span>
<span style={{ marginLeft: "auto", padding: "2px 8px", border: "1px solid #323232", borderRadius: "999px" }}>Current edit</span>
</div>
</div>


<div style={{ width: "250px", flex: "none", borderLeft: "1px solid #323232", display: v.comments, flexDirection: "column", background: "#1A1A1A" }}>
<div style={{ padding: "9px 12px", fontWeight: "650", borderBottom: "1px solid #323232" }}>Comments</div>
<div style={{ flex: "1", padding: "10px", display: "flex", flexDirection: "column", gap: "8px" }}>
<div style={{ padding: "9px", border: "1px solid #323232", borderRadius: "6px", background: "#242424", display: "flex", flexDirection: "column", gap: "7px" }}>
<div><div style={{ color: "#9A9A9A", fontSize: "10.5px" }}>Max · 0:41 · on the picture</div><div>Zoom in on this button</div></div>
<div style={{ paddingLeft: "9px", borderLeft: "2px solid #3A3A3A" }}><div style={{ color: "#9A9A9A", fontSize: "10.5px" }}>Claude Code · r14</div><div>Added a 1.4x zoom from 0:40 to 0:44.</div></div>
<div style={{ display: "flex", gap: "6px" }}><span style={{ padding: "1px 8px", border: "1px solid #3A3A3A", borderRadius: "999px", color: "#9A9A9A", fontSize: "11px" }}>Reply</span><span style={{ padding: "1px 8px", border: "1px solid #3A3A3A", borderRadius: "999px", color: "#9A9A9A", fontSize: "11px" }}>Resolve</span></div>
</div>
<div style={{ padding: "9px", border: "1px solid #323232", borderRadius: "6px", background: "#242424", display: "flex", flexDirection: "column", gap: "7px" }}>
<div style={{ paddingLeft: "8px", borderLeft: "2px solid #3A3A3A", fontStyle: "italic", color: "#BDBDBD" }}>"So I let my agent do it."</div>
<div><div style={{ color: "#9A9A9A", fontSize: "10.5px" }}>Max · 0:12</div><div>Cut the pause before this.</div></div>
</div>
</div>
<div style={{ padding: "10px", borderTop: "1px solid #323232", display: "flex", flexDirection: "column", gap: "8px" }}>
<div style={{ padding: "7px 9px", border: "1px solid #323232", borderRadius: "6px", background: "#141414", color: "#7A7A7A" }}>Comment at 0:41…</div>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><span style={{ color: "#9A9A9A", fontSize: "11px" }}>2 open</span></div>
</div>
</div>
</div>


<div style={{ height: "168px", flex: "none", borderTop: "1px solid #323232", background: "#1C1C1C", display: "flex", flexDirection: "column" }}>
<div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "6px 12px", borderBottom: "1px solid #323232" }}>
<b style={{ fontWeight: "650" }}>Timeline</b><span style={{ color: "#9A9A9A", fontSize: "10.5px" }}>click a clip to select it · Delete removes it</span>
<span style={{ marginLeft: "auto", padding: "2px 10px", border: "1px solid #323232", borderRadius: "999px", color: "#BDBDBD", fontSize: "11px" }}>ılı Studio Sound</span>
<span style={{ color: "#9A9A9A" }}>−</span><span style={{ width: "80px", height: "4px", borderRadius: "2px", background: "#3A3A3A", position: "relative" }}><span style={{ position: "absolute", left: "30%", top: "-4px", width: "12px", height: "12px", borderRadius: "50%", background: "#9A9A9A" }}></span></span><span style={{ color: "#9A9A9A" }}>+</span>
</div>
<div style={{ margin: "7px 12px 10px", flex: "1", display: "flex", border: "1px solid #323232", borderRadius: "6px", background: "#141414", overflow: "hidden", position: "relative" }}>
<div style={{ width: "30px", flex: "none", borderRight: "1px solid #323232", display: "flex", flexDirection: "column", color: "#9A9A9A", fontSize: "10px" }}>
<div style={{ height: "18px" }}></div>
<div style={{ flex: "1", display: "grid", placeItems: "center", borderTop: "1px solid #323232" }}>V2</div>
<div style={{ flex: "1", display: "grid", placeItems: "center", borderTop: "1px solid #323232" }}>V1</div>
<div style={{ flex: "1", display: "grid", placeItems: "center", borderTop: "1px solid #323232" }}>A1</div>
</div>
<div style={{ flex: "1", display: "flex", flexDirection: "column", position: "relative" }}>
<div style={{ height: "18px", display: "flex", color: "#9A9A9A", fontSize: "9.5px" }}><span style={{ flex: "1", paddingLeft: "4px", borderLeft: "1px solid #323232" }}>0:00</span><span style={{ flex: "1", paddingLeft: "4px", borderLeft: "1px solid #323232" }}>0:30</span><span style={{ flex: "1", paddingLeft: "4px", borderLeft: "1px solid #323232" }}>1:00</span><span style={{ flex: "1", paddingLeft: "4px", borderLeft: "1px solid #323232" }}>1:30</span></div>
<div style={{ flex: "1", borderTop: "1px solid #323232", position: "relative" }}><div style={{ position: "absolute", left: "30%", width: "34%", top: "3px", bottom: "3px", borderRadius: "4px", border: "1px solid #3A3A3A", background: "repeating-linear-gradient(90deg,#3A3A3A 0 26px,#2E2E2E 26px 52px)" }}><span style={{ position: "absolute", left: "0", top: "0", padding: "0 5px", fontSize: "9.5px", background: "rgba(0,0,0,.55)", borderBottomRightRadius: "4px" }}>screen-demo</span></div></div>
<div style={{ flex: "1", borderTop: "1px solid #323232", position: "relative" }}>
<div style={{ position: "absolute", left: "0", width: "29.6%", top: "3px", bottom: "3px", borderRadius: "4px", border: "1px solid #ECECEC", boxShadow: "inset 0 0 0 1px #ECECEC", background: "repeating-linear-gradient(90deg,#4A4A4A 0 26px,#3E3E3E 26px 52px)" }}><span style={{ position: "absolute", left: "0", top: "0", padding: "0 5px", fontSize: "9.5px", background: "rgba(0,0,0,.55)", borderBottomRightRadius: "4px" }}>camera-take-3</span></div>
<div style={{ position: "absolute", left: "30%", width: "44%", top: "3px", bottom: "3px", borderRadius: "4px", border: "1px solid #3A3A3A", background: "repeating-linear-gradient(90deg,#3A3A3A 0 26px,#323232 26px 52px)" }}><span style={{ position: "absolute", left: "0", top: "0", padding: "0 5px", fontSize: "9.5px", background: "rgba(0,0,0,.55)", borderBottomRightRadius: "4px" }}>camera-take-4</span></div>
<div style={{ position: "absolute", left: "74.4%", width: "25%", top: "3px", bottom: "3px", borderRadius: "4px", border: "1px solid #3A3A3A", background: "repeating-linear-gradient(90deg,#4A4A4A 0 26px,#3E3E3E 26px 52px)" }}><span style={{ position: "absolute", left: "0", top: "0", padding: "0 5px", fontSize: "9.5px", background: "rgba(0,0,0,.55)", borderBottomRightRadius: "4px" }}>camera-take-5</span></div>
</div>
<div style={{ flex: "1", borderTop: "1px solid #323232", position: "relative" }}><div style={{ position: "absolute", left: "0", right: "0", top: "3px", bottom: "3px", borderRadius: "4px", border: "1px solid #323232", background: "#1C1D22", overflow: "hidden" }}><div style={{ position: "absolute", left: "0", right: "0", top: "50%", height: "1px", background: "#4A4A4A" }}></div><div style={{ position: "absolute", inset: "22% 0", background: "repeating-linear-gradient(90deg, rgba(160,160,160,.35) 0 2px, transparent 2px 5px)" }}></div><span style={{ position: "absolute", left: "0", top: "0", padding: "0 5px", fontSize: "9.5px", background: "rgba(0,0,0,.55)", borderBottomRightRadius: "4px" }}>launch-bed</span></div></div>
<div style={{ position: "absolute", left: "34.7%", top: "0", bottom: "0", width: "1px", background: "#fff" }}></div>
</div>
</div>
</div>
</div>


<div style={{ flex: "1", minHeight: "0", display: v.slDisplay }}>
<div style={{ width: "168px", flex: "none", borderRight: "1px solid #323232", padding: "12px 10px", display: "flex", flexDirection: "column", gap: "4px", background: "#1A1A1A" }}>
<div style={{ fontSize: "10px", fontWeight: "650", letterSpacing: ".08em", color: "#9A9A9A", marginBottom: "4px" }}>CONTENTS</div>
<div style={{ padding: "4px 4px" }}><span style={{ color: "#9A9A9A", marginRight: "8px" }}>00</span>Cold open</div>
<div style={{ padding: "4px 4px" }}><span style={{ color: "#9A9A9A", marginRight: "8px" }}>01</span>The demo</div>
<div style={{ padding: "4px 4px" }}><span style={{ color: "#9A9A9A", marginRight: "8px" }}>02</span>Wrap up</div>
<div style={{ padding: "4px 4px", color: "#9A9A9A", textDecoration: "underline" }}>+ Add scene</div>
</div>
<div style={{ flex: "1", minWidth: "0", display: "flex", flexDirection: "column" }}>
<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 14px", borderBottom: "1px solid #323232", color: "#9A9A9A" }}><span>2 of 3 scenes recorded · 5 takes</span><span style={{ padding: "3px 10px", border: "1px solid #3A3A3A", borderRadius: "7px" }}>Template <b style={{ color: "#ECECEC", fontWeight: "650" }}>Talking head</b> ⌄</span></div>
<div style={{ display: "grid", gridTemplateColumns: "34px 1.2fr 1.2fr 90px 1fr 44px", gap: "10px", padding: "9px 14px", borderBottom: "1px solid #323232", color: "#9A9A9A", fontSize: "10px", fontWeight: "650", letterSpacing: ".06em" }}><span></span><span>TALKING POINTS</span><span>SCRIPT</span><span>KEY VISUAL</span><span>TAKES</span><span></span></div>

<div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 14px", background: "#1F1F1F", borderBottom: "1px solid #323232" }}><b style={{ width: "24px" }}>00</b><b style={{ fontSize: "13px" }}>Cold open</b><span style={{ color: "#9A9A9A", fontSize: "11px" }}>2 shots · 3 takes</span><span style={{ marginLeft: "auto", padding: "3px 10px", border: "1px solid #3A3A3A", borderRadius: "999px" }}>Media</span><span style={{ padding: "3px 10px", border: "1px solid #3A3A3A", borderRadius: "999px" }}><span style={{ color: "#FF6B6B" }}>●</span> Record</span></div>
<div style={{ display: "grid", gridTemplateColumns: "34px 1.2fr 1.2fr 90px 1fr 44px", gap: "10px", padding: "9px 14px", borderBottom: "1px solid #2A2A2A", alignItems: "start" }}><span style={{ color: "#9A9A9A" }}>01</span><span>Hook: editing is the worst part</span><span>Editing is the part everyone skips.</span><span style={{ height: "30px", borderRadius: "4px", background: "linear-gradient(135deg,#5A5A5A,#2E2E2E)" }}></span><span style={{ display: "flex", gap: "4px" }}><span style={{ width: "44px", height: "26px", borderRadius: "3px", background: "#4A4A4A", outline: "1.5px solid #ECECEC" }}></span><span style={{ width: "44px", height: "26px", borderRadius: "3px", background: "#3A3A3A" }}></span></span><span style={{ color: "#9A9A9A", textAlign: "right" }}>6s</span></div>
<div style={{ display: "grid", gridTemplateColumns: "34px 1.2fr 1.2fr 90px 1fr 44px", gap: "10px", padding: "9px 14px", borderBottom: "1px solid #323232", alignItems: "start" }}><span style={{ color: "#9A9A9A" }}>02</span><span>Show the agent cutting a take</span><span>So I let my agent do it.</span><span style={{ color: "#6A6A6A" }}>—</span><span style={{ display: "flex", gap: "4px" }}><span style={{ width: "44px", height: "26px", borderRadius: "3px", background: "#4A4A4A", outline: "1.5px solid #ECECEC" }}></span></span><span style={{ color: "#9A9A9A", textAlign: "right" }}>8s</span></div>

<div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 14px", background: "#1F1F1F", borderBottom: "1px solid #323232" }}><b style={{ width: "24px" }}>01</b><b style={{ fontSize: "13px" }}>The demo</b><span style={{ color: "#9A9A9A", fontSize: "11px" }}>2 shots · 2 takes</span><span style={{ marginLeft: "auto", padding: "3px 10px", border: "1px solid #3A3A3A", borderRadius: "999px" }}>Media</span><span style={{ padding: "3px 10px", border: "1px solid #3A3A3A", borderRadius: "999px" }}><span style={{ color: "#FF6B6B" }}>●</span> Record</span></div>
<div style={{ display: "grid", gridTemplateColumns: "34px 1.2fr 1.2fr 90px 1fr 44px", gap: "10px", padding: "9px 14px", borderBottom: "1px solid #2A2A2A", alignItems: "start" }}><span style={{ color: "#9A9A9A" }}>03</span><span>Upload a take, ask for a tight cut</span><span>I drop in a take and ask for a tight cut.</span><span style={{ height: "30px", borderRadius: "4px", background: "linear-gradient(135deg,#D8D8D8,#8A8A8A)" }}></span><span style={{ display: "flex", gap: "4px" }}><span style={{ width: "44px", height: "26px", borderRadius: "3px", background: "#CFCFCF", outline: "1.5px solid #ECECEC" }}></span></span><span style={{ color: "#9A9A9A", textAlign: "right" }}>20s</span></div>
<div style={{ display: "grid", gridTemplateColumns: "34px 1.2fr 1.2fr 90px 1fr 44px", gap: "10px", padding: "9px 14px", borderBottom: "1px solid #323232", alignItems: "start" }}><span style={{ color: "#9A9A9A" }}>04</span><span>Leave a comment on the frame</span><span>Then I comment right on the video.</span><span style={{ color: "#6A6A6A" }}>—</span><span style={{ display: "flex", gap: "4px" }}><span style={{ width: "44px", height: "26px", borderRadius: "3px", background: "#3A3A3A", outline: "1.5px solid #ECECEC" }}></span></span><span style={{ color: "#9A9A9A", textAlign: "right" }}>14s</span></div>

<div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "9px 14px", background: "#1F1F1F", borderBottom: "1px solid #323232" }}><b style={{ width: "24px" }}>02</b><b style={{ fontSize: "13px" }}>Wrap up</b><span style={{ color: "#9A9A9A", fontSize: "11px" }}>1 shot · 0 takes</span><span style={{ marginLeft: "auto", padding: "3px 10px", border: "1px solid #3A3A3A", borderRadius: "999px" }}>Media</span><span style={{ padding: "3px 10px", border: "1px solid #ECECEC", borderRadius: "999px", background: "#2A2A2A" }}><span style={{ color: "#FF6B6B" }}>●</span> Record</span></div>
<div style={{ display: "grid", gridTemplateColumns: "34px 1.2fr 1.2fr 90px 1fr 44px", gap: "10px", padding: "9px 14px", alignItems: "start" }}><span style={{ color: "#9A9A9A" }}>05</span><span>Render in the cloud, share the link</span><span>It renders in the cloud while I keep working.</span><span style={{ color: "#6A6A6A" }}>—</span><span style={{ color: "#6A6A6A" }}>—</span><span style={{ color: "#9A9A9A", textAlign: "right" }}>10s</span></div>
<div style={{ padding: "6px 14px 0 58px", color: "#9A9A9A" }}>+ Add shot</div>
</div>
</div>


<div style={{ display: v.menuVersions, position: "absolute", right: "120px", top: "42px", width: "236px", padding: "5px", borderRadius: "9px", background: "rgba(30,30,30,.97)", border: "1px solid #3E3E3E", boxShadow: "0 16px 40px rgba(0,0,0,.55)", flexDirection: "column", gap: "1px", zIndex: "5" }}>
<div style={{ padding: "6px 9px", borderRadius: "6px", background: "#333" }}><div style={{ fontWeight: "650" }}>Current edit</div><div style={{ color: "#9A9A9A", fontSize: "11px" }}>Revision r14</div></div>
<div style={{ padding: "6px 9px" }}><div style={{ fontWeight: "650" }}>Rendering a new version…</div><div style={{ color: "#9A9A9A", fontSize: "11px" }}>started 1 min ago</div></div>
<div style={{ padding: "6px 9px 2px", color: "#9A9A9A", fontSize: "10px", fontWeight: "650", letterSpacing: ".06em" }}>RENDERED</div>
<div style={{ padding: "6px 9px" }}><div style={{ fontWeight: "650" }}>Version 3</div><div style={{ color: "#9A9A9A", fontSize: "11px" }}>12 min ago · Claude Code · earlier edit</div></div>
<div style={{ padding: "6px 9px" }}><div style={{ fontWeight: "650" }}>Version 2</div><div style={{ color: "#9A9A9A", fontSize: "11px" }}>yesterday · Max · earlier edit</div></div>
<div style={{ height: "1px", background: "#3A3A3A", margin: "4px 6px" }}></div>
<div style={{ padding: "6px 9px" }}>Render a new version…</div>
<div style={{ padding: "6px 9px" }}>History of changes…</div>
</div>

</div>
    </div>
  );
}
