// Category color configuration
export type CategoryId =
  | "branding-ac-mint"
  | "branding-shams-travel"
  | "branding-upscale"
  | "catalogs"
  | "visit-cards"
  | "books"
  | "print-media"
  | "social-media"
  | "3d-medieval-man"
  | "3d-facial-anatomy";

export interface CategoryColors {
  background: string;
  hover: string;
  text: string;
  badgeBg: string;
  badgeDot: string;
  fullscreen: string;
  navigation: string;
}

// Color mapping for each category
const categoryColorMap: Record<CategoryId, CategoryColors> = {
  "branding-ac-mint": {
    background: "from-pink-200/40 via-pink-100/30 to-transparent",
    hover: "hover:text-pink-600",
    text: "text-pink-600",
    badgeBg: "bg-pink-50/70",
    badgeDot: "bg-pink-500",
    fullscreen: "text-pink-600",
    navigation: "text-pink-600",
  },
  "branding-shams-travel": {
    background: "from-indigo-200/40 via-indigo-100/30 to-transparent",
    hover: "hover:text-indigo-600",
    text: "text-indigo-600",
    badgeBg: "bg-indigo-50/70",
    badgeDot: "bg-indigo-500",
    fullscreen: "text-indigo-600",
    navigation: "text-indigo-600",
  },
  "branding-upscale": {
    background: "from-purple-200/40 via-purple-100/30 to-transparent",
    hover: "hover:text-purple-600",
    text: "text-purple-600",
    badgeBg: "bg-purple-50/70",
    badgeDot: "bg-purple-500",
    fullscreen: "text-purple-600",
    navigation: "text-purple-600",
  },
  catalogs: {
    background: "from-orange-200/40 via-orange-100/30 to-transparent",
    hover: "hover:text-orange-600",
    text: "text-orange-600",
    badgeBg: "bg-orange-50/70",
    badgeDot: "bg-orange-500",
    fullscreen: "text-orange-600",
    navigation: "text-orange-600",
  },
  "visit-cards": {
    background: "from-rose-200/40 via-rose-100/30 to-transparent",
    hover: "hover:text-rose-600",
    text: "text-rose-600",
    badgeBg: "bg-rose-50/70",
    badgeDot: "bg-rose-500",
    fullscreen: "text-rose-600",
    navigation: "text-rose-600",
  },
  books: {
    background: "from-emerald-200/40 via-emerald-100/30 to-transparent",
    hover: "hover:text-emerald-600",
    text: "text-emerald-600",
    badgeBg: "bg-emerald-50/70",
    badgeDot: "bg-emerald-500",
    fullscreen: "text-emerald-600",
    navigation: "text-emerald-600",
  },
  "print-media": {
    background: "from-amber-200/40 via-amber-100/30 to-transparent",
    hover: "hover:text-amber-600",
    text: "text-amber-600",
    badgeBg: "bg-amber-50/70",
    badgeDot: "bg-amber-500",
    fullscreen: "text-amber-600",
    navigation: "text-amber-600",
  },
  "social-media": {
    background: "from-cyan-200/40 via-cyan-100/30 to-transparent",
    hover: "hover:text-cyan-600",
    text: "text-cyan-600",
    badgeBg: "bg-cyan-50/70",
    badgeDot: "bg-cyan-500",
    fullscreen: "text-cyan-600",
    navigation: "text-cyan-600",
  },
  "3d-medieval-man": {
    background: "from-cyan-200/40 via-cyan-100/30 to-transparent",
    hover: "hover:text-cyan-600",
    text: "text-cyan-600",
    badgeBg: "bg-cyan-50/70",
    badgeDot: "bg-cyan-500",
    fullscreen: "text-cyan-600",
    navigation: "text-cyan-600",
  },
  "3d-facial-anatomy": {
    background: "from-cyan-200/40 via-cyan-100/30 to-transparent",
    hover: "hover:text-cyan-600",
    text: "text-cyan-600",
    badgeBg: "bg-cyan-50/70",
    badgeDot: "bg-cyan-500",
    fullscreen: "text-cyan-600",
    navigation: "text-cyan-600",
  },
};

// Default colors for unknown categories
const defaultColors: CategoryColors = {
  background: "from-purple-200/40 via-purple-100/30 to-transparent",
  hover: "hover:text-purple-600",
  text: "text-purple-600",
  badgeBg: "bg-purple-50/70",
  badgeDot: "bg-purple-500",
  fullscreen: "text-purple-600",
  navigation: "text-purple-600",
};

// Utility functions
export function getCategoryColors(categoryId: string): CategoryColors {
  return categoryColorMap[categoryId as CategoryId] || defaultColors;
}

export function getBackgroundClass(categoryId: string): string {
  return getCategoryColors(categoryId).background;
}

export function getHoverClass(categoryId: string): string {
  return getCategoryColors(categoryId).hover;
}

export function getTextClass(categoryId: string): string {
  return getCategoryColors(categoryId).text;
}

export function getTitleClass(categoryId: string): string {
  return getCategoryColors(categoryId).text;
}

export function getBadgeBgClass(categoryId: string): string {
  return getCategoryColors(categoryId).badgeBg;
}

export function getBadgeDotClass(categoryId: string): string {
  return getCategoryColors(categoryId).badgeDot;
}

export function getFullscreenClass(categoryId: string): string {
  return getCategoryColors(categoryId).fullscreen;
}

export function getNavigationClass(categoryId: string): string {
  return getCategoryColors(categoryId).navigation;
}

// Check if category uses branding layout
export function isBrandingLayout(categoryId: string): boolean {
  return [
    "branding-ac-mint",
    "branding-shams-travel",
    "branding-upscale",
    "3d-medieval-man",
    "3d-facial-anatomy",
  ].includes(categoryId);
}

// Check if category uses social media layout
export function isSocialMediaLayout(categoryId: string): boolean {
  return categoryId === "social-media";
}
