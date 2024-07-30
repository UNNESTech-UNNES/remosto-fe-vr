import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { NavigationTracker } from '@/components/navigation-tracker';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata = {
  title: 'Remosto',
  description: 'Generated by create next app'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>
      <NavigationTracker />
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
