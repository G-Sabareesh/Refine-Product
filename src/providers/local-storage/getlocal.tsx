"use client";

export const token = (): string | null => {
  return localStorage.getItem("TOKEN_KEY");
};
export const role = () => {
  return localStorage.getItem("role");
};
export const id = () => {
  return localStorage.getItem("id");
};
export const needsReload = () => {
  return localStorage.getItem("needsReload");
};