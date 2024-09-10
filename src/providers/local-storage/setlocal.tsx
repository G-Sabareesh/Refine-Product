"use client";

interface LocalStore {
  token: string;
  role: string;
  id: string;
  needsReload: string;
}

export const setlocal = ({ token, role, id, needsReload }: LocalStore) => {
  localStorage.setItem("TOKEN_KEY", token);
  localStorage.setItem("role", role);
  localStorage.setItem("id", id);
  localStorage.setItem("needsReload", needsReload);

  return true;
};
