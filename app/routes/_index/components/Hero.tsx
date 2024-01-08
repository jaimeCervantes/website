export default function Hero({
  videoSrcs,
  img,
  preText,
  title,
  subtitle,
  timing = 1,
}: {
  videoSrcs?: { mp4: string; webm: string; ogv: string };
  img: { src: string; alt: string };
  preText: string;
  title: string;
  subtitle: string;
  timing?: number;
}) {
  return (
    <>
      <img
        src={img.src}
        alt={img.alt}
        className="absolute top-0 left-0 w-full h-[100vb] object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-[100vb] bg-black opacity-50"></div>
      <h1 className="absolute h-[100vb] text-white w-full max-xs:w-[100vi] xl:w-[100vi] flex justify-start sm:justify-center top-40 sm:top-0 items-start flex-col mx-auto">
        <span className="text-xl sm:text-3xl lg:text-4xl font-heading mb-0 sm:mb-1 lg:mb-4">
          <mark className="text-white bg-transparent p-2">{preText}</mark>
        </span>
        <span className="relative max-xs:w-full font-bold text-xl xs:text-2xl sm:text-3xl md:text-5xl mt-3 mb-4 lg:mb-5 tracking-tighter">
          <mark className="text-white z-0 bg-transparent uppercase p-2 relative xs:pr-8">
            <span className="absolute z-10 -left-12 inset-0 bg-gradient-pink bg-opacity-70 max-xs:w-[100vi] transform -skew-x-12 sm:-z-10 h-full scale-x-110 xs:scale-x-100">
              {" "}
            </span>
            <span className="relative z-20">{title}</span>
          </mark>
          <span className="tracking-normal px-2 absolute max-lg:left-0 max-lg:top-[110%] lg:-right-[20%] lg:-bottom-[85%] text-center max-[375px]:text-xl text-2xl lg:text-3xl lg:mt-[9px] font-heading">
            <mark className="text-white z-0 bg-transparent relative p-2 sm:px-4 top-4 sm:top-3 lg:top-0">
              <span className="opacity-0 z-20 h-full p-2">{subtitle}</span>
              <span className="absolute z-10 -left-8 sm:-left-12 inset-0 bg-black transform max-xs:w-[100vi] -skew-x-12 sm:-z-20 h-full">
                {" "}
              </span>
              <span className="absolute z-20 left-0 transform h-full">
                {subtitle}
              </span>
            </mark>
          </span>
        </span>
      </h1>
    </>
  );
}
