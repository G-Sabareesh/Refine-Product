"use client";

import { Suspense } from "react";

import { Authenticated } from "@refinedev/core";
import { NavigateToResource } from "@refinedev/nextjs-router";
import { ThemedLayoutV2 } from "@refinedev/chakra-ui";

export default function IndexPage() {
  return (
    <Suspense>
      <Authenticated key="home-page">
        {/* <ThemedLayoutV2> */}
        <NavigateToResource />
        {/* </ThemedLayoutV2> */}
      </Authenticated>
    </Suspense>
  );
}
