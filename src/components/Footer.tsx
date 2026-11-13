export default function Footer() {
  return (
    <footer className="bg-[#171717] px-6 py-12 text-[#F5F3EF] md:px-16">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-8 text-center">

        <div>
          <a
            href="#inicio"
            className="text-4xl"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            ATELIER
          </a>

          <p className="mt-2 text-[10px] tracking-[0.2em] text-[#B49A72]">
            HAIR STUDIO · VALENCIA
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-[10px] tracking-wider">
          <a href="#inicio" className="hover:text-[#B49A72]">INICIO</a>
          <a href="#contacto" className="hover:text-[#B49A72]">CONTACTO</a>
          <a href="#contacto" className="hover:text-[#B49A72]">INSTAGRAM</a>
          <a href="#contacto" className="hover:text-[#B49A72]">PRIVACIDAD</a>
        </nav>

        <div className="h-px w-full bg-[#85817B]/30" />

        <p className="text-[10px] text-[#85817B]">
          © 2026 ATELIER. TODOS LOS DERECHOS RESERVADOS.
        </p>
      </div>
    </footer>
  )
}
