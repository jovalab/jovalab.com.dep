import "@/assets/styles/css/globals.css";
import "antd/dist/reset.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import "remixicon/fonts/remixicon.css";
import { Poppins } from "@next/font/google";

const FontApp = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>JovaLab: Futrue technology factory</title>
        <link rel="icon" type="image/x-icon" href="jovalab.png" />
        <meta
          name="description"
          content="we provide a quality and renewable system"
        />
      </Head>
      <main className={FontApp.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
