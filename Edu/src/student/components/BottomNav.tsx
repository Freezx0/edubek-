import { Home, BookOpen, Sparkles, Video, User, type LucideIcon } from "lucide-react";
import { useLanguage } from "../../i18n/LanguageContext";
type TabId = "home" | "lessons" | "search" | "video" | "profile";
const TABS: { id: TabId; icon: LucideIcon; labelKey: "navHome" | "navLessons" | "navPlay" | "navVideo" | "navProfile" }[] = [
  { id: "home", icon: Home, labelKey: "navHome" },
  { id: "lessons", icon: BookOpen, labelKey: "navLessons" },
  { id: "search", icon: Sparkles, labelKey: "navPlay" },
  { id: "video", icon: Video, labelKey: "navVideo" },
  { id: "profile", icon: User, labelKey: "navProfile" },
];
export default function BottomNav({ currentTab, onTabChange }: { currentTab: TabId; onTabChange: (t: TabId) => void }) {
  const { t } = useLanguage();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-lg lg:max-w-2xl mx-auto isa-bottom-nav-wrap pointer-events-auto">
        <nav className="isa-bottom-nav bg-white rounded-[22px] border border-isa-border py-2 px-1 flex justify-between isa-shadow">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const active = currentTab === tab.id;
            return (
              <button key={tab.id} type="button" onClick={() => onTabChange(tab.id)} className={`isa-bottom-nav__btn flex flex-col items-center flex-1 py-1 ${active ? "isa-nav-item--active text-isa-navy font-bold" : "text-isa-muted"}`}>
                <Icon className="w-5 h-5" />
                <span className="text-[9px]">{t(tab.labelKey)}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}