import CardService from "./CardServices/CardService";
import { services } from "~/data/services.js";
import ContrataPaquete from "./components/ContrataPaquete";
import { json, type LoaderArgs } from "@remix-run/node";

import { metaFn } from "~/functions/shared/meta";
import TePodemosAyudar from "./components/TePodemosAyudar";
import HeroSection from "./components/HeroSection";
import { getPageBySlug } from "~/firebase/models/pages.server";

export const meta = metaFn;

export async function loader({ params }: LoaderArgs) {
  const seo = await getPageBySlug("servicios");

  return json({ seo });
}

export default function Servicios() {
  return (
    <>
      <HeroSection />
      <section className={`py-5 bg-white sm:py-5 lg:py-20 max-w-7xl mx-auto`}>
        <TePodemosAyudar />
        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-center lg:max-w-full lg:mt-16 lg:grid-cols-2">
          {services.map((service, index) => (
            <CardService
              key={index}
              title={service.name}
              description={service.description}
              list={service.benefices}
            />
          ))}
        </div>
      </section>
      <ContrataPaquete />
    </>
  );
}
