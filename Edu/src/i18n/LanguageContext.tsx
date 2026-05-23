import { createContext, useContext, useState, useCallback, useMemo, type ReactNode } from "react";
import { translations, type Lang } from "./translations";
const Ctx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof translations.ru) => string } | null>(null);
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem("isa_lang") === "en" ? "en" : "ru"));
  const setLangStore = useCallback((l: Lang) => { setLang(l); localStorage.setItem("isa_lang", l); }, []);
  const t = useCallback((k: keyof typeof translations.ru) => translations[lang][k], [lang]);
  const value = useMemo(() => ({ lang, setLang: setLangStore, t }), [lang, setLangStore, t]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
export function useLanguage() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useLanguage");
  return c;
}