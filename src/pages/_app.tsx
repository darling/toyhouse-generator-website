import { AppProps } from 'next/app';

import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../styles/site_bootstrap.css'
import '../styles/fa-all.min.css'
import './../styles/main.css'
// import './../styles/th-main.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
);

export default MyApp;
