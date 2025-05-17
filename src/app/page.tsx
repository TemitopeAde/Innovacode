import Contact from "../../components/Contact";
import Portfolio from "../../components/Contact";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Testimonials from "../../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  )
}