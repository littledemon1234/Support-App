import Image from "next/image";
import Header from "./Header";
import Bottom from "./Bottom";
import Features from "./Features";
import Premium from "./Premium";
import Instant from "./Instant";
import Quality from "./Quality";

export default function Home() {
  return (
   <div >
    <Header/>
    <Bottom />
    <Features/>
    <Premium/>
    <Instant/>
    <Quality/>
   </div>
  );
}
