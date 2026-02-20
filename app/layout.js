import './globals.css';

export const metadata = {
  title: 'Molino de las Ánimas',
  description: 'Sitio informativo de Molino de las Ánimas en Xalapa.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
