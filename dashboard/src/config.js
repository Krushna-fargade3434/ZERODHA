const trimTrailingSlash = (value) => value.replace(/\/+$/, "");

const requiredUrl = (name) => {
  const value = import.meta.env[name];
  if (!value) {
    throw new Error(`${name} must be configured for this deployment`);
  }
  return trimTrailingSlash(value);
};

export const API_URL = requiredUrl("VITE_API_URL");
export const FRONTEND_URL = requiredUrl("VITE_FRONTEND_URL");
