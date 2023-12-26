import { Link } from "@remix-run/react";
import PostDate from "~/components/Blog/post-date";

interface TypeBlog {
  image: { src: string; alt: string };
  fecha: string;
  titulo: string;
  anchor: string;
  className: string;
  isMain: boolean;
}

export default function Blog({
  image,
  fecha,
  titulo,
  anchor,
  className,
  isMain,
}: TypeBlog) {
  return (
    <Link
      to={anchor}
      className={`relative flex items-center flex-wrap ${
        isMain
          ? "flex-col h-auto"
          : "flex-row max-md:flex-col max-md:h-auto h-full"
      } ${className} group border-b-2 border-pink-600 rounded-lg overflow-hidden`}
    >
      {isMain ? (
        <div className="absolute z-10 sm:top-5 top-0 left-0 bg-pink-500 py-2 px-6 w-4/5 group-hover:-translate-x-4 transition-transform duration-300 pr-20 clip-path-poligon">
          <p className="xss:text-2xl text-right text-base font-bold italic">
            <span>Ultimo post</span>
          </p>
        </div>
      ) : null}
      <div
        className={`${
          isMain
            ? "max-h-[300px] 2xl:max-h-[500px]"
            : "w-2/5 max-md:w-full h-full"
        } overflow-hidden`}
      >
        <img
          decoding="async"
          loading="lazy"
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
          src={image.src}
          alt={image.alt}
        />
      </div>
      <div
        className={`${
          isMain
            ? "pt-2 pb-1"
            : "w-3/5 max-md:w-full max-md:pt-3 max-md:pl-0 pl-3 h-full"
        } flex items-center group-hover:scale-95 transition-transform duration-300`}
      >
        <div className="max-w-2xl">
          <span className="block text-gray-400 mb-1">
            <PostDate dateString={fecha} />
          </span>
          <p
            className={`${
              isMain ? "text-2xl" : "text-xl"
            } font-bold text-gray-900`}
          >
            {titulo}
          </p>
        </div>
      </div>
    </Link>
  );
}
