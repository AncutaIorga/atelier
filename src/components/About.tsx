export default function Hero() {
    return (
        <section
            id="salon"
            className="grid bg-[#F5F3EF] text-[#171717] md:grid-cols-2">
            {/* Imagen */}
            <picture className="h-[400px] md:h-[600px]">
                <source
                    media="(max-width:767px)"
                    srcSet="/images/mobile/img-about-mobile-2.jpg">
                </source>
                <img
                    src="/images/desktop/img-about.jpg"
                    alt="Interior y ambiente Atelier"
                    className="h-full w-full object-cover">
                </img>
            </picture>
            {/* Texto */}
            <div className="flex flex-col justify-center px-6 py-16 md:px-16 lg:px-24">
                <p className="mb-6 text-[11px] tracking-[0.2em] text-[#B49A72]">
                    EL UNIVERSO ATELIER
                </p>

                <h2
                    className="mb-6 text-4xl leading-tight md:text-5xl"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    Más que un salón. Una experiencia.
                </h2>

                <p className="max-w-md text-sm leading-7 text-[#85817B]">
                    En Atelier combinamos creatividad, técnica y atención personalizada para
                    ofrecer una experiencia única, cuidando cada detalle.
                </p>
            </div>
        </section>
    )
}