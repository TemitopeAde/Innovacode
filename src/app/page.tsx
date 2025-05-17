import AboutUs from "../../components/AboutUs";
import Contact from "../../components/Contact";

import Hero from "../../components/Hero";
import Portfolio from "../../components/Portfolio";
import Services from "../../components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Portfolio />
      
      <Contact />
    </>
  )
}