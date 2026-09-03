const trimTrailingSlash = (value) => value.replace(/\/+$/, "");

const requiredUrl = (name) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} must be configured for this deployment`);
  }
  return trimTrailingSlash(value);
};

export const API_URL = requiredUrl("REACT_APP_API_URL");
export const DASHBOARD_URL = requiredUrl("REACT_APP_DASHBOARD_URL");
export const FRONTEND_URL = requiredUrl("REACT_APP_FRONTEND_URL");
