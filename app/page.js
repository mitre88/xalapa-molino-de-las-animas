export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <span className="badge">Molino & tortillería</span>
        <h1>Molino de las Ánimas</h1>
        <p className="subtitle">
          Molienda de nixtamal y tortillas frescas en la zona de Las Ánimas.
        </p>
        <p className="hero-notes">
          Trae tu maíz o compra masa lista para tus recetas favoritas.
        </p>
        <div className="cta">
          <a className="btn" href="tel:2282413020">Llámanos</a>
          <a
            className="btn wa"
            href="https://wa.me/2282413020"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
          <a className="btn ghost" href="#ubicacion">Ver ubicación</a>
        </div>
        <div className="highlights grid grid-3">
          <div className="highlight">
            <strong>Molienda al momento</strong>
            <span>Textura fina para antojitos y tortillas.</span>
          </div>
          <div className="highlight">
            <strong>Masa lista</strong>
            <span>Ideal para tamales, sopes y tlacoyos.</span>
          </div>
          <div className="highlight">
            <strong>Plaza Europa</strong>
            <span>Ubicación cómoda para compras rápidas.</span>
          </div>
        </div>
      </header>

      <section className="section" id="servicios">
        <h2>Servicios</h2>
        <div className="grid grid-3">
          <div className="panel">
            <h3>Molienda de nixtamal</h3>
            <p>Trae tu maíz y llévate masa fresca.</p>
          </div>
          <div className="panel">
            <h3>Venta de masa</h3>
            <p>Lista para cocinar en casa o negocio.</p>
          </div>
          <div className="panel">
            <h3>Tortillas de maíz</h3>
            <p>Recién hechas para la comida diaria.</p>
          </div>
        </div>
      </section>

      <section className="section" id="beneficios">
        <h2>Beneficios</h2>
        <div className="grid grid-3">
          <div className="panel">
            <h3>Textura consistente</h3>
            <p>Masa con molienda uniforme y suave.</p>
          </div>
          <div className="panel">
            <h3>Procesos higiénicos</h3>
            <p>Trabajo limpio y cuidado del producto.</p>
          </div>
          <div className="panel">
            <h3>Atención cercana</h3>
            <p>Servicio amable y rápido en mostrador.</p>
          </div>
        </div>
      </section>

      <section className="section" id="testimonios">
        <h2>Testimonios</h2>
        <div className="grid grid-2">
          <blockquote className="quote">
            “La masa queda perfecta para mis gorditas.”
            <span>— Graciela, clienta</span>
          </blockquote>
          <blockquote className="quote">
            “Me encanta poder moler y llevar tortilla en el mismo lugar.”
            <span>— Raúl, vecino</span>
          </blockquote>
        </div>
      </section>

      <section className="section" id="horarios">
        <h2>Horario</h2>
        <div className="panel">
          <p>🕘 Lunes a Sábado: 8:00 am – 7:00 pm</p>
          <p>🕘 Domingo: 9:00 am – 2:00 pm</p>
          <p className="muted">(Horario sujeto a cambios, confírmalo antes de ir)</p>
        </div>
      </section>

      <section className="section" id="ubicacion">
        <h2>Ubicación y contacto</h2>
        <div className="location-card grid grid-2">
          <div>
            <p>
              📍 Plaza Europa, Local 2, Cañada las Ánimas, 91190 Xalapa-Enríquez,
              Ver.
            </p>
            <ul>
              <li><strong>Teléfono:</strong> 228 241 3020</li>
              <li><strong>WhatsApp:</strong> 2282413020</li>
            </ul>
          </div>
          <div>
            <p>
              Estamos dentro de Plaza Europa, ideal para hacer tu compra rápida
              en Las Ánimas.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="cta-banner">
          <div>
            <h3>Prepara tu masa con tiempo</h3>
            <p>Escríbenos para pedidos grandes o dudas de molienda.</p>
          </div>
          <div className="cta">
            <a className="btn" href="tel:2282413020">Llamar</a>
            <a
              className="btn wa"
              href="https://wa.me/2282413020"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Hecho con cariño en Xalapa. ¡Te esperamos!</p>
      </footer>
    </main>
  );
}
