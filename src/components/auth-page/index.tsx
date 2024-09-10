"use client";
import type { AuthPageProps } from "@refinedev/core";
import { AuthPage as AuthPageBase } from "@refinedev/chakra-ui";

export const AuthPage = (props: AuthPageProps) => {
  console.log(props);
  return (
    <AuthPageBase
      formProps={{
        defaultValues: {
          email: "",
          password: "",
        },
      }}
    />
  );
};
