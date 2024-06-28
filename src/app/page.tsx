import Image from "next/image";
import Header from "./Header";
import Bottom from "./Bottom";
import Features from "./Features";
import Premium from "./Premium";
import Instant from "./Instant";
import Quality from "./Quality";
import Pricing from "./Pricing.jsx";
import TestimonialCard from "./TestimonialCard";
import Footer from "./Footer.jsx";
export default function Home() {
  return (
   <div >
    <Header/>
    <Bottom />
    <Features/>
    <Premium/>
    <Instant/>
    <Quality/>
    <div className='flex flex-col gap-32'>
        <Pricing />
        <div>
          <TestimonialCard />
        </div>
        <Footer />
      </div>
   </div>
  );
}
