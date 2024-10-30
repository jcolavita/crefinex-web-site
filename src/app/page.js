import Image from "next/image";
import Footer from "./components/footer/footer";
import NavBar from "./components/navBar/navBar";
import Header from "./components/header/header";
import AboutUs from "./components/aboutUs/aboutUs";

export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <AboutUs />
      <Footer />
    </>
  );
}
