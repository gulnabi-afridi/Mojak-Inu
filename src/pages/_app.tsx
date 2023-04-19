import "@/styles/globals.css";
import "../styles/font.css";
import type { AppProps } from "next/app";
import Layout from "@/layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
