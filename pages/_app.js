import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {NavbarComponent} from "../components/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'next-auth/client'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@0ac23ca/css/all.css" rel="stylesheet" type="text/css" />
      </Head>
      <NavbarComponent/>
      <ToastContainer/>
      <body>
        <Component {...pageProps} />
      </body>
    </Provider>
  )
}

export default MyApp
