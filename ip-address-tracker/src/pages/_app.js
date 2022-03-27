import { ToastContainer } from "react-toastify";
import { GlobalStyle } from "../styles/Globalstyles";

import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
