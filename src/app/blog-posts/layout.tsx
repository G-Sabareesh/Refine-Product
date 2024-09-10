import { Layout as BaseLayout } from "@components/layout";
import { authProviderServer } from "@providers/auth-provider";
import { redirect } from "next/navigation";
import React from "react";
import { RefineThemes, ThemedLayoutV2, notificationProvider } from "@refinedev/chakra-ui";

export default async function Layout({ children }: React.PropsWithChildren) {
  const data = await getData();

  if (!data.authenticated) {
    return redirect(data?.redirectTo || "/login");
  }

  return <ThemedLayoutV2>{children}</ThemedLayoutV2>;
}

async function getData() {
  const { authenticated, redirectTo } = await authProviderServer.check();

  return {
    authenticated,
    redirectTo,
  };
}
