export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1";

export async function apiGet(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    cache: "no-store",
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`);
  }

  const payload = await response.json();
  return payload.data;
}

export async function getServices() {
  return apiGet("/services");
}

export async function getService(slug) {
  return apiGet(`/services/${slug}`);
}

export async function getBlogs() {
  return apiGet("/blogs");
}

export async function getBlog(slug) {
  return apiGet(`/blogs/${slug}`);
}
