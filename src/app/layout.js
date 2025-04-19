import "./globals.css";
import Script from 'next/script';

export const metadata = {
  title: "MIUS THOMAS",
  description: "A portfolio site designed and developed by Mius Thomas.",
  icons: {
    icon: '/miusMarkWhite.svg', // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Script src="https://unpkg.com/react-scan/dist/auto.global.js" /> */}
        {children}
      </body>
    </html>
  );
}
