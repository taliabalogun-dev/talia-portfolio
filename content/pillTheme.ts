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
    roleBg: "#E8DDF6",
    roleText: "#3B2159",
    resultBg: "#F6F0FC",
    resultText: "#3B2159",
  },
  red: {
    roleBg: "#F6DFDA",
    roleText: "#5C1F14",
    resultBg: "#FCF0ED",
    resultText: "#5C1F14",
  },
  pink: {
    roleBg: "#F9DEEC",
    roleText: "#5A1638",
    resultBg: "#FDF0F7",
    resultText: "#5A1638",
  },
  blue: {
    roleBg: "#DAEAF9",
    roleText: "#123B5E",
    resultBg: "#EEF6FD",
    resultText: "#123B5E",
  },
  gold: {
    roleBg: "#F8ECC6",
    roleText: "#4A3405",
    resultBg: "#FCF6E5",
    resultText: "#4A3405",
  },
  maroon: {
    roleBg: "#F1DBDE",
    roleText: "#4A1620",
    resultBg: "#FAEDEE",
    resultText: "#4A1620",
  },
  orange: {
    roleBg: "#F9E2CE",
    roleText: "#4A2708",
    resultBg: "#FDF1E7",
    resultText: "#4A2708",
  },
  amber: {
    roleBg: "#F6ECC6",
    roleText: "#453000",
    resultBg: "#FBF6E5",
    resultText: "#453000",
  },
  terracotta: {
    roleBg: "#F1D5C6",
    roleText: "#4A2412",
    resultBg: "#FAECE1",
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
