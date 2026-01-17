import Image from "next/image";

export default function HeroBadge() {
    return (
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
    )
}

