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
        </section>
    );
}