import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Download, CheckCircle, ArrowRight } from 'lucide-react';

export default function RoscadosWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('estandar');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* NAVBAR */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-red-700 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="font-bold text-lg hidden sm:block">Roscados & Partes</span>
          </div>
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li className="hover:text-red-700 transition cursor-pointer">Productos</li>
            <li className="hover:text-red-700 transition cursor-pointer">Servicios</li>
            <li className="hover:text-red-700 transition cursor-pointer">Casos Éxito</li>
            <li className="hover:text-red-700 transition cursor-pointer">Contacto</li>
          </ul>
          <button className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800 transition text-sm font-medium">
            Cotizar
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute w-96 h-96 bg-red-700 rounded-full blur-3xl -top-40 -left-40"></div>
          <div className="absolute w-96 h-96 bg-blue-700 rounded-full blur-3xl -bottom-40 -right-40"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-700 bg-opacity-20 border border-red-700 border-opacity-50 rounded-full px-4 py-2 mb-6">
                <span className="text-red-300 text-sm font-medium">30+ años de experiencia industrial</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Soluciones de Roscado <span className="text-red-500">Especializado</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Fabricación de roscados a medida, piezas especiales y componentes industriales críticos. Desde grandes empresas hasta proyectos unitarios.
              </p>
              <div className="flex gap-4 mb-8">
                <button onClick={() => setShowForm(true)} className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded font-bold flex items-center gap-2 transition transform hover:scale-105">
                  Solicitar Cotización <ArrowRight size={20} />
                </button>
                <button className="border-2 border-red-700 text-red-400 px-8 py-4 rounded font-bold hover:bg-red-700 hover:bg-opacity-10 transition">
                  Ver Catálogo
                </button>
              </div>
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>ISO 9001 Certificado</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-400" size={20} />
                  <span>Entrega Rápida</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl overflow-hidden border border-gray-700">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-24 h-24 mx-auto mb-4 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 3h12v2H6V3zm0 16h12v2H6v-2zm-2-4h16v2H4v-2zm2-4h12v2H6v-2z"/>
                  </svg>
                  <p className="text-gray-400">Galería de Máquinas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-red-500" size={32} />
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-white py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-red-700 mb-2">30+</div>
            <p className="text-gray-600">Años de Experiencia</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-700 mb-2">500+</div>
            <p className="text-gray-600">Clientes Satisfechos</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-700 mb-2">100%</div>
            <p className="text-gray-600">Calidad Garantizada</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-700 mb-2">24h</div>
            <p className="text-gray-600">Respuesta Garantizada</p>
          </div>
        </div>
      </section>

      {/* SERVICIOS/PRODUCTOS */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestras Especialidades</h2>
            <p className="text-xl text-gray-600">Soluciones adaptadas a tus necesidades específicas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Roscados a Medida",
                desc: "Especificaciones únicas según tus requerimientos técnicos",
                icon: "⚙️",
                items: ["Métricos", "Pulgadas", "Especiales", "Laminadas"]
              },
              {
                title: "Piezas Grandes",
                desc: "Anclas, espárragos y componentes de gran diámetro",
                icon: "🔩",
                items: ["Anclas M36+", "Espárragos", "Birlos", "Tuercas"]
              },
              {
                title: "Servicios de Roscado",
                desc: "Capacidad en máquina para tus piezas",
                icon: "🏭",
                items: ["Punzado", "Roscado en tubo", "Válvulas", "Custom"]
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-red-700 hover:shadow-xl transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-red-700" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATÁLOGO VISUAL */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Catálogo de Productos</h2>
            <div className="flex gap-4 justify-center mb-8">
              {['estandar', 'especiales', 'grandes'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded font-medium transition ${
                    activeTab === tab
                      ? 'bg-red-700 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab === 'estandar' ? 'Estándar' : tab === 'especiales' ? 'Especiales' : 'Piezas Grandes'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(item => (
              <div key={item} className="bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition">
                <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">🔧</div>
                    <p className="text-sm text-gray-600">Categoría {item}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold mb-2">Producto Destacado</h3>
                  <p className="text-sm text-gray-600 mb-4">Especificaciones técnicas</p>
                  <button className="text-red-700 font-medium text-sm hover:gap-2 flex items-center gap-1 transition">
                    Ver detalles <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-red-700 text-white px-8 py-3 rounded font-bold flex items-center gap-2 mx-auto hover:bg-red-800 transition">
              <Download size={20} /> Descargar Catálogo Completo (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* CASOS DE ÉXITO */}
      <section className="py-20 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Casos de Éxito</h2>
            <p className="text-xl text-gray-300">Proyectos complejos resueltos con expertise</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                empresa: "Constructora XYZ",
                proyecto: "Anclas Especiales para Infraestructura",
                reto: "Anclas M48 con tolerancias críticas",
                solucion: "Fabricación especializada en 10 días",
                resultado: "Entrega exitosa, cliente satisfecho"
              },
              {
                empresa: "Distribuidor Industrial ABC",
                proyecto: "Roscados Laminados a Medida",
                reto: "5,000 tornillos con especificaciones únicas",
                solucion: "Producción ágil sin set-up prolongado",
                resultado: "Entrega 15% adelantada"
              },
              {
                empresa: "Empresa de Manufactura",
                proyecto: "Espárragos Críticos",
                reto: "Piezas M36 con geometría especial",
                solucion: "Roscado personalizado + inspección",
                resultado: "100% conformidad ISO"
              }
            ].map((caso, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-red-700 transition">
                <div className="text-red-500 font-bold mb-2">CASO #{idx + 1}</div>
                <h3 className="text-xl font-bold mb-4">{caso.proyecto}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm">Empresa</p>
                    <p className="font-medium">{caso.empresa}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Reto</p>
                    <p className="font-medium">{caso.reto}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Solución</p>
                    <p className="font-medium">{caso.solucion}</p>
                  </div>
                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-green-400 font-bold">✓ {caso.resultado}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO COTIZACIÓN */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-8">
            <h3 className="text-2xl font-bold mb-6">Solicitar Cotización</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Nombre" className="border border-gray-300 rounded px-4 py-2 w-full" />
                <input type="email" placeholder="Email" className="border border-gray-300 rounded px-4 py-2 w-full" />
              </div>
              <input type="text" placeholder="Empresa" className="border border-gray-300 rounded px-4 py-2 w-full" />
              <input type="text" placeholder="Especificaciones requeridas" className="border border-gray-300 rounded px-4 py-2 w-full" />
              <textarea placeholder="Detalles del proyecto" rows="4" className="border border-gray-300 rounded px-4 py-2 w-full"></textarea>
              <div className="flex gap-4 pt-4">
                <button type="submit" className="flex-1 bg-red-700 text-white py-2 rounded font-bold hover:bg-red-800 transition">
                  Enviar Cotización
                </button>
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 border border-gray-300 py-2 rounded font-bold hover:bg-gray-50 transition">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CONTACTO */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <Phone className="w-12 h-12 text-red-700 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Teléfono</h3>
              <p className="text-gray-600">+52 81 8333 6602</p>
              <p className="text-sm text-gray-500 mt-2">Respuesta en 24h</p>
            </div>
            <div className="text-center">
              <Mail className="w-12 h-12 text-red-700 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-600">roscados@hotmail.com</p>
              <p className="text-sm text-gray-500 mt-2">Cotizaciones directas</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-red-700 mx-auto mb-4" />
              <h3 className="font-bold mb-2">Ubicación</h3>
              <p className="text-gray-600">Monterrey, N.L.</p>
              <p className="text-sm text-gray-500 mt-2">Centro industrial</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">© 2025 Roscados y Partes Industriales, SA de CV</p>
          <p className="text-gray-400 text-sm">30+ años especializados en soluciones de roscado industrial</p>
        </div>
      </footer>
    </div>
  );
}
