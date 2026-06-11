import "./globals.css";
import Script from 'next/script';
import RouteTransition from './components/route-trans';
import GlobalMark from "./components/global-mark";
import { StaticEffectsProvider } from "./contexts/static-effects-context";
import { MobileProvider } from "./contexts/mobile-context";
import { PortProvider } from "./contexts/port-context";
import { ExpProvider } from "./contexts/exp-context";

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
        <MobileProvider>
          <StaticEffectsProvider>
            <PortProvider>
              <ExpProvider>
                <RouteTransition>
                  {children}
                </RouteTransition>
                <GlobalMark />
              </ExpProvider>
            </PortProvider>
          </StaticEffectsProvider>
        </MobileProvider>
      </body>
    </html>
  );
}
