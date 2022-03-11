import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
// import { form } from "./form";
function MyApp({ Component, pageProps }: AppProps) {
  const [first, setfirst] = useState(true);
  return (
    <>
      {/* <form /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
