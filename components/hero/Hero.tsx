import HeroActions from "./HeroActions";
import HeroBadge from "./HeroBadge";
import HeroDescription from "./HeroDescription";
import HeroTitle from "./HeroTitle";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-14 px-4 pt-8 pb-12 sm:px-6 sm:pt-12 sm:pb-16 md:pt-16 md:pb-24">
                <div className="flex flex-col items-center gap-6 text-center">

                    <HeroBadge />
                    <HeroTitle />
                    <HeroDescription />

                    <HeroActions />

                </div>
            </div>

            <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(113,221,174,0.25)] blur-[120px] w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] sm:blur-[160px] md:w-[520px] md:h-[520px] md:blur-[220px]"></div>
                <div className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(255,255,255,0.18)] blur-[100px] w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] sm:blur-[140px] md:w-[360px] md:h-[360px] md:blur-[200px]"></div>
            </div>
        </section>
    );
}