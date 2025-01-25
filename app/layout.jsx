import { Poppins, Caveat } from 'next/font/google';
import './globals.css';
import EventProvider from '@/contexts/EventContext';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});
const caveat = Caveat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-caveat',
});

export default function RootLayout({ children }) {
  return (
    <EventProvider>
      <html lang='en'>
        <body className={`${poppins.variable} ${caveat.variable} antialiased`}>
          {children}
        </body>
      </html>
    </EventProvider>
  );
}
