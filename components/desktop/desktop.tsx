"use client";

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  type ReactNode,
} from "react";
import {
  User,
  Folder,
  FileText,
  Cpu,
  X,
  Minus,
  Square,
  Github,
  Linkedin,
  Mail,
  Monitor,
  ChevronRight,
  Download,
  ExternalLink,
  Send,
  MapPin,
  Calendar,
  Building2,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { skillGroups } from "@/data/skills";

// ─────────────────────────────────────────────────────────────────────
// Constants
// ─────────────────────────────────────────────────────────────────────
const MIN_W = 320;
const MIN_H = 240;
const INITIAL_Z = 100;

// PostHog orange
const PH_ORANGE = "#F54E00";

// ─────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────
type WinType =
  | "profile"
  | "work"
  | "cv"
  | "stack"
  | "contact"
  | "project-detail";

interface WinState {
  id: string;
  type: WinType;
  title: string;
  IconComponent: React.ComponentType<{ size?: number; className?: string }>;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  isMinimized: boolean;
  isMaximized: boolean;
  isFocused: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}

interface DesktopIcon {
  id: string;
  label: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  x: number;
  y: number;
}

// ─────────────────────────────────────────────────────────────────────
// PNG icon wrappers
// ─────────────────────────────────────────────────────────────────────
function FileIconImg({ size = 32 }: { size?: number; className?: string }) {
  return (
    <img
      src="/file-icon.png"
      alt="file"
      width={size}
      height={size}
      style={{ imageRendering: "pixelated" }}
    />
  );
}

function MoriconsIconImg({ size = 32 }: { size?: number; className?: string }) {
  return (
    <img
      src="/moricons-icon.png"
      alt="work"
      width={size}
      height={size}
      style={{ imageRendering: "pixelated" }}
    />
  );
}

function PdfIconImg({ size = 32 }: { size?: number; className?: string }) {
  return (
    <img
      src="/pdf-icon.png"
      alt="pdf"
      width={size}
      height={size}
      style={{ imageRendering: "pixelated" }}
    />
  );
}

function ExploreIconImg({ size = 32 }: { size?: number; className?: string }) {
  return (
    <img
      src="/explore-icon.png"
      alt="contact"
      width={size}
      height={size}
      style={{ imageRendering: "pixelated" }}
    />
  );
}

function IexploreIconImg({ size = 32 }: { size?: number; className?: string }) {
  return (
    <img
      src="/iexplore-icon.png"
      alt="stack"
      width={size}
      height={size}
      style={{ imageRendering: "pixelated" }}
    />
  );
}

// ─────────────────────────────────────────────────────────────────────
// Initial desktop icons
// ─────────────────────────────────────────────────────────────────────
const INITIAL_ICONS: DesktopIcon[] = [
  { id: "profile", label: "MyProfile.exe", Icon: FileIconImg, x: 20, y: 20 },
  { id: "work", label: "Work.txt", Icon: MoriconsIconImg, x: 20, y: 130 },
  { id: "cv", label: "CV.pdf", Icon: PdfIconImg, x: 20, y: 240 },
  { id: "stack", label: "Stack.cfg", Icon: IexploreIconImg, x: 20, y: 350 },
  { id: "contact", label: "Contact.bat", Icon: ExploreIconImg, x: 20, y: 460 },
];

const ICON_META: Record<
  string,
  {
    title: string;
    Icon: React.ComponentType<{ size?: number; className?: string }>;
  }
> = {
  profile: { title: "MyProfile.exe", Icon: FileIconImg },
  work: { title: "Work_Log.txt", Icon: MoriconsIconImg },
  cv: { title: "MyCV.pdf", Icon: PdfIconImg },
  stack: { title: "Systems.cfg", Icon: IexploreIconImg },
  contact: { title: "Contact.bat", Icon: ExploreIconImg },
  "project-detail": { title: "Project_Detail", Icon: FileText },
};

// ─────────────────────────────────────────────────────────────────────
// Windows 98 logo SVG (4-pane flag)
// ─────────────────────────────────────────────────────────────────────
function Win98LogoSVG({ size = 80 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width="44" height="44" fill="#F25022" rx="1" />
      <rect x="54" y="2" width="44" height="44" fill="#7FBA00" rx="1" />
      <rect x="2" y="54" width="44" height="44" fill="#00A4EF" rx="1" />
      <rect x="54" y="54" width="44" height="44" fill="#FFB900" rx="1" />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Boot sequence
// ─────────────────────────────────────────────────────────────────────
const BIOS_LINES = [
  "BIOS v2.31  Copyright (C) H_ZHAO_SYS 1998-2026",
  "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500",
  " Detecting CPU: Next.js 16 (V8 Turbo) ............... [OK]",
  " Detecting RAM: React 19 (Compiler Optimized) ....... [OK]",
  " Detecting Primary Master: Claude-3.7-Sonnet ........ [OK]",
  " Detecting Co-Processor: MCP Protocol v1.0 .......... [OK]",
  " Detecting AI Tools: Vercel AI SDK + OpenAI ......... [OK]",
  " Running Memory Check: 19 GB Agentic Context ........ [OK]",
  "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500",
  " Starting H_ZHAO_OS...",
] as const;

type BootPhase = "bios" | "splash" | "loading";

function BootSequence({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<BootPhase>("bios");
  const [visibleLines, setVisibleLines] = useState(0);
  const [progress, setProgress] = useState(0);

  // BIOS: reveal lines one by one at 200ms each
  useEffect(() => {
    if (phase !== "bios") return;
    if (visibleLines >= BIOS_LINES.length) {
      const t = setTimeout(() => setPhase("splash"), 400);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setVisibleLines((n) => n + 1), 300);
    return () => clearTimeout(t);
  }, [phase, visibleLines]);

  // Splash: show for 1500ms then load
  useEffect(() => {
    if (phase !== "splash") return;
    const t = setTimeout(() => setPhase("loading"), 1500);
    return () => clearTimeout(t);
  }, [phase]);

  // Loading: increment progress 0→100 in 2s (2% per 40ms)
  useEffect(() => {
    if (phase !== "loading") return;
    const id = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 2));
    }, 40);
    return () => clearInterval(id);
  }, [phase]);

  // When bar hits 100 transition to desktop
  useEffect(() => {
    if (progress < 100) return;
    const t = setTimeout(onComplete, 300);
    return () => clearTimeout(t);
  }, [progress, onComplete]);

  if (phase === "bios") {
    return (
      <div
        className="fixed inset-0 bg-black flex flex-col justify-start p-6 sm:p-10 font-mono overflow-hidden"
        style={{ zIndex: 99999 }}
      >
        <div className="space-y-0.5">
          {(BIOS_LINES as readonly string[])
            .slice(0, visibleLines)
            .map((line, i) => (
              <p
                key={i}
                className={`text-[11px] sm:text-[13px] leading-snug whitespace-pre ${
                  line.startsWith("\u2500")
                    ? "text-gray-700"
                    : line.includes("[OK]")
                      ? "text-gray-300"
                      : line.startsWith("BIOS")
                        ? "text-white font-bold"
                        : "text-gray-400"
                }`}
              >
                {line}
              </p>
            ))}
          {visibleLines < BIOS_LINES.length && (
            <span className="inline-block w-2 h-[13px] bg-gray-400 animate-pulse" />
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 bg-[#008080] flex flex-col items-center justify-center gap-8"
      style={{ zIndex: 99999 }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes bootbar-pulse { 0% { background-position: 0% 0; } 100% { background-position: 200% 0; } }
        .bootbar { background: linear-gradient(90deg, #000080 0%, #1084d0 40%, #4fc3f7 50%, #1084d0 60%, #000080 100%); background-size: 200% 100%; animation: bootbar-pulse 1s linear infinite; transition: width 40ms linear; }
      `,
        }}
      />
      <Win98LogoSVG size={96} />
      <div className="text-center">
        <p className="text-white font-bold text-xl tracking-[0.25em] uppercase">
          Windows 98
        </p>
        <p className="text-white/50 text-[10px] tracking-widest mt-1 uppercase">
          H_ZHAO_OS — Agentic Edition
        </p>
      </div>
      {phase === "loading" && (
        <div className="w-56 space-y-2">
          <div
            className="h-5 overflow-hidden"
            style={{
              borderTop: "2px solid #808080",
              borderLeft: "2px solid #808080",
              borderRight: "2px solid #ffffff",
              borderBottom: "2px solid #ffffff",
            }}
          >
            <div className="h-full bootbar" style={{ width: `${progress}%` }} />
          </div>
          <p className="text-white/40 text-[9px] text-center font-mono uppercase tracking-widest">
            Loading system components...
          </p>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Win98 helper: classic 3-D border button
// ─────────────────────────────────────────────────────────────────────
function Win98Button({
  children,
  onClick,
  primary = false,
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  primary?: boolean;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1 active:translate-x-px active:translate-y-px transition-none
        border-t-2 border-l-2 border-t-white border-l-white
        border-r-2 border-b-2 border-r-[#808080] border-b-[#808080]
        bg-[#c0c0c0] text-black shadow-[1px_1px_0px_0px_#000000]
        hover:bg-[#d0d0d0] text-xs cursor-default select-none ${primary ? "font-bold" : ""} ${className}`}
      type="button"
    >
      {children}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Win98 title-bar button (tiny)
// ─────────────────────────────────────────────────────────────────────
function TitleBarBtn({
  onClick,
  children,
}: {
  onClick: (e: React.MouseEvent) => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        onClick(e);
      }}
      className="w-5 h-5 bg-[#c0c0c0] border-t border-l border-t-white border-l-white border-r border-b border-r-black border-b-black flex items-center justify-center active:bg-[#a0a0a0] focus:outline-none cursor-default select-none"
    >
      {children}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Window component
// ─────────────────────────────────────────────────────────────────────
function Win98Window({
  win,
  onClose,
  onFocus,
  onMinimize,
  onMaximize,
  onMove,
  onResize,
  isMobile,
  children,
}: {
  win: WinState;
  onClose: (id: string) => void;
  onFocus: (id: string) => void;
  onMinimize: (id: string) => void;
  onMaximize: (id: string) => void;
  onMove: (id: string, x: number, y: number) => void;
  onResize: (id: string, w: number, h: number) => void;
  isMobile: boolean;
  children: ReactNode;
}) {
  const {
    id,
    title,
    IconComponent,
    x,
    y,
    width,
    height,
    zIndex,
    isMaximized,
    isFocused,
    isMinimized,
  } = win;

  // Drag / resize via ref to avoid re-renders per frame
  const dragRef = useRef<{
    active: boolean;
    action: "move" | "resize";
    startX: number;
    startY: number;
    initX: number;
    initY: number;
    initW: number;
    initH: number;
  } | null>(null);

  const startAction = useCallback(
    (clientX: number, clientY: number, action: "move" | "resize") => {
      if (isMaximized && action === "move") return;
      dragRef.current = {
        active: true,
        action,
        startX: clientX,
        startY: clientY,
        initX: x,
        initY: y,
        initW: width,
        initH: height,
      };
      onFocus(id);
    },
    [id, isMaximized, x, y, width, height, onFocus],
  );

  useEffect(() => {
    const handleMove = (clientX: number, clientY: number) => {
      if (!dragRef.current?.active) return;
      const { action, startX, startY, initX, initY, initW, initH } =
        dragRef.current;
      const dx = clientX - startX;
      const dy = clientY - startY;
      if (action === "move") onMove(id, initX + dx, initY + dy);
      else
        onResize(id, Math.max(MIN_W, initW + dx), Math.max(MIN_H, initH + dy));
    };

    const handleUp = () => {
      if (dragRef.current) dragRef.current.active = false;
    };

    const mouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const touchMove = (e: TouchEvent) => {
      if (e.touches[0]) handleMove(e.touches[0].clientX, e.touches[0].clientY);
    };

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", handleUp);
    document.addEventListener("touchmove", touchMove, { passive: false });
    document.addEventListener("touchend", handleUp);
    return () => {
      document.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseup", handleUp);
      document.removeEventListener("touchmove", touchMove);
      document.removeEventListener("touchend", handleUp);
    };
  }, [id, onMove, onResize]);

  if (isMinimized) return null;

  const maximized = isMaximized || isMobile;

  return (
    <div
      className="absolute flex flex-col overflow-hidden"
      style={{
        left: maximized ? 0 : x,
        top: maximized ? (isMobile ? 10 : 0) : y,
        width: maximized ? "100%" : width,
        height: maximized
          ? isMobile
            ? "calc(100% - 60px)"
            : "calc(100% - 40px)"
          : height,
        zIndex,
        borderTop: "2px solid #ffffff",
        borderLeft: "2px solid #ffffff",
        borderRight: "2px solid #808080",
        borderBottom: "2px solid #808080",
        backgroundColor: "#c0c0c0",
        boxShadow: "2px 2px 0px 0px #000000",
      }}
      onMouseDown={() => onFocus(id)}
      onTouchStart={() => onFocus(id)}
    >
      {/* Title bar */}
      <div
        className={`flex items-center justify-between p-1 select-none cursor-default ${
          isFocused
            ? "bg-gradient-to-r from-[#000080] to-[#1084d0]"
            : "bg-[#808080]"
        }`}
        onMouseDown={(e) => {
          e.stopPropagation();
          startAction(e.clientX, e.clientY, "move");
        }}
        onTouchStart={(e) => {
          e.stopPropagation();
          if (e.touches[0])
            startAction(e.touches[0].clientX, e.touches[0].clientY, "move");
        }}
        onDoubleClick={() => onMaximize(id)}
      >
        <div className="flex items-center gap-2 px-1 overflow-hidden">
          <IconComponent size={14} className="text-white flex-shrink-0" />
          <span className="text-white font-bold text-xs truncate uppercase tracking-tighter">
            {title}
          </span>
        </div>
        <div className="flex gap-1">
          <TitleBarBtn onClick={() => onMinimize(id)}>
            <Minus size={12} />
          </TitleBarBtn>
          <TitleBarBtn onClick={() => onMaximize(id)}>
            <Square size={10} />
          </TitleBarBtn>
          <TitleBarBtn onClick={() => onClose(id)}>
            <X size={12} className="text-black" />
          </TitleBarBtn>
        </div>
      </div>

      {/* Menu bar */}
      <div className="flex border-b border-[#808080] px-2 py-0.5 gap-4 text-[11px] bg-[#c0c0c0] select-none">
        {["File", "Edit", "View"].map((m) => (
          <span
            key={m}
            className="hover:bg-[#000080] hover:text-white px-1 cursor-default"
          >
            {m}
          </span>
        ))}
      </div>

      {/* Content area */}
      <div
        className="flex-1 bg-white m-1 overflow-auto select-text"
        style={{
          borderTop: "2px solid #808080",
          borderLeft: "2px solid #808080",
          borderRight: "2px solid #ffffff",
          borderBottom: "2px solid #ffffff",
        }}
      >
        <div className="p-4 min-h-full">{children}</div>
      </div>

      {/* Resize handle */}
      {!maximized && (
        <div
          className="absolute bottom-0 right-0 w-5 h-5 cursor-nwse-resize z-50 flex items-end justify-end pr-0.5 pb-0.5"
          style={{
            background: "linear-gradient(135deg, transparent 50%, #808080 50%)",
          }}
          onMouseDown={(e) => {
            e.stopPropagation();
            startAction(e.clientX, e.clientY, "resize");
          }}
          onTouchStart={(e) => {
            e.stopPropagation();
            if (e.touches[0])
              startAction(e.touches[0].clientX, e.touches[0].clientY, "resize");
          }}
        />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Window content: Profile
// ─────────────────────────────────────────────────────────────────────
function ProfileContent() {
  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row gap-5 border-b-2 border-dotted border-black/10 pb-5">
        {/* Avatar */}
        <div
          className="w-28 h-28 flex-shrink-0 flex items-center justify-center bg-[#c0c0c0]"
          style={{
            border: "4px double #808080",
            boxShadow: "inset 1px 1px 0 #fff, inset -1px -1px 0 #808080",
          }}
        >
          <User size={56} className="text-[#555]" />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black italic uppercase tracking-tighter leading-none">
            {siteConfig.name}
          </h1>
          <p
            className="font-bold text-sm tracking-[0.18em]"
            style={{ color: PH_ORANGE }}
          >
            {">"} {siteConfig.title}
          </p>
          <p className="text-[11px] text-gray-600 leading-relaxed max-w-sm flex items-center gap-1">
            <MapPin size={11} className="flex-shrink-0" /> {siteConfig.location}
          </p>
          <p className="text-[11px] text-gray-600 leading-relaxed max-w-sm">
            Senior Frontend Dev bridging deterministic UI with Agentic AI.
            Specialising in React&nbsp;19, Next.js&nbsp;16, and MCP-driven
            workflows with Claude.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Win98Button
              primary
              onClick={() => window.open(siteConfig.resumeUrl, "_blank")}
            >
              DOWNLOAD_CV
            </Win98Button>
            <Win98Button
              onClick={() => window.open(`mailto:${siteConfig.email}`)}
            >
              SEND_MAIL
            </Win98Button>
          </div>
        </div>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Experience", value: "8+ yrs" },
          { label: "Markets", value: "80+" },
          { label: "Focus", value: "Web & Mobile" },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="text-center p-3 bg-[#f0f0f0] text-xs"
            style={{
              borderTop: "2px solid #ffffff",
              borderLeft: "2px solid #ffffff",
              borderRight: "2px solid #808080",
              borderBottom: "2px solid #808080",
            }}
          >
            <div className="font-black text-base" style={{ color: PH_ORANGE }}>
              {value}
            </div>
            <div className="text-gray-500 uppercase tracking-wide text-[9px] mt-0.5">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Social links */}
      <div className="flex flex-wrap gap-3 pt-1">
        <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
          <Win98Button className="flex items-center gap-1.5">
            <Github size={12} /> GitHub
          </Win98Button>
        </a>
        <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">
          <Win98Button className="flex items-center gap-1.5">
            <Linkedin size={12} /> LinkedIn
          </Win98Button>
        </a>
        <a href={`mailto:${siteConfig.email}`}>
          <Win98Button className="flex items-center gap-1.5">
            <Mail size={12} /> Email
          </Win98Button>
        </a>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Window content: Work Log (project list)
// ─────────────────────────────────────────────────────────────────────
function WorkContent({
  onOpenProject,
}: {
  onOpenProject: (project: (typeof projects)[number]) => void;
}) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 bg-[#808080] text-white p-1 px-3 text-xs font-bold uppercase tracking-widest">
        <Folder size={13} /> Directory: Projects_Archive
      </div>
      <div className="space-y-1.5">
        {projects.map((proj) => (
          <div
            key={proj.slug}
            className="p-3 bg-white border border-[#c0c0c0] hover:bg-[#e8e8ff] cursor-pointer group flex justify-between items-center"
            style={{
              borderTop: "1px solid #808080",
              borderLeft: "1px solid #808080",
              borderRight: "1px solid #fff",
              borderBottom: "1px solid #fff",
            }}
            onClick={() => onOpenProject(proj)}
          >
            <div className="flex gap-3 items-center min-w-0">
              <FileText size={18} className="text-gray-400 flex-shrink-0" />
              <div className="min-w-0">
                <h3 className="font-bold text-sm truncate">{proj.name}</h3>
                <p className="text-[10px] text-gray-500 italic">
                  {proj.stack.slice(0, 3).join(", ")}
                </p>
              </div>
            </div>
            <ChevronRight
              size={14}
              className="text-[#808080] group-hover:text-[#F54E00] flex-shrink-0 ml-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Window content: Project Detail
// ─────────────────────────────────────────────────────────────────────
function ProjectDetailContent({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div className="space-y-5">
      <div className="pb-3" style={{ borderBottom: `3px solid ${PH_ORANGE}` }}>
        <h2 className="text-xl font-black uppercase italic tracking-tighter leading-tight">
          {project.name}
        </h2>
        <p className="text-[11px] text-gray-500 mt-1 flex items-center gap-1">
          <Building2 size={11} /> {project.domain} — {project.role}
        </p>
      </div>

      <p className="text-sm leading-relaxed text-gray-700">{project.summary}</p>

      {/* Stack */}
      <div
        className="bg-[#f0f0f0] p-3 space-y-2"
        style={{ border: "2px dashed #808080" }}
      >
        <div
          className="text-[9px] font-bold tracking-widest uppercase"
          style={{ color: PH_ORANGE }}
        >
          Tech Stack:
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <code
              key={s}
              className="text-[10px] bg-white px-2 py-0.5 border border-[#808080]"
            >
              {s}
            </code>
          ))}
        </div>
      </div>

      {/* Impact */}
      <div className="space-y-1">
        <div className="text-[9px] font-bold tracking-widest uppercase text-gray-500">
          Impact:
        </div>
        <p className="text-xs text-gray-700 leading-relaxed">
          {project.impact}
        </p>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-2 pt-1">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            <Win98Button className="flex items-center gap-1.5 text-[10px]">
              <ExternalLink size={10} /> LIVE_DEMO
            </Win98Button>
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            <Win98Button className="flex items-center gap-1.5 text-[10px]">
              <Github size={10} /> SOURCE_CODE
            </Win98Button>
          </a>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Window content: CV
// ─────────────────────────────────────────────────────────────────────
function CVContent() {
  return (
    <div className="bg-gray-50 min-h-full">
      <div className="max-w-xl mx-auto bg-white p-6 font-serif text-xs shadow-sm">
        <h1 className="text-xl font-bold border-b-2 border-black pb-2 mb-4 uppercase tracking-wider">
          Curriculum Vitae
        </h1>
        <div className="mb-3">
          <p className="text-base font-bold">{siteConfig.name}</p>
          <p className="text-gray-600">
            {siteConfig.title} · {siteConfig.location}
          </p>
          <p className="text-gray-600">{siteConfig.email}</p>
        </div>

        {experience.map((item) => (
          <div key={`${item.company}-${item.role}`} className="mb-5">
            <div className="flex justify-between items-baseline flex-wrap gap-1 border-b border-gray-200 pb-1 mb-2">
              <div>
                <span className="font-bold">{item.role}</span>
                <span className="text-gray-500 ml-2">@ {item.company}</span>
              </div>
              <span className="text-gray-400 text-[10px] flex items-center gap-1">
                <Calendar size={9} /> {item.period}
              </span>
            </div>
            {item.location && (
              <p className="text-gray-500 mb-1 flex items-center gap-1">
                <MapPin size={9} /> {item.location}
              </p>
            )}
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {item.bullets.slice(0, 3).map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}

        <div className="mt-4 pt-3 border-t border-gray-300">
          <a href={siteConfig.resumeUrl} target="_blank" rel="noreferrer">
            <Win98Button className="flex items-center gap-1.5 text-[10px] font-sans">
              <Download size={10} /> DOWNLOAD_FULL_CV
            </Win98Button>
          </a>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Window content: Skills / Systems.cfg
// ─────────────────────────────────────────────────────────────────────
function StackContent() {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 bg-[#808080] text-white p-1 px-3 text-xs font-bold uppercase tracking-widest">
        <Cpu size={13} /> Systems.cfg — Skill Configuration
      </div>

      <div className="space-y-4">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <p
              className="text-[10px] font-bold uppercase tracking-widest mb-2"
              style={{ color: PH_ORANGE }}
            >
              {group.title}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {group.items.map((item) => (
                <div
                  key={item}
                  className="p-2 text-center text-[10px] font-bold uppercase bg-[#f0f0f0]"
                  style={{
                    borderTop: "2px solid #ffffff",
                    borderLeft: "2px solid #ffffff",
                    borderRight: "2px solid #808080",
                    borderBottom: "2px solid #808080",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Window content: Contact
// ─────────────────────────────────────────────────────────────────────
function ContactContent() {
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!name.trim() || !email.trim() || !msg.trim()) return;
    const mailtoUrl = `mailto:${siteConfig.email}?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(msg)}`;
    window.open(mailtoUrl);
    setSent(true);
    setMsg("");
    setName("");
    setEmail("");
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    borderTop: "2px solid #808080",
    borderLeft: "2px solid #808080",
    borderRight: "2px solid #ffffff",
    borderBottom: "2px solid #ffffff",
    padding: "4px 8px",
    fontSize: "11px",
    backgroundColor: "#ffffff",
    outline: "none",
    fontFamily: "inherit",
  };

  return (
    <div className="space-y-4">
      {/* Terminal log */}
      <div className="bg-black text-green-400 p-3 font-mono text-[10px] h-28 overflow-auto">
        <p>{">"} INITIALIZING SECURE_CHANNEL...</p>
        <p>
          {">"} ENDPOINT: {siteConfig.email}
        </p>
        <p>{">"} STATUS: CONNECTION_ESTABLISHED</p>
        <p>{">"} AI_AGENT: READY — Claude-3.7-Sonnet active</p>
        <p>{">"} MCP_PROTOCOL: v1.0 — awaiting instruction...</p>
        <p>{">"} Waiting for input...</p>
        {sent && (
          <p style={{ color: PH_ORANGE }}>{">"} MESSAGE_SENT — Thank you!</p>
        )}
      </div>

      {/* Social links */}
      <div className="flex flex-wrap gap-2">
        <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
          <Win98Button className="flex items-center gap-1.5 text-[10px]">
            <Github size={10} /> GitHub
          </Win98Button>
        </a>
        <a href={siteConfig.linkedinUrl} target="_blank" rel="noreferrer">
          <Win98Button className="flex items-center gap-1.5 text-[10px]">
            <Linkedin size={10} /> LinkedIn
          </Win98Button>
        </a>
        <a href={`mailto:${siteConfig.email}`}>
          <Win98Button className="flex items-center gap-1.5 text-[10px]">
            <Mail size={10} /> Email
          </Win98Button>
        </a>
      </div>

      {/* Form */}
      <div className="space-y-2">
        <label className="block text-[10px] font-bold uppercase">Name:</label>
        <input
          style={inputStyle}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
        <label className="block text-[10px] font-bold uppercase">Email:</label>
        <input
          style={inputStyle}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
        />
        <label className="block text-[10px] font-bold uppercase">
          Message:
        </label>
        <textarea
          style={{ ...inputStyle, height: 80, resize: "vertical" }}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Type your message here..."
        />
        <Win98Button
          primary
          onClick={handleSend}
          className="flex items-center gap-1.5"
        >
          <Send size={10} /> SEND_DATA
        </Win98Button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Start menu item
// ─────────────────────────────────────────────────────────────────────
function StartMenuItem({
  icon: Icon,
  label,
  onClick,
  hasSub = false,
  isBold = false,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  onClick?: () => void;
  hasSub?: boolean;
  isBold?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-1.5 hover:bg-[#000080] hover:text-white group cursor-default select-none ${
        isBold ? "font-bold" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex-shrink-0">
        <Icon size={18} className="text-[#808080] group-hover:text-white" />
      </div>
      <span className="flex-1 text-xs">{label}</span>
      {hasSub && (
        <ChevronRight size={12} className="opacity-60 group-hover:text-white" />
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────
// Main Desktop component
// ─────────────────────────────────────────────────────────────────────
export default function Desktop() {
  const [bootDone, setBootDone] = useState(false);
  const [windows, setWindows] = useState<WinState[]>([]);
  const [icons, setIcons] = useState<DesktopIcon[]>(INITIAL_ICONS);
  const [zCounter, setZCounter] = useState(INITIAL_Z);
  const [time, setTime] = useState(new Date());
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const startMenuRef = useRef<HTMLDivElement>(null);

  // Clock
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  // Mobile detection
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Close start menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        startMenuRef.current &&
        !startMenuRef.current.contains(e.target as Node)
      ) {
        setStartMenuOpen(false);
      }
    };
    if (startMenuOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [startMenuOpen]);

  const nextZ = useCallback(() => {
    const z = zCounter + 1;
    setZCounter(z);
    return z;
  }, [zCounter]);

  const focusWindow = useCallback(
    (id: string) => {
      const z = zCounter + 1;
      setZCounter(z);
      setWindows((prev) =>
        prev.map((w) => ({
          ...w,
          zIndex: w.id === id ? z : w.zIndex,
          isFocused: w.id === id,
          isMinimized: w.id === id ? false : w.isMinimized,
        })),
      );
    },
    [zCounter],
  );

  const openWindow = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (type: WinType, data?: any) => {
      setStartMenuOpen(false);
      // For project-detail, always open a new window (multiple allowed)
      if (type !== "project-detail") {
        const existing = windows.find((w) => w.type === type);
        if (existing) {
          focusWindow(existing.id);
          return;
        }
      }

      const meta = ICON_META[type] ?? ICON_META["work"];
      const title = data?.name ? `${data.name}.proj` : meta.title;
      const z = nextZ();
      const offset = windows.length * 28;

      const newWin: WinState = {
        id: Math.random().toString(36).slice(2, 9),
        type,
        title,
        IconComponent: meta.Icon,
        x: 80 + offset,
        y: 60 + offset,
        width: 640,
        height: 600,
        zIndex: z,
        isMinimized: false,
        isMaximized: false,
        isFocused: true,
        data,
      };

      setWindows((prev) =>
        prev.map((w) => ({ ...w, isFocused: false })).concat(newWin),
      );
    },
    [windows, nextZ, focusWindow],
  );

  const closeWindow = (id: string) =>
    setWindows((prev) => prev.filter((w) => w.id !== id));
  const moveWindow = (id: string, x: number, y: number) =>
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, x, y } : w)));
  const resizeWindow = (id: string, width: number, height: number) =>
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, width, height } : w)),
    );
  const toggleMaximize = (id: string) =>
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, isMaximized: !w.isMaximized } : w,
      ),
    );
  const toggleMinimize = (id: string) =>
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id
          ? { ...w, isMinimized: !w.isMinimized, isFocused: false }
          : w,
      ),
    );

  // Desktop icon drag (supports mouse + touch)
  const handleIconInteraction = (
    iconId: string,
    clientX: number,
    clientY: number,
  ) => {
    const startX = clientX;
    const startY = clientY;
    const iconStart = icons.find((ic) => ic.id === iconId);
    const originX = iconStart?.x ?? 0;
    const originY = iconStart?.y ?? 0;
    let hasMoved = false;

    const onMove = (cx: number, cy: number) => {
      const dx = cx - startX;
      const dy = cy - startY;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
        hasMoved = true;
        setIcons((prev) =>
          prev.map((ic) =>
            ic.id === iconId ? { ...ic, x: originX + dx, y: originY + dy } : ic,
          ),
        );
      }
    };

    const onMouse = (e: MouseEvent) => onMove(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      if (e.touches[0]) onMove(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onUp = () => {
      document.removeEventListener("mousemove", onMouse);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("touchmove", onTouch);
      document.removeEventListener("touchend", onUp);
      if (!hasMoved) openWindow(iconId as WinType);
    };

    document.addEventListener("mousemove", onMouse);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("touchmove", onTouch, { passive: false });
    document.addEventListener("touchend", onUp);
  };

  const renderWindowContent = (win: WinState) => {
    switch (win.type) {
      case "profile":
        return <ProfileContent />;
      case "work":
        return (
          <WorkContent onOpenProject={(p) => openWindow("project-detail", p)} />
        );
      case "project-detail":
        return <ProjectDetailContent project={win.data} />;
      case "cv":
        return <CVContent />;
      case "stack":
        return <StackContent />;
      case "contact":
        return <ContactContent />;
      default:
        return null;
    }
  };

  if (!bootDone) {
    return <BootSequence onComplete={() => setBootDone(true)} />;
  }

  return (
    <div
      className="fixed inset-0 text-black font-[Arial,sans-serif] flex flex-col overflow-hidden select-none"
      style={{
        zIndex: 9999,
        backgroundImage: "url('/bliss.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#008080",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .win98-scrollbar::-webkit-scrollbar { width: 16px; height: 16px; }
        .win98-scrollbar::-webkit-scrollbar-track { background: #dfdfdf; box-shadow: inset 1px 1px 0 #808080, inset -1px -1px 0 #fff; }
        .win98-scrollbar::-webkit-scrollbar-thumb { background: #c0c0c0; border-top: 1px solid #fff; border-left: 1px solid #fff; border-right: 1px solid #808080; border-bottom: 1px solid #808080; }
        * { cursor: default !important; }
        input, textarea, a, button { cursor: default !important; }
        a[href], input[type="submit"] { cursor: pointer !important; }
        @keyframes bootbar-pulse { 0% { background-position: 0% 0; } 100% { background-position: 200% 0; } }
        .bootbar { background: linear-gradient(90deg, #000080 0%, #1084d0 40%, #4fc3f7 50%, #1084d0 60%, #000080 100%); background-size: 200% 100%; animation: bootbar-pulse 1s linear infinite; transition: width 40ms linear; }
      `,
        }}
      />

      {/* ── Desktop area ── */}
      <main className="flex-1 relative overflow-hidden">
        {/* Desktop icons */}
        {icons.map((icon) => (
          <div
            key={icon.id}
            style={{ position: "absolute", left: icon.x, top: icon.y }}
            className="w-24 flex flex-col items-center group active:opacity-70 transition-opacity"
            onMouseDown={(e) => {
              e.preventDefault();
              handleIconInteraction(icon.id, e.clientX, e.clientY);
            }}
            onTouchStart={(e) => {
              if (e.touches[0])
                handleIconInteraction(
                  icon.id,
                  e.touches[0].clientX,
                  e.touches[0].clientY,
                );
            }}
          >
            <div className="p-2 mb-1 group-focus-within:bg-[#000080]/20 rounded">
              <icon.Icon size={48} className="text-white drop-shadow" />
            </div>
            <span className="text-xs text-white drop-shadow-md px-1 text-center leading-tight bg-black/5 rounded-sm">
              {icon.label}
            </span>
          </div>
        ))}

        {/* Windows */}
        {windows.map((win) => (
          <Win98Window
            key={win.id}
            win={win}
            onClose={closeWindow}
            onFocus={focusWindow}
            onMinimize={toggleMinimize}
            onMaximize={toggleMaximize}
            onMove={moveWindow}
            onResize={resizeWindow}
            isMobile={isMobile}
          >
            {renderWindowContent(win)}
          </Win98Window>
        ))}

        {/* Start menu */}
        {startMenuOpen && (
          <div
            ref={startMenuRef}
            className="absolute bottom-[-2px] left-0 w-64 bg-[#c0c0c0] z-[100000] flex border-t-2 border-l-2 border-r-2 border-b-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] shadow-[2px_2px_0px_0px_#000000]"
          >
            {/* Sidebar strip */}
            <div className="w-10 bg-gradient-to-t from-[#000080] to-[#1084d0] flex flex-col justify-end items-center pb-3 gap-2 flex-shrink-0">
              <Win98LogoSVG size={22} />
              <span
                className="text-white font-bold text-[11px] select-none"
                style={{
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  letterSpacing: "0.08em",
                }}
              >
                Windows 98
              </span>
            </div>

            {/* Menu items */}
            <div className="flex-1 py-1">
              <div className="px-3 py-1 text-[10px] text-gray-500 uppercase font-bold border-b border-gray-300 mb-1">
                Desktop Apps
              </div>
              {INITIAL_ICONS.map((item) => (
                <StartMenuItem
                  key={item.id}
                  icon={item.Icon}
                  label={item.label}
                  onClick={() => openWindow(item.id as WinType)}
                  isBold
                />
              ))}
            </div>
          </div>
        )}

        {/* Watermark */}
        <div className="absolute bottom-14 right-4 text-white/10 select-none pointer-events-none text-right font-black tracking-tighter italic">
          <p className="text-2xl uppercase">H_ZHAO_OS</p>
          <p className="text-xs">EST. 1998 // v2026.04.11</p>
        </div>
      </main>

      {/* ── Taskbar ── */}
      <footer
        className="flex-none h-10 bg-[#c0c0c0] flex items-center p-1 gap-1 relative"
        style={{ borderTop: "2px solid #ffffff", zIndex: 99999 }}
      >
        {/* Start button */}
        <button
          className={`flex items-center gap-1.5 px-2 h-full font-bold text-sm select-none flex-shrink-0
            ${
              startMenuOpen
                ? "bg-[#d0d0d0] translate-x-px translate-y-px"
                : "bg-[#c0c0c0] shadow-[1px_1px_0px_0px_#000]"
            }`}
          style={
            startMenuOpen
              ? {
                  borderTop: "2px solid #808080",
                  borderLeft: "2px solid #808080",
                  borderRight: "2px solid #fff",
                  borderBottom: "2px solid #fff",
                }
              : {
                  borderTop: "2px solid #fff",
                  borderLeft: "2px solid #fff",
                  borderRight: "2px solid #808080",
                  borderBottom: "2px solid #808080",
                }
          }
          onClick={() => setStartMenuOpen((v) => !v)}
        >
          <Monitor size={15} />
          <span className="hidden sm:inline">Start</span>
        </button>

        <div className="w-px h-full bg-[#808080] border-r border-white mx-1" />

        {/* Window buttons */}
        <div className="flex-1 flex gap-1 h-full overflow-x-auto overflow-y-hidden min-w-0">
          {windows.map((win) => {
            const active = win.isFocused && !win.isMinimized;
            return (
              <button
                key={win.id}
                onClick={() =>
                  win.isMinimized ? toggleMinimize(win.id) : focusWindow(win.id)
                }
                className={`flex items-center gap-1.5 px-2 h-full text-[11px] font-bold truncate min-w-[80px] max-w-[140px] flex-shrink-0 select-none
                  ${active ? "translate-x-px translate-y-px" : "shadow-[1px_1px_0px_0px_#000]"}`}
                style={
                  active
                    ? {
                        borderTop: "2px solid #808080",
                        borderLeft: "2px solid #808080",
                        borderRight: "2px solid #fff",
                        borderBottom: "2px solid #fff",
                        background: "#d0d0d0",
                      }
                    : {
                        borderTop: "2px solid #fff",
                        borderLeft: "2px solid #fff",
                        borderRight: "2px solid #808080",
                        borderBottom: "2px solid #808080",
                        background: "#c0c0c0",
                      }
                }
              >
                <win.IconComponent size={12} className="flex-shrink-0" />
                <span className="truncate">{win.title}</span>
              </button>
            );
          })}
        </div>

        {/* System tray */}
        <div
          className="flex-shrink-0 h-full flex items-center px-2 gap-2 font-bold"
          style={{
            borderTop: "2px solid #808080",
            borderLeft: "2px solid #808080",
            borderRight: "2px solid #fff",
            borderBottom: "2px solid #fff",
            background: "#c0c0c0",
            boxShadow: "inset 1px 1px 0 #808080",
          }}
        >
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-70"
          >
            <Github size={12} />
          </a>
          <a
            href={siteConfig.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-70"
          >
            <Linkedin size={12} />
          </a>
          <div className="w-px h-3 bg-[#808080]" />
          <span className="text-[10px] tabular-nums uppercase hidden sm:block">
            {time.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>
      </footer>
    </div>
  );
}
