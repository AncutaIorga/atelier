const services = [
    {
        number: '01',
        name: 'Corte y estilo',
        description: 'Cortes personalizados y asesoramiento',
    },    {
        number: '02',
        name: 'Tinte',
        description: 'Color, matices y transformación',
    },    {
        number: '03',
        name: 'Balayage y mechas',
        description: 'Dimensión, luz y naturalidad',
    },    {
        number: '04',
        name: 'Tratamientos',
        description: 'Cuidado y reparación capilar',
    },    {
        number: '05',
        name: 'Peinados',
        description: 'Acabados y estilismos especiales',
    },
]

export default function Services() {
    return (
        <section id="servicios" className="bg-[#171717] px-6 py-24 text-[#B49A72] md:px-16 lg:px-24">
            <div className="mx-auto max-w-[1100px]">
                <p className="mb-6 text-[11px] tracking-[0.2em] text-[#B49A72]]">
                    NUESTROS SERVICIOS
                </p>

                <h2
                    className="mb-16 text-4xl md:text-5xl"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                        Una atención a tu medida.
                </h2>

                <div>
                    {services.map((service) => (
                        <div
                            key={service.number}
                            className="grid gap-3 border-t border-[#85817B]/40 py-7 md:grid-cols-[80px_1fr_1fr] md:items-center">
                            
                            <span className="text-sm text-[#B49A72]">
                                {service.number}
                            </span>

                            <h3
                                className="text-2xl"
                                style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                                {service.name}
                            </h3>

                            <p className="text-sm leading-6 text-[#C8C5BF]">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}