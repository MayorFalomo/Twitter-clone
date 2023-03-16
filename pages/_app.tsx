import GlobalStyle from "@/GlobalStyle.styled";
import Layout from "@/components/layout/Layout";
import { AppContext } from "@/helpers/helpers";
import type { AppProps } from "next/app";

//*THIS IS THE PARENT COMPONENT OF EVERYTHING

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContext.Provider value={{}}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}
