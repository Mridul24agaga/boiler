import Header  from "../app/sections/Header";
import  Hero   from "../app/sections/Hero";
import TwitterCard from "./sections/Twitter";
import { LogoTicker } from "./sections/LogoTicker";
import   Feature  from "./sections/Feature"
import Feature1 from "./sections/Feature1"
import PricingPage from "./sections/Pricing";
import Time from "./sections/time"
import Faq from "./sections/Faq"
import Footer from "./sections/Footer"
import Feature2 from "./sections/Features2"

export default function Home() {
  return (
    <>
      <Hero />
      <LogoTicker/>
      <Feature2/>
      <Feature/>
      <PricingPage/>
      <Time />
      <Faq/>
      <Footer />
    </>
  );
}
