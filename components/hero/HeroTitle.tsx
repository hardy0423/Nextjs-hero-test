export default function HeroTitle() {
    return (
        <h1 className="
            max-w-3xl
            mx-auto
            text-center
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-semibold
            tracking-tight
            text-(--color-light)
            leading-tight
            mb-8
        ">
            Votre <span className="text-(--color-primary)">site</span> doit{" "}
            <span className="text-(--color-primary)">donner envie</span> de{" "}
            <span className="text-(--color-primary)">rester</span>, pas de{" "}
            <span
                className="line-through decoration-(--color-dark) decoration-[5px] decoration-offset-8"
            >
                <span className="text-(--color-primary)">revenir</span>{" "}
                <span className="text-(--color-light)">en</span>{" "}
                <span className="text-(--color-primary)">arrière</span>
            </span>

            <span className="inline-block w-2 h-2 bg-(--color-light) rounded-full"></span>
        </h1>
    );
}
