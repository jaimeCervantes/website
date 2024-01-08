import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Nosotros from "./components/Nosotros";
import Blogs from "./components/Blogs";
import Contacto from "./components/Contacto";
import Principios from "./components/Principios";
import { items, secondaryItems } from "~/data/navItems";
import Nav from "~/components/Navs/Nav";
import { useEffect, useRef, useState } from "react";

import { json, type LinksFunction, type LoaderArgs } from "@remix-run/node";

import videoPoster from "./imgs/background-video-inicio.webp";
import stylesBlogCard from "./styles.css";

import { metaFn } from "~/functions/shared/meta";
import { getPosts } from "~/firebase/models/posts.server";
import { useLoaderData } from "@remix-run/react";
import { mapPostsToCards } from "../blog._index/mappers/mapPostsToCards";
import { getSeo } from "~/firebase/models/seo.server";

export const meta = metaFn;
const imageBanner = {
  src: videoPoster,
  alt: "Fondo electrónico con componetes y luces de colores tonalidades rosa y azul",
};

export async function loader({ params }: LoaderArgs) {
  const seo = await getSeo("inicio");
  const lastedPosts = (await getPosts(1, 5)).posts;

  const showPosts = mapPostsToCards(lastedPosts);

  return json({ showPosts, seo });
}

export const links: LinksFunction = () => {
  return [
    { rel: "preload", href: videoPoster, as: "image", type: "image/webp" },
    { rel: "stylesheet", href: stylesBlogCard, content: "text/css" },
  ];
};

export default function Index() {
  const { showPosts } = useLoaderData();

  const targetRef = useRef<HTMLElement>(null);
  const [borderClasses, setBorderClasses] = useState<string>("");

  useEffect(() => {
    const callback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          setBorderClasses("border border-x-0 border-t-0 border-pink-500");
        } else {
          setBorderClasses("");
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    const observe = new IntersectionObserver(callback, options);
    observe.observe(targetRef.current!);

    return () => observe.disconnect();
  }, []);

  return (
    <>
      <Nav
        items={items}
        secondaryItems={secondaryItems}
        isHome={true}
        borderClasses={borderClasses}
      />
      <section className="relative pb-20 overflow-hidden min-h-screen bg-black px-4">
        <Hero
          preText="¿Visibilidad en línea deficiente?"
          title="¡Desbloquea el Éxito Digital!"
          subtitle="Desarrollo web/app ágil"
          img={imageBanner}
          timing={1}
        />
      </section>

      <article ref={targetRef} className="overflow-hidden">
        <Servicios />
        <Principios hasParticles={true} />
        <Nosotros />
        <Blogs posts={showPosts} />
        <Contacto />
      </article>
    </>
  );
}
