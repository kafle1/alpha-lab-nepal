import Hero from "../components/homepage/Hero.Home";
import Features from "../components/homepage/Features.Home";
import BecomeMentor from "../components/homepage/BecomeMentor.Home";
import FAQ from "../components/homepage/Faq.Home";
import Stats from "../components/homepage/Stats.Home";
import Testimonial from "../components/homepage/Testimonial.Home";
import Newsletter from "../components/homepage/Newsletter.Home";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features/>
      <Stats/>
      <Testimonial/>
      <FAQ/>
      <BecomeMentor/>
      <Newsletter/>
    </div>
  );
}
