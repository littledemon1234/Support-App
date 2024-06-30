import Image from "next/image";
import Navbar from "./Navbar";
import Bottom from "./Bottom";
import Features from "./Features";
import Premium from "./Premium";
import Instant from "./Instant";
import Quality from "./Quality";
import Pricing from "./Pricing";
import TestimonialCard from "./TestimonialCard";
import Footer from "./Footer";
export default function Home() {
  return (
    <div  >
      <Navbar />
      <Bottom />
      <Features />
      <Premium />
      <Instant />
      <Quality />
      <div className='flex flex-col gap-20'>
        <Pricing />
        <TestimonialCard />
        <Footer />
      </div>
    </div>
  );
}
