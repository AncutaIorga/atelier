
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
  <section id="contacto" className="relative grid grid-cols-1 md:grid-cols-2">
    <div className="absolute left-0 top-0 z-10 h-px w-full bg-[#85817B]/30 md:hidden" />

      {/* Información de contacto */}
      <div className="flex flex-col justify-center bg-[#171717] px-6 py-20 text-[#F5F3EF] md:px-16 lg:px-24">
        <p className="mb-3 text-[11px] tracking-[0.2em] text-[#B49A72]">
          HABLEMOS
        </p>

        <h2
          className="mb-5 text-4xl md:text-5xl"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Tu próxima experiencia empieza aquí.
        </h2>

        <div className="space-y-7 text-sm">
          <div>
            <p className="mb-4 text-[#B49A72]">DIRECCIÓN</p>
            <p>Calle Colón, Valencia</p>
          </div>

          <div>
            <p className="mb-4 text-[#B49A72]">HORARIO</p>
            <p>Martes – Sábado · 10:00 – 20:00</p>
          </div>

          <div>
            <p className="mb-4 text-[#B49A72]">TELÉFONO</p>
            <p>+34 600 000 000</p>
          </div>

          <div>
            <p className="mb-4 text-[#B49A72]">INSTAGRAM</p>
            <p>@atelier</p>
          </div>
        </div>
      </div>

      {/* Formulario */}
      <div className="bg-[#F5F3EF] px-6 py-20 text-[#171717] md:px-16 lg:px-24">
        <h3
          className="mb-10 text-3xl"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Solicita tu cita
        </h3>

        {sent ? (
          <div className="py-10">
            <h4
              className="mb-4 text-3xl"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              ¡Gracias por contactar con Atelier!
            </h4>

            <p className="mb-8 text-sm text-[#85817B]">
              Tu solicitud se ha registrado en esta demostración.
            </p>

            <button
              onClick={() => setSent(false)}
              className="bg-[#171717] px-8 py-4 text-[11px] tracking-wider text-[#F5F3EF]"
            >
              VOLVER AL FORMULARIO
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label className="mb-2 block text-xs">Nombre completo</label>
              <input
                type="text"
                required
                placeholder="Tu nombre"
                className="w-full border-b border-[#C8C5BF] bg-transparent py-3 text-sm outline-none focus:border-[#B49A72]"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs">Correo electrónico</label>
              <input
                type="email"
                required
                placeholder="tu@email.com"
                className="w-full border-b border-[#C8C5BF] bg-transparent py-3 text-sm outline-none focus:border-[#B49A72]"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs">Servicio deseado</label>
              <select
                required
                defaultValue=""
                className="w-full border-b border-[#C8C5BF] bg-transparent py-3 text-sm outline-none focus:border-[#B49A72]"
              >
                <option value="" disabled>Selecciona un servicio</option>
                <option>Corte y estilo</option>
                <option>Coloración</option>
                <option>Balayage y mechas</option>
                <option>Tratamientos</option>
                <option>Peinados</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs">Fecha preferida</label>
              <input
                type="date"
                required
                className="w-full border-b border-[#C8C5BF] bg-transparent py-3 text-sm outline-none focus:border-[#B49A72]"
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#171717] px-8 py-4 text-[11px] tracking-wider text-[#F5F3EF] transition-colors hover:bg-[#B49A72] hover:text-[#171717]"
            >
              ENVIAR SOLICITUD
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
