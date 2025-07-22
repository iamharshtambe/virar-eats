import { useState } from "react";

export function useStatus() {
  const [status, setStatus] = useState(true);

  window.addEventListener("online", () => setStatus(true));

  window.addEventListener("offline", () => setStatus(false));

  return status;
}
