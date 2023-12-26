import NavLg from "./NavLg";
import NavMobile from "./NavMobile";
import type { PropsNav } from "./Nav.d";
import { useState, useEffect, useRef } from "react";
import Logo from "../Logo/Logo";
import { Link } from "@remix-run/react";

export default function Nav(props: PropsNav) {
  const [hasScrolledDown, setHasScrolledDown] = useState<boolean>(false);
  const navRef = useRef<HTMLElement>(null);
  const [isHidden, setIsHidden] = useState<boolean>(true);

  function handleMenuButton() {
    setIsHidden(!isHidden);
  }

  useEffect(() => {
    function listener() {
      const scrollPosition = window.scrollY;
      if (
        navRef &&
        navRef.current &&
        scrollPosition > navRef?.current?.offsetHeight
      ) {
        setHasScrolledDown(true);
      } else {
        setHasScrolledDown(false);
      }
    }
    window.addEventListener("scroll", listener);
    window.dispatchEvent(new Event("scroll")); // Run at loaded, for example when an user reload the page

    return () => window.removeEventListener("scroll", listener);
  }, []);

  const { isHome } = props;
  let textClasses = isHome
    ? "text-white dark:text-white"
    : "text-white dark:text-white";
  textClasses = hasScrolledDown ? "text-white dark:text-white" : textClasses;

  const anchorClasses = `relative group inline-block py-3 px-4 font-semibold ${textClasses} overflow-hidden transition duration-1000`;
  const highLightClasses = "bg-gradient-pink";
  const logoColor = hasScrolledDown ? "#fff" : "#fff";

  return (
    <>
      <NavLg
        {...props}
        handleMenuButton={handleMenuButton}
        hasLogo={true}
        logoColor={logoColor}
        anchorClasses={anchorClasses}
        highLightClasses={highLightClasses}
        hasScrolledDown={hasScrolledDown}
        borderClasses={props.borderClasses}
        ref={navRef}
      ></NavLg>
      <NavMobile
        {...props}
        handleMenuButton={handleMenuButton}
        isHidden={isHidden}
        logo={<Logo className="h-10 fill-white" color={"#fff"} />}
      >
        <div>
          <div className="flex w-20 h-20 mb-6 items-center justify-center bg-pink-500 rounded-full">
            <svg
              width={29}
              height={28}
              viewBox="0 0 29 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.3333 16.6667C24.9797 16.6667 24.6406 16.8072 24.3905 17.0572C24.1405 17.3073 24 17.6464 24 18V23.3334C24 23.687 23.8595 24.0261 23.6095 24.2762C23.3594 24.5262 23.0203 24.6667 22.6667 24.6667H4C3.64638 24.6667 3.30724 24.5262 3.05719 24.2762C2.80714 24.0261 2.66667 23.687 2.66667 23.3334V10.5467L10.5067 18.4C11.2567 19.1491 12.2733 19.5698 13.3333 19.5698C14.3933 19.5698 15.41 19.1491 16.16 18.4L18.3467 16.2134C18.5977 15.9623 18.7388 15.6218 18.7388 15.2667C18.7388 14.9116 18.5977 14.5711 18.3467 14.32C18.0956 14.069 17.7551 13.9279 17.4 13.9279C17.0449 13.9279 16.7044 14.069 16.4533 14.32L14.2667 16.5067C14.0174 16.751 13.6823 16.8878 13.3333 16.8878C12.9843 16.8878 12.6492 16.751 12.4 16.5067L4.54667 8.66669H13.3333C13.687 8.66669 14.0261 8.52622 14.2761 8.27617C14.5262 8.02612 14.6667 7.68698 14.6667 7.33336C14.6667 6.97974 14.5262 6.6406 14.2761 6.39055C14.0261 6.1405 13.687 6.00002 13.3333 6.00002H4C2.93913 6.00002 1.92172 6.42145 1.17157 7.1716C0.421427 7.92174 0 8.93916 0 10V23.3334C0 24.3942 0.421427 25.4116 1.17157 26.1618C1.92172 26.9119 2.93913 27.3334 4 27.3334H22.6667C23.7275 27.3334 24.7449 26.9119 25.4951 26.1618C26.2452 25.4116 26.6667 24.3942 26.6667 23.3334V18C26.6667 17.6464 26.5262 17.3073 26.2761 17.0572C26.0261 16.8072 25.687 16.6667 25.3333 16.6667ZM27.6133 5.05336L23.6133 1.05336C23.4865 0.93197 23.337 0.836817 23.1733 0.773358C22.8487 0.64 22.4846 0.64 22.16 0.773358C21.9963 0.836817 21.8468 0.93197 21.72 1.05336L17.72 5.05336C17.4689 5.30443 17.3279 5.64496 17.3279 6.00002C17.3279 6.35509 17.4689 6.69562 17.72 6.94669C17.9711 7.19776 18.3116 7.33881 18.6667 7.33881C19.0217 7.33881 19.3623 7.19776 19.6133 6.94669L21.3333 5.21336V12.6667C21.3333 13.0203 21.4738 13.3595 21.7239 13.6095C21.9739 13.8595 22.313 14 22.6667 14C23.0203 14 23.3594 13.8595 23.6095 13.6095C23.8595 13.3595 24 13.0203 24 12.6667V5.21336L25.72 6.94669C25.844 7.07166 25.9914 7.17086 26.1539 7.23855C26.3164 7.30624 26.4907 7.34109 26.6667 7.34109C26.8427 7.34109 27.017 7.30624 27.1794 7.23855C27.3419 7.17086 27.4894 7.07166 27.6133 6.94669C27.7383 6.82274 27.8375 6.67527 27.9052 6.51279C27.9729 6.35032 28.0077 6.17604 28.0077 6.00002C28.0077 5.82401 27.9729 5.64973 27.9052 5.48726C27.8375 5.32478 27.7383 5.17731 27.6133 5.05336Z"
                fill="black"
              />
            </svg>
          </div>
          <span className="block mb-3 text-sm text-white">Escribenos a</span>
          <Link className="font-semibold text-white break-all" to="/contacto">
            contacto@pensemosweb.com
          </Link>
        </div>
      </NavMobile>
      {props.children}
    </>
  );
}
