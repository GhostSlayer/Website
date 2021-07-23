import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavbarComponent} from "../components/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <NavbarComponent/>
      <ToastContainer/>
      <body>
        <Component {...pageProps} />
      </body>
    </Provider>
  )
}

export default MyApp
