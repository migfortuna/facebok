import React from "react";
import { signIn } from "next-auth/react";

type Props = {};

function Login({}: Props) {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => signIn("facebook", { redirect: false })}>
        Sign In
      </button>
    </div>
  );
}

export default Login;
