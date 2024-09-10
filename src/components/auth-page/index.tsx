"use client";
import type { AuthPageProps } from "@refinedev/core";
import { AuthPage as AuthPageBase } from "@refinedev/core";
import { AuthPage as ChakraAuthPage } from "@refinedev/chakra-ui";

export const AuthPage = (props: AuthPageProps) => {
  return (
    <ChakraAuthPage type="login" registerLink={false} forgotPasswordLink={false} title=""  />
     
    // <AuthPa
    // <AuthPageBase
    //   {...props}
    //   renderContent={(content) => (
    //     <div>
    //       <p
    //         style={{
    //           padding: 10,
    //           color: "#004085",
    //           backgroundColor: "#cce5ff",
    //           borderColor: "#b8daff",
    //           textAlign: "center",
    //         }}
    //       >
    //         email: demo@refine.dev
    //         <br /> password: demodemo
    //       </p>
    //       {content}
    //     </div>
    //   )}
    // />
  );
};
