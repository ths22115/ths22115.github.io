import "./globals.css";

export const metadata = {
  title: "Mius Thomas",
  description: "A portfolio site developed by Mius Thomas",
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
