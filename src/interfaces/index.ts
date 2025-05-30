export type deviceOptions = "xs" | "sm" | "md" | "lg";
export type shadowOptions = "small" | "regular" | "large" | "badge" | "border" | "none";
export type colorOptions = "primary" | "secondary" | "warn" | "error" | "inherit" | "#7D879C" | "dark" | "grey" | "#007AFF" | "#FFFFFF";

interface NavItem {
  icon: string;
  href: string;
  title: string;
}

export type NavWithChild = {
  href: string;
  title: string;
  child?: Omit<NavItem, "icon">[];
};

export type Meta = {
  page: number;
  total: number;
  pageSize: number;
  totalPage: number;
};

export interface SearchParams {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export interface IDParams {
  params: Promise<{ id: string }>;
}

export interface SlugParams {
  params: Promise<{ slug: string }>;
}
