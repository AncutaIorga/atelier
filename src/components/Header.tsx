
import { useState } from 'react'

const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'El salón', href: '#salon' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="relative z-40 bg-[#171717]">
        <div className="flex h-[72px] items-center justify-between px-6 md:h-[90px] md:px-16 lg:px-24">
          
          {/* Logotipo */}
          <a
            href="#inicio"
            onClick={closeMenu}
            className="text-[28px] text-[#F5F3EF] md:text-[30px]"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            ATELIER
          </a>

          {/* Navegación de escritorio */}
          <nav className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] font-medium tracking-[0.08em] text-[#F5F3EF] transition-colors hover:text-[#B49A72]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Botón de reserva de escritorio */}
          <a
            href="#contacto"
            className="hidden bg-[#F5F3EF] px-6 py-4 text-[11px] font-medium tracking-wider text-[#171717] transition-colors hover:bg-[#B49A72] md:inline-block"
          >
            RESERVAR CITA
          </a>

          {/* Botón hamburguesa móvil */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            className="flex flex-col gap-[6px] md:hidden"
          >
            <span className="h-px w-[22px] bg-[#F5F3EF]" />
            <span className="h-px w-[22px] bg-[#F5F3EF]" />
            <span className="h-px w-[22px] bg-[#F5F3EF]" />
          </button>
        </div>
      </header>

      {/* Menú móvil a pantalla completa */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex h-[100dvh] flex-col overflow-y-auto bg-[#171717] px-6 md:hidden">          
          <div className="flex h-[72px] items-center justify-between">
            <span
              className="text-[28px] text-[#F5F3EF] md:text-[30px]"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              ATELIER
            </span>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Cerrar menú"
              className="flex items-center justify-center text-[28px] leading-none text-[#F5F3EF]"
            >
              ×
            </button>
          </div>

          <nav className="mt-20 flex flex-col gap-7">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="text-[32px] text-[#F5F3EF] transition-colors hover:text-[#B49A72]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacto"
            onClick={closeMenu}
            className="mt-12 flex h-12 min-h-12 shrink-0 items-center justify-center bg-[#B49A72] text-[11px] font-medium tracking-wider text-[#171717]"          >
            RESERVAR CITA
          </a>

          {/* Footer del menú móvil */}
          <div className="mt-auto shrink-0 border-t border-[#85817B]/30 pb-6 pt-6">
            <div>
              <a
                href="#inicio"
                onClick={closeMenu}
                className="text-3xl text-[#F5F3EF]"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                ATELIER
              </a>

              <p className="mt-2 text-[10px] tracking-[0.2em] text-[#B49A72]">
                HAIR STUDIO · VALENCIA
              </p>
            </div>

            <a
              href="https://www.instagram.com/ateliervalencia/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block text-[11px] tracking-wider text-[#C8C5BF] transition-colors hover:text-[#B49A72]"
            >
              @ateliervalencia
            </a>

            <p className="mt-4 text-[10px] tracking-wider text-[#85817B]">
              © 2026 ATELIER. TODOS LOS DERECHOS RESERVADOS.
            </p>
          </div>
        </div>
      )}
    </>
  )
}
