export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <p className="tag">Molino / tortillería</p>
        <h1>Molino de las Ánimas</h1>
        <p className="subtitle">Tu lugar de confianza en Xalapa. Pásale sin pena 😉</p>
        <div className="cta">
          <a className="btn" href="tel:2282413020">Llámanos</a>
        <a className="btn wa" href="https://wa.me/2282413020" target="_blank" rel="noreferrer">
          Escríbenos por WhatsApp
        </a>
        </div>
      </header>

      <section className="card">
        <h2>Contacto</h2>
        <ul>
          <li><strong>Teléfono:</strong> 228 241 3020</li>
          <li><strong>WhatsApp:</strong> 2282413020</li>
          <li><strong>Dirección:</strong> Plaza Europa, Local 2, Cañada las Ánimas, 91190 Xalapa-Enríquez, Ver.</li>
        </ul>
      </section>

      <section className="card">
        <h2>Horario</h2>
        <p>🕘 Lunes a Sábado: 8:00 am – 7:00 pm</p>
        <p>🕘 Domingo: 9:00 am – 2:00 pm</p>
        <p className="muted">(Horario sujeto a cambios, escríbenos para confirmar)</p>
      </section>

      <footer className="footer">
        <p>Hecho con cariño en Xalapa. ¡Te esperamos!</p>
      </footer>
    </main>
  );
}
