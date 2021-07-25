import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import {NavbarComponent} from "../components/Navbar";
import {FooterComponent} from "../components/Footer";

import { ToastContainer, toast } from 'react-toastify';
import { Provider } from 'next-auth/client'
import Head from "next/head";

function SlayerWeb({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <title>GhostSlayer</title>
        <link href="https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@0ac23ca/css/all.css" rel="stylesheet" type="text/css" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GZC02L6MN6"/>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GZC02L6MN6', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>

      <NavbarComponent/>
      <ToastContainer/>

      <body>
        <div className="container small">
          <Component {...pageProps}/>
        </div>

        <FooterComponent/>
      </body>
    </Provider>
  )
}

export default SlayerWeb
