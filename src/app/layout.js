import "./globals.css";
import Mark from "./components/mark";

export const metadata = {
  title: "Mius Thomas",
  description: "A portfolio site developed by Mius Thomas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Mark /> 
      </body>
    </html>
  );
}
