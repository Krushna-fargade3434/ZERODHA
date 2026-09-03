const trimTrailingSlash = (value) => value.replace(/\/+$/, "");

const configuredUrl = (name, fallback) =>
  trimTrailingSlash(import.meta.env[name] || fallback);

export const API_URL = configuredUrl(
  "VITE_API_URL",
  "https://zerodha-backend34.netlify.app/api"
);
export const FRONTEND_URL = configuredUrl(
  "VITE_FRONTEND_URL",
  "https://zerodha-frontend34.netlify.app"
);
