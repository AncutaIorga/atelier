export default function Testimonials() {
  return (
    <section className="bg-[#171717] px-6 py-28 text-center text-[#F5F3EF] md:px-16">
      <div className="mx-auto max-w-[800px]">
        <p className="mb-4 text-[11px] tracking-[0.2em] text-[#B49A72]">
          EXPERIENCIAS ATELIER
        </p>

        <h2
          className="mb-8 text-4xl md:text-5xl"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          La belleza está en los detalles.
        </h2>

        <blockquote
          className="mb-8 text-2xl leading-relaxed md:text-3xl"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          «Por fin he encontrado un lugar que entiende exactamente lo que quiero.»
        </blockquote>

        <p className="text-[10px] tracking-[0.2em] text-[#B49A72]">
          — CLIENTE ATELIER
        </p>
      </div>
      
    </section>
  )
}
