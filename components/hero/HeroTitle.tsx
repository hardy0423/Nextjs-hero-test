export default function HeroTitle() {
    return (
        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl" style={{ color: "var(--color-light)" }}>
            Votre <span style={{ color: "var(--color-primary)" }}>site</span> doit <span style={{ color: "var(--color-primary)" }}>donner envie</span> de <span style={{ color: "var(--color-primary)" }}>rester</span>, pas de{" "}
            <span className="line-through" style={{ textDecorationColor: "var(--color-dark)" }}>
                <span style={{ color: "var(--color-primary)" }}>revenir</span> <span style={{ color: "var(--color-light)" }}>en</span>{" "}
                <span style={{ color: "var(--color-primary)" }}>arrière</span>
            </span>
            <span className="inline-block w-2 h-2 bg-(--color-light) rounded-full"> </span>
        </h1>
    );
}
