import "../styles/globals.css"; // 🔁 относительный путь

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
