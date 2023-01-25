import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useSession, SessionProvider } from "next-auth/react";

import Login from "./login";
import { UserSession } from "@/types/session";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Auth>
        <Component {...pageProps} />
      </Auth>
    </SessionProvider>
  );
}

function Auth({ children }: any) {
  const { data }: UserSession = useSession({
    required: true,
    onUnauthenticated() {},
  });
  if (!data) return <Login />;
  return children;
}
