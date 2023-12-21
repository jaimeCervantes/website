import AOS from "aos";
import aosStyles from "aos/dist/aos.css";
import { useEffect } from "react";

import { metaFn } from "~/functions/shared/meta";
import { loaderSeoFn } from "~/functions/shared/loaderSeo";
import HeroEquipo from "../components/equipo/HeroEquipo";
import MetodoAgil from "../components/equipo/MetodoAgil";
import CardsEquipo from "../components/equipo/CardsEquipo";
export const meta = metaFn;
export const loader = loaderSeoFn("equipo");

export function links() {
  return [{ rel: "stylesheet", href: aosStyles, content: "text/css" }];
}
export default function Equipo() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      easing: "ease-out-sine",
    });
  });
  return (
    <div>
      <HeroEquipo/>
      <div className="m-20" data-aos="fade-up" data-aos-delay="400">
        <h1 className="text-center text-5xl tracking-tight mt-10 mb-10 mx-4 md:text-7xl font-bold">
          <span className="font-heading">Nuestro </span>
          <span className="font-serif italic">Método ágil</span>
        </h1>
      </div>
      <MetodoAgil/>
      <CardsEquipo/>
    </div>
  );
}
