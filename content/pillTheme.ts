/** Per-project pastel pill theme. "role" = darker shade (My Role, Focus, Deliverables,
 * partner lists, role tags in lightboxes). "result" = paler shade (Results, KPI pills). */
export type PillTheme = {
  roleBg: string;
  roleText: string;
  resultBg: string;
  resultText: string;
};

const themes = {
  purple: {
    roleBg: "#D9C6F0",
    roleText: "#3B2159",
    resultBg: "#EFE4F9",
    resultText: "#3B2159",
  },
  red: {
    roleBg: "#F0C9C2",
    roleText: "#5C1F14",
    resultBg: "#FAE3DE",
    resultText: "#5C1F14",
  },
  pink: {
    roleBg: "#F5C8E0",
    roleText: "#5A1638",
    resultBg: "#FBE4F0",
    resultText: "#5A1638",
  },
  blue: {
    roleBg: "#C2DCF5",
    roleText: "#123B5E",
    resultBg: "#E1EFFB",
    resultText: "#123B5E",
  },
  gold: {
    roleBg: "#F3DFA0",
    roleText: "#4A3405",
    resultBg: "#F9EFCF",
    resultText: "#4A3405",
  },
  maroon: {
    roleBg: "#E8C3C8",
    roleText: "#4A1620",
    resultBg: "#F5DEE1",
    resultText: "#4A1620",
  },
  orange: {
    roleBg: "#F5CFAE",
    roleText: "#4A2708",
    resultBg: "#FBE6D3",
    resultText: "#4A2708",
  },
  amber: {
    roleBg: "#F0E0A0",
    roleText: "#453000",
    resultBg: "#F8EFCF",
    resultText: "#453000",
  },
  terracotta: {
    roleBg: "#E8B9A0",
    roleText: "#4A2412",
    resultBg: "#F5DCC9",
    resultText: "#4A2412",
  },
} satisfies Record<string, PillTheme>;

const projectTheme: Record<string, keyof typeof themes> = {
  "live-nation-mutha": "purple",
  "kugali-iwaju": "red",
  "refine-la-zine": "pink",
  "fast-ucla-fashion-show": "blue",
  "ucla-campus-campaigns": "gold",
  "bap-productions": "maroon",
  "golden-effects-pictures": "orange",
  "ctrl-4c-campaign": "amber",
  "co-curate": "terracotta",
};

const fallback: PillTheme = themes.gold;

export function getPillTheme(slug: string): PillTheme {
  const name = projectTheme[slug];
  return name ? themes[name] : fallback;
}
