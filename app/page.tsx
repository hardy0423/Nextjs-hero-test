import Image from "next/image";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-4 pt-8 pb-12 sm:px-6 sm:pt-12 sm:pb-16 md:pt-16 md:pb-24">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="mb-4 inline-block w-full sm:w-auto">
            <div className="relative flex items-center gap-3 rounded-full border border-[#1C1C1C]/20 bg-[#FFFFFF] px-4 py-3 shadow-[0_18px_48px_rgba(0,0,0,0.32),0_0_20px_rgba(113,221,174,0.4),0_0_40px_rgba(113,221,174,0.2)] overflow-hidden sm:gap-5 sm:px-8 sm:py-4 sm:overflow-visible md:px-10 md:py-5">
              <Image
                alt="Web Difference loupe"
                width={48}
                height={48}
                decoding="async"
                className="h-10 w-10 flex-shrink-0 sm:h-12 sm:w-12 md:h-14 md:w-14"
                style={{ color: "transparent" }}
                src=""
              />
              <p className="text-sm font-extrabold text-[#1C1C1C] overflow-hidden text-ellipsis whitespace-nowrap sm:text-lg sm:overflow-visible sm:whitespace-nowrap md:text-xl lg:text-2xl xl:text-3xl uppercase">
                Créer un site web <span className="underline decoration-3 underline-offset-4 decoration-[#1C1C1C]">vraiment</span> unique
              </p>
            </div>
          </div>

          <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Votre <span className="text-[#71DDAE]">site</span> doit <span className="text-[#71DDAE]">donner envie</span> de <span className="text-[#71DDAE]">rester</span>, pas de <span className="line-through decoration-[#1C1C1C]"><span className="text-[#71DDAE]">revenir</span> <span className="text-white">en</span> <span className="text-[#71DDAE]">arrière</span></span>.
          </h1>

          <p className="max-w-lg text-base font-medium text-white/80 sm:max-w-2xl sm:text-lg md:text-xl">
            Design moderne,<br className="sm:hidden" /> SEO solide, Suivi complet :<br /> on construit un site qui retient vos visiteurs et vous apporte des résultats.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            <div className="relative w-full sm:w-auto sm:inline-flex">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#71DDAE] to-[#2A9D7A] px-6 py-3 text-lg font-extrabold tracking-wide text-[#1C1C1C] shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 h-12 whitespace-nowrap sm:w-auto sm:px-8 sm:py-4 sm:text-xl md:px-8 md:py-4 md:text-2xl md:h-[68px]"
                href="https://calendly.com/webdifference/nouvelle-reunion?hide_gdpr_banner=1&background_color=282828&text_color=ffffff&primary_color=71ddae&month=2025-12"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-lg sm:text-xl md:text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
                </svg>
                Prendre RDV
              </a>
              <div className="absolute top-full -left-12 -mt-4 pointer-events-none hidden sm:block">
                <Image
                  alt="Un ptit click ?"
                  loading="lazy"
                  width={200}
                  height={150}
                  className="w-auto h-auto max-w-[200px]"
                  style={{ color: "transparent" }}
                  src=""
                />
              </div>
            </div>

            <a
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-[#71DDAE] bg-[#1C1C1C]/50 backdrop-blur px-6 py-3 text-base font-extrabold tracking-wide text-[#71DDAE] transition-all duration-200 hover:bg-[#1C1C1C]/70 h-12 sm:w-auto sm:px-8 sm:py-4 sm:text-lg md:h-[68px]"
              href="#portfolio"
            >
              Découvrir nos projets
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-xl" color="#71DDAE" style={{ color: "#71DDAE" }} height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:rgba(113,221,174,0.25)] blur-[120px] sm:h-[400px] sm:w-[400px] sm:blur-[160px] md:h-[520px] md:w-[520px] md:blur-[220px]"></div>
        <div className="absolute left-1/4 top-1/4 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:rgba(255,255,255,0.18)] blur-[100px] sm:h-[280px] sm:w-[280px] sm:blur-[140px] md:h-[360px] md:w-[360px] md:blur-[200px]"></div>
      </div>
    </section>
  );
}
