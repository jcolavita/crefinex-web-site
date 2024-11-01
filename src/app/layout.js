import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/navBar/navBar";
import Footer from "./components/footer/footer";
import { FaWhatsapp } from "react-icons/fa";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <NavBar />
        {children}
        <Footer />
        <div
          className={`fixed md:bottom-14 md:right-10 bottom-10 right-5 shadow-lg shadow-slate-700 transition-all ease-in-out 
          cursor-pointer md:hover:scale-105  m-auto bg-green-400 z-50 w-[50px] h-[50px] rounded-full 
          flex justify-center items-center`}
        >
          <FaWhatsapp className="w-10 h-10" fill={`#ffffff`} />
        </div>
      </body>
    </html>
  );
}
