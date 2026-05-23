const STORAGE_KEY = "isa_admin_token";
export function getAdminToken(): string {
  if (typeof sessionStorage === "undefined") return "";
  return sessionStorage.getItem(STORAGE_KEY) || "";
}
export function setAdminToken(token: string) {
  sessionStorage.setItem(STORAGE_KEY, token.trim());
}
export async function fetchAdmin(url: string, init: RequestInit = {}) {
  const token = getAdminToken();
  const headers: Record<string, string> = {
    ...(init.headers as Record<string, string> | undefined),
    ...(token ? { "X-Admin-Token": token } : {}),
  };
  return fetch(url, { ...init, headers });
}