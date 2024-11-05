import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footerSection";
import WhatsappStickyButton from "./components/whatsappStickyButton/whatsappStickyButton";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Crefinex",
  description:
    "Crefinex: La academia líder en educación financiera para niños y jóvenes. Aprende a ahorrar, invertir y gestionar el dinero de forma divertida y sencilla. ¡Tu futuro financiero empieza aquí!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-14 ">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <NavBar />
        {children}
        <Footer />
        <WhatsappStickyButton />
      </body>
    </html>
  );
}
