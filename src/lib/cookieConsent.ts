const STORAGE_KEY = "dab-cookie-consent";

export type CookieConsent = "accepted" | "rejected";

export function getStoredConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(STORAGE_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
}

export function storeConsent(value: CookieConsent) {
  window.localStorage.setItem(STORAGE_KEY, value);
}
