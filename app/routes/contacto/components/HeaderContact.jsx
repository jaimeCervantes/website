import IconContact from "../components/IconContact";

import { iconsContact } from "../data/icons";
export default function HeaderContact() {
  return (
    <>
      <section>
        <div
          style={{
            bottom: 0,
            left: 0,
            width: "100%",
            padding: "20px", // Espaciado interno
            color: "black", // Texto en color blanco
            textAlign: "center",
          }}
        >
          <div className="relative inline-flex">
            <span className="absolute inset-x-0 bottom-0 border-b-[14px] border-pink-500"></span>
            <a href="#formulario">
              {" "}
              <h1 className="relative text-4xl font-bold text-whit sm:text-6xl lg:text-7xl ">
                ¡Contáctanos ahora!
              </h1>
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto mt-8">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 max-md:grid-cols-1 min-w-0 gap-6 px-8 text-center md:px-0">
          {iconsContact.map((icon) =>
            icon?.href ? (
              <a
                key={`Icono de ${icon.text}`}
                href={icon.href}
                target="_blank"
                rel="noreferrer"
                className="break-words break-all"
              >
                <IconContact srcImge={icon.icon} text={icon.text} />
              </a>
            ) : (
              <IconContact
                key={`Icono de ${icon.text}`}
                srcImge={icon.icon}
                text={icon.text}
              />
            ),
          )}
        </div>
      </div>
    </>
  );
}
