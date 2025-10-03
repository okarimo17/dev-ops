const BASE_URL = import.meta.env.VITE_BACKEND_URL || "/api";

export async function sendRequest(endpoint, options = {}) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });

  if (!res.ok) {
    let message = "Request failed";
    try {
      const errData = await res.json();
      message = errData.message || message;
    } catch {
      /* ignore */
    }
    throw new Error(message);
  }

  // If response has body (not 204), parse JSON
  if (res.status !== 204) {
    return res.json();
  }
  return null;
}
