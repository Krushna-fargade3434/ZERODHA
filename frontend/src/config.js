const trimTrailingSlash = (value) => value.replace(/\/+$/, "");

const configuredUrl = (name, fallback) =>
  trimTrailingSlash(process.env[name] || fallback);

export const API_URL = configuredUrl(
  "REACT_APP_API_URL",
  "https://zerodha-backend34.netlify.app/api"
);
export const DASHBOARD_URL = configuredUrl(
  "REACT_APP_DASHBOARD_URL",
  "https://zerodha-dasbhaord34.vercel.app"
);
export const FRONTEND_URL = configuredUrl(
  "REACT_APP_FRONTEND_URL",
  "https://zerodha-frontend34.netlify.app"
);
