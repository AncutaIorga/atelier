export default function Hero() {

    return (
        <section id="inicio" className="grid min-h-[650px] bg-[#171717] text-[#F5F3EF] md:grid-cols-2">

            {/* Texto principal */}
            <div className="flex flex-col justify-center px-6 py-16 md:px-16 lg:px-24">
                <p className="mb-6 text-[11px] tracking-[0.2em] text-[#B49A72]">
                     HAIR · BEAUTY · ART
                </p>

                <h1 className="mb-6 text-6x1 leading-tight md:text-6x1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    El arte de sentirte tú.
                </h1>

                <p className="mb-10 max-w-md text-sm leading-7 text-[#C8C5BF]">
                    Un espacio donde la técnica y la creatividad se encuentran para crear tu mejor versión.
                    En Atelier, cada detalle está pensado para que vivas una experiencia única y personalizada.
                </p>

                <a
                    href="#contacto"
                    className="w-fit bg-[#B49A72] px-8 py-4 text-[11px] font-medium tracking-wider text-[#171717] transition-colors hover:bg-[#F5F3EF]">
                    RESERVAR CITA
                </a>
            </div>

            {/* Imagen */}
            <picture className="h-[400px] md:h-full"> 
                <source
                    media="(max-width: 767px)"
                    srcSet="/images/mobile/img-hero-2-mobile.jpg">
                </source>
                <img
                    src="/images/desktop/img-hero-2.jpg"
                    alt="Estilismo de pelo en Atelier"
                    className="h-full w-full object-cover">
                </img>
            </picture>
        </section>
    )
}