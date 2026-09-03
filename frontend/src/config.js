const trimTrailingSlash = (value) => value.replace(/\/+$/, "");

export const API_URL = trimTrailingSlash(
  process.env.REACT_APP_API_URL || "/api"
);

export const DASHBOARD_URL = trimTrailingSlash(
  process.env.REACT_APP_DASHBOARD_URL || window.location.origin
);

export const FRONTEND_URL = trimTrailingSlash(
  process.env.REACT_APP_FRONTEND_URL || window.location.origin
);
