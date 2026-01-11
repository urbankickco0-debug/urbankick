export default function Footer() {
  return (
    <footer className="bg-black border-t border-carbon-800 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold uppercase tracking-tighter mb-4">UrbanKick</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tu tienda de sneakers premium en Colombia. Autenticidad garantizada, envíos a todo el país.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Información</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📍 Pereira & Dosquebradas</li>
              <li>📦 Pago contra entrega</li>
              <li>🚚 Envíos nacionales</li>
              <li>✓ Productos 100% originales</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="https://wa.me/573216841147"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp: +57 321 684 1147
                </a>
              </li>
              <li>Horario: Lun - Sáb, 9AM - 7PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-carbon-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} UrbanKick. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
