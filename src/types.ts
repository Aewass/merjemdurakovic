export type ColorScheme = "purple" | "rose" | "emerald";

export interface Project {
  number: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  color: ColorScheme;
  images: Array<{
    src: string;
    alt: string;
  }>;
}
