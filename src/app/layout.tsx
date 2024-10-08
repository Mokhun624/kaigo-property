// import type { Metadata } from 'next';
// import localFont from 'next/font/local';
import { Noto_Sans_JP } from 'next/font/google';
import 'destyle.css/destyle.min.css';
import './globals.scss';
import Header from './components/header';
import Footer from './components/footer';

const noto = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  style: 'normal',
  subsets: ['latin'],
});

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='ja'
      className={noto.className}
    >
      <body>
        <Header />
        {children}

        <Footer />
      </body>
    </html>
  );
}
