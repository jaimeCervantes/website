import Logo from "../Logo/Logo";
import CtaFooter from "./CtaFooter";
import IconPhone from "./IconPhone";
import IconEmail from "./IconEmail";
import IconExtraLink from "./IconExtraLink";
import { items } from "~/data/navItems";
import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <BgBlurSvg className="md:-translate-x-1/2 left-[35%]" />

      <BgBlurSvg className="md:-translate-x-full left-0" />

      <CtaFooter />

      <section className="relative">
        <div
          className="absolute inset-0 bg-gray-900 -z-10"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-12 lg:grid-cols-10 gap-8 py-8 border-t border-blue-500">
            <div className="sm:col-span-12 lg:col-span-2 lg:max-w-xs max-lg:inline-flex max-lg:justify-center">
              <Link className="block group" to="/" aria-label="Cruip">
                <Logo color="white" className=" max-lg:w-[300px]" />
              </Link>
            </div>

            <div className="sm:col-span-12 md:col-span-6 lg:col-span-3">
              <h5 className="text-xs text-gray-100 font-bold uppercase mb-3">
                Enlaces
              </h5>
              <ul className="text-sm grid grid-cols-2 gap-4">
                {items.map((item) => (
                  <li key={item.label}>
                    <LinkFooter title={item.label} to={item.to} />
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
              <h5 className="text-xs text-gray-100 font-bold uppercase mb-3">
                Contacto
              </h5>
              <ul className="text-sm space-y-4 break-all">
                <li>
                  <LinkFooter
                    title="contacto@pensemosweb.com"
                    to="mailto:contacto@pensemosweb.com"
                    className="inline-flex gap-2 items-center"
                  >
                    <IconEmail />
                  </LinkFooter>
                </li>
                <li>
                  <LinkFooter
                    title="278 688 3881"
                    to="tel:2786883881"
                    className="inline-flex gap-2 items-center"
                  >
                    <IconPhone />
                  </LinkFooter>
                </li>
                <li>
                  <LinkFooter
                    title="Formulario"
                    to="/contacto"
                    className="inline-flex gap-2 items-center"
                  >
                    <IconExtraLink />
                  </LinkFooter>
                </li>
              </ul>
            </div>

            <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
              <h5 className="text-xs text-gray-100 font-bold uppercase mb-3">
                Recursos
              </h5>
              <ul className="text-sm space-y-4">
                <li>
                  <LinkFooter title="Terminos y condiciones" to="/" />
                </li>
                <li>
                  <LinkFooter title="Aviso de privacidad" to="/" />
                </li>
              </ul>
            </div>
          </div>

          <div className="md:flex md:items-center md:justify-between pb-4 md:pb-8">
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li className="ml-2">
                <Link
                  className="flex justify-center items-center text-blue-300 hover:text-white transition duration-150 ease-in-out"
                  to="https://www.facebook.com/pensemosweb"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-2">
                <Link
                  className="flex justify-center items-center text-blue-300 hover:text-white transition duration-150 ease-in-out"
                  to="https://www.instagram.com/pensemosweb/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-8 h-8 fill-current"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
            </ul>

            <div className="text-sm text-blue-300"></div>
          </div>
        </div>
      </section>
    </footer>
  );
}

function LinkFooter({ title, className, to, children }) {
  return (
    <Link
      className={`text-blue-300 hover:text-white transition duration-150 ease-in-out ${className}`}
      to={to}
    >
      {children}
      {title}
    </Link>
  );
}

function BgBlurSvg({ className }) {
  return (
    <div
      className={`absolute z-auto -top-16 -translate-x-1/3  pointer-events-none opacity-20 blur-3xl w-full ${className}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="2106" height="1327">
        <defs>
          <filter
            id="hi-a"
            width="133.3%"
            height="131.3%"
            x="-16.7%"
            y="-15.6%"
            filterUnits="objectBoundingBox"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="0"
            ></feGaussianBlur>
          </filter>
          <filter
            id="hi-b"
            width="133.3%"
            height="131.3%"
            x="-16.7%"
            y="-15.6%"
            filterUnits="objectBoundingBox"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="0"
            ></feGaussianBlur>
          </filter>
          <filter
            id="hi-c"
            width="159.9%"
            height="145%"
            x="-29.9%"
            y="-22.5%"
            filterUnits="objectBoundingBox"
          >
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="0"
            ></feGaussianBlur>
          </filter>
        </defs>
        <g fill="none" fillRule="evenodd">
          <path
            fill="#6D28D9"
            fillOpacity=".72"
            d="M1110.164 893.257C1191.124 1079.102 1484 839.962 1484 626.315S883.228 0 669.507 0s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z"
            filter="url(#hi-a)"
            transform="translate(0 -605)"
          ></path>
          <path
            // fill="#67E8F9"
            fill="blue"
            fillOpacity=".64"
            d="M1732.164 1753.257c80.96 185.845 373.836-53.295 373.836-266.942S1505.228 860 1291.507 860s40.54 412.668 40.54 626.315c0 213.647 319.156 81.096 400.117 266.942Z"
            filter="url(#hi-b)"
            transform="translate(0 -605)"
          ></path>
          <path
            fill="#F472B6"
            fillOpacity=".8"
            d="M1191.108 871C1338.988 871 1631 635.765 1631 487.507 1631 339.248 1625.874 205 1477.994 205s-267.76 120.187-267.76 268.445c0 148.259-167.006 397.555-19.126 397.555Z"
            filter="url(#hi-c)"
            transform="translate(0 -605)"
          ></path>
        </g>
      </svg>
    </div>
  );
}
