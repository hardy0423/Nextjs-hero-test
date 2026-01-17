import Image from "next/image";

export default function HeroBadge() {
    return (
        <div className="mb-4 inline-block w-full sm:w-auto">
            <div
                className="relative flex
                      shadow-[0_18px_48px_var(--color-shadow-dark),0_0_20px_var(--color-shadow-primary),0_0_40px_var(--color-shadow-primary-light)]
      transition-transform duration-500 hover:scale-105

                items-center gap-3 rounded-full border px-4 py-3 overflow-hidden sm:gap-5 sm:px-8 sm:py-4 sm:overflow-visible md:px-10 md:py-5"
                style={{
                    borderColor: "rgba(var(--color-dark-rgb), 0.2)",
                    backgroundColor: "var(--color-light)",
                    boxShadow:
                        "0 18px 48px rgba(0,0,0,0.32), 0 0 20px rgba(113,221,174,0.4), 0 0 40px rgba(113,221,174,0.2)",
                }}
            >
                <Image
                    alt="Web Difference loupe"
                    width={48}
                    height={48}
                    decoding="async"
                    className="h-10 w-10 shrink-0 sm:h-12 sm:w-12 md:h-14 md:w-14"
                    style={{ color: "transparent" }}
                    src="/assets/Logo_Bulle.png"
                />
                <p className="text-sm font-extrabold text-(--color-dark) overflow-hidden text-ellipsis whitespace-nowrap sm:text-lg sm:overflow-visible sm:whitespace-nowrap md:text-xl lg:text-2xl xl:text-3xl uppercase">
                    Créer un site web{" "}
                    <span className="underline decoration-3 underline-offset-4 decoration-(--color-dark)">
                        vraiment
                    </span>{" "}
                    unique
                </p>
            </div>
        </div>
    );
}