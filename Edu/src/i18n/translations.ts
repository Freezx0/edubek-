export type Lang = "ru" | "en";

export const translations = {
  ru: {
    navHome: "Главная",
    navLessons: "Уроки",
    navPlay: "Игра",
    navVideo: "Видео",
    navProfile: "Профиль",
    loadingCampus: "Загрузка кампуса…",
    schoolTitle: "International School",
    livenessTitle: "Демо проверки живости",
    livenessSubtitle: "Не Face ID — только моргание для демо",
    adminTokenRequired: "Токен администратора",
    adminTokenHint: "Введите ADMIN_TOKEN из .env (по умолчанию: campus-admin-dev)",
  },
  en: {
    navHome: "Home",
    navLessons: "Lessons",
    navPlay: "Play",
    navVideo: "Video",
    navProfile: "Profile",
    loadingCampus: "Loading campus…",
    schoolTitle: "International School",
    livenessTitle: "Liveness check demo",
    livenessSubtitle: "Not Face ID — blink detection demo only",
    adminTokenRequired: "Admin token",
    adminTokenHint: "Enter ADMIN_TOKEN from .env (default: campus-admin-dev)",
  },
} as const;
