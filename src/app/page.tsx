import End from "@/components/sections/end/end";
import Hero from "@/components/sections/hero/hero";
import Navbar from "@/components/sections/navbar/navbar";
import Operation from "@/components/sections/operation/operation";
import Prices from "@/components/sections/prices/prices";


export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Operation />
    <Prices />
    <End />
    </>
  );
}
