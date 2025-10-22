  import { Hono } from "hono";

// Menggunakan fetch bawaan (tanpa axios)
const API_BASE_URL = process.env.API_BASE_URL || "https://api-remote.example.com";

export const httpClient = {
  async get(url: string, options?: RequestInit) {
    const res = await fetch(API_BASE_URL + url, { method: "GET", ...options });
    if (!res.ok) throw new Error(`GET ${url} failed`);
    return await res.json();
  },

  async post(url: string, body?: any, options?: RequestInit) {
    const res = await fetch(API_BASE_URL + url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      ...options,
    });
    if (!res.ok) throw new Error(`POST ${url} failed`);
    return await res.json();
  },

  async put(url: string, body?: any, options?: RequestInit) {
    const res = await fetch(API_BASE_URL + url, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      ...options,
    });
    if (!res.ok) throw new Error(`PUT ${url} failed`);
    return await res.json();
  },

  async patch(url: string, body?: any, options?: RequestInit) {
    const res = await fetch(API_BASE_URL + url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      ...options,
    });
    if (!res.ok) throw new Error(`PATCH ${url} failed`);
    return await res.json();
  },

  async delete(url: string, options?: RequestInit) {
    const res = await fetch(API_BASE_URL + url, { method: "DELETE", ...options });
    if (!res.ok) throw new Error(`DELETE ${url} failed`);
    return await res.json();
  },
};
