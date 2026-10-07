"use client";

import { useState, type ReactNode } from "react";

type Folder = { label: string; content: ReactNode };

/** Two reels filed as folders: the tabs sit side by side, and pressing the other tab swaps which reel is open. */
/** `tag` is the colour of the badges on the cards inside an open folder: the opposite of the folder, so they stand out. Change the colours here. */
const colours = [
  { bg: "#f5da6e", ink: "#1d1a14", tag: "#8f82e8", tagInk: "#ffffff" }, // yellow folder, purple tags
  { bg: "#b7b3ee", ink: "#1d1a14", tag: "#f5da6e", tagInk: "#1d1a14" }, // lilac folder, yellow tags
];

export default function FolderTabs({ folders }: { folders: [Folder, Folder] }) {
  const [open, setOpen] = useState(0);
  const c = colours[open];
  return (
    <div className="mt-10 sm:mt-16">
      <div role="tablist" className="flex items-end gap-1.5 pl-6 pr-6 sm:pl-8 sm:pr-0">
        {folders.map((f, i) => {
          const active = i === open;
          return (
            <button
              key={f.label}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setOpen(i)}
              style={{
                background: colours[i].bg,
                color: colours[i].ink,
                transform: active ? "none" : "translateY(5px)",
              }}
              className={`relative rounded-t-2xl min-w-0 flex-1 px-3 pt-2.5 text-left font-display text-base uppercase sm:flex-none leading-tight tracking-wide transition-transform sm:px-6 sm:text-2xl ${
                active ? "z-10 pb-3 shadow-[0_-4px_10px_rgba(0,0,0,0.12)]" : "pb-2 opacity-90 hover:-translate-y-0.5"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>
      <div
        style={
          {
            background: c.bg,
            "--tag-bg": c.tag,
            "--tag-ink": c.tagInk,
          } as React.CSSProperties
        }
        className="relative z-0 -mt-px rounded-3xl p-5 shadow-2xl"
      >
        {folders.map((f, i) => (
          <div key={f.label} className={i === open ? "" : "hidden"}>
            {f.content}
          </div>
        ))}
      </div>
    </div>
  );
}
