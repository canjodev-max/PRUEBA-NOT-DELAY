import { motion } from 'framer-motion'

export default function Manual(){
  return (
    <div className="manual-content min-h-screen bg-black text-white p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto space-y-8 pb-20">
        
        {/* Video Section */}
        <div className="bg-gradient-to-br from-verde/20 to-turquesa/20 rounded-3xl p-8 border border-verde/30">
          <h2 className="text-3xl font-bold text-center mb-4 text-verde">📹 Video Tutorial</h2>
          <div className="aspect-video bg-black/50 rounded-xl flex items-center justify-center">
            <p className="text-gray-400">Video próximamente</p>
          </div>
        </div>

        {/* ¿DE QUÉ TRATA? */}
        <section className="bg-gradient-to-br from-turquesa/20 to-violeta/20 rounded-3xl p-8 border border-turquesa/30">
          <h2 className="text-4xl font-bold mb-6 text-center text-turquesa">🧠 ¿DE QUÉ TRATA EL JUEGO?</h2>
          <div className="space-y-4 text-lg">
            <p>Es un juego donde todos al mismo tiempo escriben palabras. Cada carta te dice:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Una letra (por ejemplo: S)</li>
              <li>Tres cosas diferentes (categorías), por ejemplo:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Comida</li>
                  <li>Ciudad</li>
                  <li>Profesión</li>
                </ul>
              </li>
            </ul>
            <p className="mt-3">Vos tenés que escribir una palabra para cada cosa, y todas deben empezar con la letra de la carta.</p>
            <div className="bg-black/40 rounded-xl p-6 mt-4 border border-amarillo/40">
              <p className="font-semibold text-amarillo mb-2">Ejemplo con la letra S:</p>
              <ul className="space-y-1 ml-4">
                <li>Comida → <span className="text-verde">Sopa</span></li>
                <li>Ciudad → <span className="text-turquesa">Salta</span></li>
                <li>Profesión → <span className="text-violeta">Soldado</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* LO QUE TRAE LA CAJA */}
        <section className="bg-gradient-to-br from-violeta/20 to-rojo/20 rounded-3xl p-8 border border-violeta/30">
          <h2 className="text-4xl font-bold mb-6 text-center text-violeta">🧩 LO QUE TRAE LA CAJA</h2>
          <div className="space-y-3 text-lg">
            <p>• <span className="text-turquesa font-bold">65 cartas azules</span></p>
            <p>• <span className="text-naranja font-bold">24 cartas naranjas</span></p>
            <p>• Todas tienen una letra y 3 categorías</p>
          </div>
        </section>

        {/* PREPARACIÓN */}
        <section className="bg-gradient-to-br from-verde/20 to-turquesa/20 rounded-3xl p-8 border border-verde/30">
          <h2 className="text-4xl font-bold mb-6 text-center text-verde">🔧 PREPARACIÓN (paso por paso)</h2>
          <div className="space-y-4 text-lg">
            <p><span className="text-amarillo font-bold">1.</span> Necesitás mínimo 3 personas.</p>
            <p><span className="text-amarillo font-bold">2.</span> Mezclás todas las cartas juntas y las ponés boca abajo en la mesa.</p>
            <p><span className="text-amarillo font-bold">3.</span> Cada jugador necesita papel y lápiz.</p>
            <p><span className="text-amarillo font-bold">4.</span> Entrá a la página que aparece con el QR (la PWA).</p>
            <ul className="list-disc list-inside space-y-2 ml-8">
              <li>Un cronómetro de 40 segundos</li>
              <li>Un lugar para anotar los puntos</li>
            </ul>
            <p><span className="text-amarillo font-bold">5.</span> Elegí:</p>
            <ul className="list-disc list-inside space-y-2 ml-8">
              <li>Una persona que maneje el tiempo</li>
              <li>Una persona que anote los puntos</li>
            </ul>
          </div>
        </section>

        {/* CÓMO SE JUEGA */}
        <section className="bg-gradient-to-br from-naranja/20 to-rojo/20 rounded-3xl p-8 border border-naranja/30">
          <h2 className="text-4xl font-bold mb-6 text-center text-naranja">🎮 ¿CÓMO SE JUEGA?</h2>
          <div className="space-y-4 text-lg">
            <p><span className="text-amarillo font-bold">1.</span> Se da vuelta una carta.</p>
            <p><span className="text-amarillo font-bold">2.</span> Todos la ven al mismo tiempo.</p>
            <p><span className="text-amarillo font-bold">3.</span> La carta dice una letra y 3 categorías.</p>
            <p><span className="text-amarillo font-bold">4.</span> Tenés 40 segundos para escribir 3 palabras que empiecen con esa letra:</p>
            <ul className="list-disc list-inside space-y-2 ml-8">
              <li>Una palabra para la categoría 1</li>
              <li>Otra para la categoría 2</li>
              <li>Otra para la categoría 3</li>
            </ul>
            <p className="mt-6 text-center text-amarillo font-bold text-xl">⏱️ Todos escriben al mismo tiempo. No hay turnos.</p>
          </div>
        </section>

        {/* CARTAS AZULES */}
        <section className="bg-gradient-to-br from-violeta/20 to-turquesa/20 rounded-3xl p-8 border border-violeta/30">
          <h2 className="text-4xl font-bold mb-6 text-center text-violeta">🔵 CARTAS AZULES (modo "NO COPIES A NADIE")</h2>
          <div className="space-y-4 text-lg">
            <p>En las cartas azules vos querés ser distinto a los demás.</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Si tu palabra no la escribió nadie más, sumás puntos.</li>
              <li>Si tu palabra es igual a la de otro, perdés puntos.</li>
              <li>Si no escribís nada, perdés más puntos todavía.</li>
            </ul>
            <div className="bg-black/40 rounded-xl p-6 mt-4 border border-amarillo/40">
              <p className="font-semibold text-amarillo mb-3">Ejemplo: Letra P - Categoría: Animal</p>
              <ul className="space-y-2 ml-4">
                <li>Juan escribió "Perro"</li>
                <li>Ana escribió "Puma"</li>
                <li>Carlos escribió "Perro"</li>
              </ul>
              <p className="mt-4 text-verde font-bold">→ Ana gana, porque "Puma" nadie lo repitió.</p>
              <p className="text-rojo font-bold">→ Juan y Carlos pierden, porque "Perro" se repitió.</p>
            </div>
          </div>
        </section>

        {/* CARTAS NARANJAS */}
        <section className="bg-gradient-to-br from-naranja/20 to-amarillo/20 rounded-3xl p-8 border border-naranja/30">
          <h2 className="text-4xl font-bold mb-6 text-center text-naranja">🟠 CARTAS NARANJAS (modo "COPIA A OTROS")</h2>
          <div className="space-y-4 text-lg">
            <p>En las cartas naranjas querés pensar lo mismo que otra persona.</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Si alguien escribió la misma palabra que vos, sumás puntos.</li>
              <li>Si nadie escribió lo mismo que vos, perdés puntos.</li>
              <li>Si no escribís nada, perdés más puntos.</li>
            </ul>
            <div className="bg-black/40 rounded-xl p-6 mt-4 border border-amarillo/40">
              <p className="font-semibold text-amarillo mb-3">Ejemplo: Letra C - Categoría: Fruta</p>
              <ul className="space-y-2 ml-4">
                <li>Juan escribió "Ciruela"</li>
                <li>Ana escribió "Coco"</li>
                <li>Carlos escribió "Coco"</li>
              </ul>
              <p className="mt-4 text-verde font-bold">→ Ana y Carlos ganan (coincidieron).</p>
              <p className="text-rojo font-bold">→ Juan pierde (nadie escribió "Ciruela").</p>
            </div>
          </div>
        </section>

        {/* PUNTOS */}
        <section className="bg-gradient-to-br from-rojo/20 to-violeta/20 rounded-3xl p-8 border border-rojo/30">
          <h2 className="text-4xl font-bold mb-6 text-center text-rojo">📊 PUNTOS (muy fácil)</h2>
          <div className="space-y-6 text-lg">
            <p>Cada carta tiene 3 categorías, así que por cada una pasa esto:</p>
            
            <div className="bg-black/40 rounded-xl p-6 border border-violeta/40">
              <p className="font-bold text-violeta text-xl mb-3">En cartas AZULES:</p>
              <ul className="space-y-2 ml-4">
                <li className="text-verde">✔️ Si tu palabra NO coincide → <span className="font-bold">+1 punto</span></li>
                <li className="text-rojo">❌ Si tu palabra coincide con otro → <span className="font-bold">–1 punto</span></li>
                <li className="text-rojo font-bold">⛔ Si no escribís nada → <span className="font-bold">–2 puntos</span></li>
              </ul>
            </div>

            <div className="bg-black/40 rounded-xl p-6 border border-naranja/40">
              <p className="font-bold text-naranja text-xl mb-3">En cartas NARANJAS:</p>
              <ul className="space-y-2 ml-4">
                <li className="text-verde">✔️ Si tu palabra coincide con otro → <span className="font-bold">+1 punto</span></li>
                <li className="text-rojo">❌ Si nadie coincide con vos → <span className="font-bold">–1 punto</span></li>
                <li className="text-rojo font-bold">⛔ Si no escribís nada → <span className="font-bold">–2 puntos</span></li>
              </ul>
            </div>

            <div className="bg-black/40 rounded-xl p-6 border border-amarillo/40 text-center">
              <p className="font-semibold text-lg">👉 Por carta podés sumar hasta <span className="text-verde text-xl">+3 puntos</span></p>
              <p className="font-semibold text-lg mt-2">👉 O podés llegar a <span className="text-rojo text-xl">–6 puntos</span> si no escribís ninguna palabra</p>
            </div>
          </div>
        </section>

        {/* CÓMO SE GANA */}
        <section className="bg-gradient-to-br from-verde/20 to-amarillo/20 rounded-3xl p-8 border border-verde/30">
          <h2 className="text-4xl font-bold mb-6 text-center text-verde">🏆 ¿CÓMO SE GANA?</h2>
          <div className="text-center">
            <div className="bg-black/40 rounded-xl p-8 border border-amarillo/40">
              <p className="text-2xl font-bold text-amarillo">El primer jugador que llegue a <span className="text-verde text-3xl">+10 puntos</span><br/>es el ganador.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
