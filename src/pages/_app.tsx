import { type AppType } from "next/dist/shared/lib/utils";
import "@/styles/globals.css";
import "@fontsource/poppins";
import "@fontsource/hauora-sans";
import "@fontsource/quicksand";
import "@fontsource/quicksand/700.css";
import "@fontsource/quicksand/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/600.css";
import { useEffect, type ReactElement, type ReactNode } from "react";
import { type NextPage } from "next";
import { type AppProps } from "next/app";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "@/utils/query";
import Aos from "aos";
import "aos/dist/aos.css";
export type NextPageWithLayout<P = any, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: AppType = ({ Component, pageProps }: AppPropsWithLayout) => {
  useEffect(() => {
    Aos.init();
  }, []);
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <QueryClientProvider client={queryClient}>
      {getLayout(<Component {...pageProps} />)}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default MyApp;
