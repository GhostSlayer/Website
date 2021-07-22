import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavbarComponent} from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavbarComponent/>
      <body>
        <Component {...pageProps} />
      </body>
    </>
  )
}

export default MyApp
