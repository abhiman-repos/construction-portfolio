import type { Dictionary } from "@/lib/i18n/dictionaries";

export function translate(
  dict: Dictionary,
  key: string,
  params?: Record<string, string | number>,
) {
  const template = dict[key] ?? key;
  if (!params) return template;
  return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (_, name: string) => {
    const v = params[name];
    return v === undefined || v === null ? "" : String(v);
  });
}

