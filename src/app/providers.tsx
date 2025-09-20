"use client";

import { PrivyProvider } from "@privy-io/react-auth";
import "dotenv/config";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID!}
      clientId={process.env.NEXT_PUBLIC_PRIVY_CLIENT_ID!}
      config={{
        appearance: {
          theme: "dark",
        },
        loginMethodsAndOrder: {
          primary: ["metamask", "detected_ethereum_wallets"],
          overflow: ["okx_wallet", "wallet_connect", "coinbase_wallet"],
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}
