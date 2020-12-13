import { Provider } from 'next-auth/client';
import "../styles/tailwind.css";
import "../styles/app.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp
