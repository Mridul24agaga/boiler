import Header  from "../app/sections/Header";
import  Hero   from "../app/sections/Hero";
import TwitterCard from "./sections/Twitter";
import { LogoTicker } from "./sections/LogoTicker";
import  Feature   from "./sections/Feature"
import Feature1 from "./sections/Feature1"
import PricingPage from "./sections/Pricing";
import Time from "./sections/time"
import Faq from "./sections/Faq"
import Footer from "./sections/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker/>
      <TwitterCard/>
      <Feature/>
      <Feature1/>
      <PricingPage/>
      <Time />
      <Faq/>
      <Footer />
    </>
  );
}
