const images = [
    {
        desktopName: 'img-gallery-01.jpg',
        mobileName: 'img-gallery-01-mobile-2.jpg',
        alt: 'Trabajo de peluquería Atelier'
    },
    {
        desktopName: 'img-gallery-02.jpg',
        mobileName: 'img-gallery-02-mobile-2.jpg',
        alt: 'Detalle de un estilismo Atelier'
    },
    {
        desktopName: 'img-gallery-03.jpg',
        mobileName: 'img-gallery-03-mobile-2.jpg',
        alt: 'Resultado de coloración Atelier'
    }
]

export default function Gallery() {
    return(
        <section id="galeria" className="bg-[#F5F3EF] px-6 py-24 text-[#171717] md:px-16 lg:px-24">
            <div className="mx-auto max-w-[1100px]">
                <p className="mb-6 text-[11px] tracking-[0.2em]text-[#B49A72]">
                    NUESTRO TRABAJO
                </p>

                <h2
                className="mb-12 text-4xl md:text-5xl"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    El resultado habla por sí solo.
                </h2>

                <div className="grid gap-5 md:grid-cols-2">
                    {/*Imagen Principal*/}
                    <picture className="h-[450px] md:h-[600px]" >
                        <source
                            media="(max-width: 767px)"
                            srcSet="/images/mobile/img-gallery-01-mobile-2.jpg"
                    
                        />
                        <img
                            src="/images/desktop/img-gallery-01.jpg"
                            alt={images[0].alt}
                            className="h-full w-full object-cover"
                        />
                    </picture>
                    {/* Dos imágenes secundarias */}
                    <div className="grid gap-5 md:grid-rows-2">
                        {images.slice(1).map((image) => (
                            <picture key={image.desktopName} className="h-[300px] md:h-auto">
                                <source
                                    media="(max-width: 767px)"
                                    srcSet={`/images/mobile/${image.mobileName}`}
                                />
                                <img
                                    src={`/images/desktop/${image.desktopName}`}
                                    alt={image.alt}
                                    className="h-full w-full object-cover"
                                />
                            </picture>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}