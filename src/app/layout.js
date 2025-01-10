import "./globals.css";
import "./globals.js";

export const metadata = {
  title: "Mius Thomas",
  description: "A portfolio site developed by Mius Thomas",
  icons: {
    icon: '/miusMarkWhite.svg', // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
