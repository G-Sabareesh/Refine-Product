"use client";

import type { AuthProvider } from "@refinedev/core";
import axios from "axios";
import { GET_CURRENT_USER, LOGIN } from "../const";
import { setlocal } from "@providers/local-storage/setlocal";
import { id, needsReload, token } from "@providers/local-storage/getlocal";
import {
  rmid,
  rmneedsReload,
  rmrole,
  rmtoken,
} from "@providers/local-storage/removelocal";
import Cookies from "js-cookie";

export const TOKEN_KEY = "refine-auth";
export const authProvider: AuthProvider = {
  login: async ({ email, password }) => {
    try {
      const user_name = email.split("@")[0];
      const response = await axios.post(
        `${LOGIN}`,
        {
          user_name,
          password,
        },
        {
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      const { token, role, user_id, ...user } = response.data;
      if (token) {
        // localStorage.setItem(TOKEN_KEY, token);
        // localStorage.setItem("role", role);
        // localStorage.setItem("id", user_id);
        // cookies().set("auth", token);
        Cookies.set("auth", token);
        setlocal({ token, role, id: user_id, needsReload: "true" });
        return {
          success: true,
          redirectTo: "/",
        };
      }

      return {
        success: false,
        error: {
          name: "LoginError",
          message: "Invalid username or password",
        },
      };
    } catch (error) {
      console.log("error", error);
      return {
        success: false,
        error: {
          name: "LoginError",
          message: "Invalid username or password",
        },
      };
    }
  },
  logout: async () => {
    rmid();
    rmrole();
    rmtoken();
    Cookies.remove("auth");
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  check: async () => {
    if (token()) {
      console.log(token());
      if (needsReload() === "true") {
        rmneedsReload();
        window.location.reload();
      }
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      redirectTo: "/login",
    };
  },
  getPermissions: async () => null,
  getIdentity: async () => {
    try {
      const response = await axios.get(`${GET_CURRENT_USER}${id()}`, {
        headers: {
          Authorization: `Bearer ${token()}`,
          "ngrok-skip-browser-warning": "true",
        },
      });

      if (response?.data) {
        return {
          id: 1,
          name: `${response?.data?.data?.full_name}`,
          avatar: "https://i.pravatar.cc/300",
        };
      }
      return null;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        // Redirect to the login page if 401 Unauthorized
        window.location.href = "/login";
      }

      return null;
    }
  },
  onError: async (error) => {
    console.log(error);
    if (error.status == 401) {
      return {
        logout: true,
      };
    }
    return { error };
  },
};
