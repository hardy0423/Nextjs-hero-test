import Image from "next/image";
import { FaArrowDown, FaCalendarAlt } from "react-icons/fa";


export default function HeroActions() {
    return (
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            {/* Bouton Prendre RDV */}
            <div className="relative w-full sm:w-auto sm:inline-flex group">
                {/* Bouton Prendre RDV */}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-3 rounded-xl px-6 py-3 text-lg font-extrabold tracking-wide shadow-lg transition-transform duration-200 hover:scale-105 active:scale-95 h-12 whitespace-nowrap sm:w-auto sm:px-8 sm:py-4 sm:text-xl md:px-8 md:py-4 md:text-2xl md:h-[68px]"
                    style={{
                        background: "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                        color: "var(--color-dark)",
                    }}
                    href="https://calendly.com/webdifference/nouvelle-reunion?hide_gdpr_banner=1&background_color=282828&text_color=ffffff&primary_color=71ddae&month=2025-12"
                >
                    <FaCalendarAlt className="text-lg sm:text-xl md:text-2xl transition-transform duration-300 group-hover:rotate-12" />
                    Prendre RDV
                </a>

                {/* Image décorative : visible uniquement au hover */}
                <div className="absolute top-full -left-12 -mt-4 pointer-events-none opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-2 sm:block">
                    <Image
                        alt="Un ptit click ?"
                        loading="lazy"
                        width={200}
                        height={150}
                        className="w-auto h-auto max-w-50"
                        style={{ color: "transparent" }}
                        src="/assets/Click.png"
                    />
                </div>
            </div>

            {/* Bouton Découvrir nos projets */}
            <a
                className="inline-flex w-full group items-center justify-center gap-3 rounded-xl border px-6 py-3 font-extrabold tracking-wide transition-all duration-200 h-12 sm:w-auto sm:px-8 sm:py-4 sm:text-lg md:h-[68px]"
                style={{
                    borderColor: "var(--color-primary)",
                    backgroundColor: "rgba(28, 28, 28, 0.5)", // var(--color-dark) + opacité
                    color: "var(--color-primary)",
                    backdropFilter: "blur(10px)",
                }}
                href="#portfolio"
            >
                Découvrir nos projets
                <FaArrowDown
                    className="text-xl group-hover:translate-y-1 transition-transform"
                    strokeWidth={2.5}
                />
            </a>
        </div>
    );
}
