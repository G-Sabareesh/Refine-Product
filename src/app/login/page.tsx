// import { AuthPage } from "@components/auth-page";
import { AuthPage } from "@refinedev/chakra-ui";
import { authProviderServer } from "@providers/auth-provider";
import { redirect } from "next/navigation";
import { title } from "process";

export default async function Login() {
  const data = await getData();

  if (data.authenticated) {
    redirect(data?.redirectTo || "/");
  }

  return (
    <AuthPage
      type="login"
      forgotPasswordLink="false"
      registerLink="false"
      title=""
    />
  );
}

async function getData() {
  const { authenticated, redirectTo, error } = await authProviderServer.check();

  return {
    authenticated,
    redirectTo,
    error,
  };
}
