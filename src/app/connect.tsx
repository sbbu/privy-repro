"use client";

import { usePrivy } from "@privy-io/react-auth";

export function Connect() {
  const { ready, authenticated, login, logout } = usePrivy();

  if (!ready) {
    return <div>Loading...</div>;
  }

  if (authenticated) {
    return <div>Connected</div>;
  }

  return <button onClick={() => login()}>Connect</button>;
}
