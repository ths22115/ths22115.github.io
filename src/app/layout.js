import "./globals.css";
import "./globals.js";

export const metadata = {
  title: "Mius Thomas",
  description: "A portfolio site developed by Mius Thomas",
};

export default function RootLayout({ children }) {
  // opacitySpikeTimer();
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
