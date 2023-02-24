import { Open_Sans } from '@next/font/google';

import '@/styles/globals.css';
import '@/styles/nav-bar.css';
import '@/styles/items-table.css';
import '@/styles/main-page.css';
import '@/styles/action-button.css';

const openSans = Open_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${openSans.style.fontFamily};
        }
      `}</style>

      <Component {...pageProps} />
    </>
  );
}
