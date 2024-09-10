"use client";

export const rmtoken = () => {
  return localStorage.removeItem("TOKEN_KEY");
};
export const rmrole = () => {
  return localStorage.removeItem("role");
};
export const rmid = () => {
  return localStorage.removeItem("id");
};
export const rmneedsReload = () => {
  return localStorage.removeItem("needsReload");
};
