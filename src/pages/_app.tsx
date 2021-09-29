import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { store } from "../context/store";
import { GlobalStyle } from "../styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
