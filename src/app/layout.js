import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
