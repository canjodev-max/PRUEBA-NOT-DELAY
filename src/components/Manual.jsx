import { motion } from 'framer-motion'

export default function Manual(){
  return (
    <div className="manual-content w-full max-w-4xl mx-auto px-4 sm:px-6 py-4">
      <div className="glass-effect rounded-2xl p-6 sm:p-8">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 text-center">
          Manual del Juego
        </h3>
        
        {/* Espacio para video de YouTube */}
        <div className="bg-white/5 border border-white/20 rounded-xl aspect-video mb-6 flex items-center justify-center">
          <p className="text-gray-400 text-sm sm:text-base">Video de YouTube próximamente</p>
        </div>

        {/* Contenido del manual */}
        <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-6 max-h-[60vh] overflow-y-auto pr-2">
          <section>
            <h4 className="text-xl sm:text-2xl font-bold text-turquesa mb-3">🧠 ¿DE QUÉ TRATA EL JUEGO?</h4>
            <p className="mb-3">Es un juego donde todos al mismo tiempo escriben palabras. Cada carta te dice:</p>
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
            <div className="bg-white/5 rounded-lg p-4 mt-3">
              <p className="font-semibold text-amarillo mb-2">Ejemplo con la letra S:</p>
              <ul className="space-y-1 ml-4">
                <li>Comida → Sopa</li>
                <li>Ciudad → Salta</li>
                <li>Profesión → Soldado</li>
              </ul>
            </div>
          </section>

          <section>
            <h4 className="text-xl sm:text-2xl font-bold text-turquesa mb-3">🧩 LO QUE TRAE LA CAJA</h4>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>65 cartas azules</li>
              <li>24 cartas naranjas</li>
              <li>Todas tienen una letra y 3 categorías</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl sm:text-2xl font-bold text-turquesa mb-3">🔧 PREPARACIÓN (paso por paso)</h4>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Necesitás mínimo 3 personas.</li>
              <li>Mezclás todas las cartas juntas y las ponés boca abajo en la mesa.</li>
              <li>Cada jugador necesita papel y lápiz.</li>
              <li>Entrá a la página que aparece con el QR (la PWA).
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Un cronómetro de 40 segundos</li>
                  <li>Un lugar para anotar los puntos</li>
                </ul>
              </li>
              <li>Elegí:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Una persona que maneje el tiempo.</li>
                  <li>Una persona que anote los puntos.</li>
                </ul>
              </li>
            </ol>
          </section>

          <section>
            <h4 className="text-xl sm:text-2xl font-bold text-turquesa mb-3">🎮 ¿CÓMO SE JUEGA?</h4>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Se da vuelta una carta.</li>
              <li>Todos la ven al mismo tiempo.</li>
              <li>La carta dice una letra y 3 categorías.</li>
              <li>Tenés 40 segundos para escribir 3 palabras que empiecen con esa letra:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Una palabra para la categoría 1</li>
                  <li>Otra para la categoría 2</li>
                  <li>Otra para la categoría 3</li>
                </ul>
              </li>
            </ol>
            <p className="mt-3 font-semibold text-amarillo">⏱️ Todos escriben al mismo tiempo. No hay turnos.</p>
          </section>

          <section>
            <h4 className="text-xl sm:text-2xl font-bold text-violeta mb-3">🔵 CARTAS AZULES (modo "NO COPIES A NADIE")</h4>
            <p className="mb-2">En las cartas azules vos querés ser distinto a los demás.</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Si tu palabra no la escribió nadie más, sumás puntos.</li>
              <li>Si tu palabra es igual a la de otro, perdés puntos.</li>
              <li>Si no escribís nada, perdés más puntos todavía.</li>
            </ul>
            <div className="bg-white/5 rounded-lg p-4 mt-3">
              <p className="font-semibold text-amarillo mb-2">Ejemplo: Letra P - Categoría: Animal</p>
              <ul className="space-y-1 ml-4">
                <li>Juan escribió "Perro"</li>
                <li>Ana escribió "Puma"</li>
                <li>Carlos escribió "Perro"</li>
              </ul>
              <p className="mt-2 text-verde">→ Ana gana, porque "Puma" nadie lo repitió.</p>
              <p className="text-rojo">→ Juan y Carlos pierden, porque "Perro" se repitió.</p>
            </div>
          </section>

          <section>
            <h4 className="text-xl sm:text-2xl font-bold text-naranja mb-3">🟠 CARTAS NARANJAS (modo "COPIA A OTROS")</h4>
            <p className="mb-2">En las cartas naranjas querés pensar lo mismo que otra persona.</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Si alguien escribió la misma palabra que vos, sumás puntos.</li>
              <li>Si nadie escribió lo mismo que vos, perdés puntos.</li>
              <li>Si no escribís nada, perdés más puntos.</li>
            </ul>
            <div className="bg-white/5 rounded-lg p-4 mt-3">
              <p className="font-semibold text-amarillo mb-2">Ejemplo: Letra C - Categoría: Fruta</p>
              <ul className="space-y-1 ml-4">
                <li>Juan escribió "Ciruela"</li>
                <li>Ana escribió "Coco"</li>
                <li>Carlos escribió "Coco"</li>
              </ul>
              <p className="mt-2 text-verde">→ Ana y Carlos ganan (coincidieron).</p>
              <p className="text-rojo">→ Juan pierde (nadie escribió "Ciruela").</p>
            </div>
          </section>

          <section>
            <h4 className="text-xl sm:text-2xl font-bold text-turquesa mb-3">📊 PUNTOS (muy fácil)</h4>
            <p className="mb-3">Cada carta tiene 3 categorías, así que por cada una pasa esto:</p>
            
            <div className="bg-violeta/10 border border-violeta/30 rounded-lg p-4 mb-4">
              <p className="font-bold text-violeta mb-2">En cartas AZULES:</p>
              <ul className="space-y-1 ml-4">
                <li className="text-verde">✔️ Si tu palabra NO coincide → +1 punto</li>
                <li className="text-rojo">❌ Si tu palabra coincide con otro → –1 punto</li>
                <li className="text-rojo font-bold">⛔ Si no escribís nada → –2 puntos</li>
              </ul>
            </div>

            <div className="bg-naranja/10 border border-naranja/30 rounded-lg p-4 mb-4">
              <p className="font-bold text-naranja mb-2">En cartas NARANJAS:</p>
              <ul className="space-y-1 ml-4">
                <li className="text-verde">✔️ Si tu palabra coincide con otro → +1 punto</li>
                <li className="text-rojo">❌ Si nadie coincide con vos → –1 punto</li>
                <li className="text-rojo font-bold">⛔ Si no escribís nada → –2 puntos</li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg p-4">
              <p className="font-semibold">👉 Por carta podés sumar hasta <span className="text-verde">+3 puntos</span></p>
              <p className="font-semibold">👉 O podés llegar a <span className="text-rojo">–6 puntos</span> si no escribís ninguna palabra</p>
            </div>
          </section>

          <section>
            <h4 className="text-xl sm:text-2xl font-bold text-amarillo mb-3">🏆 ¿CÓMO SE GANA?</h4>
            <p className="text-lg font-semibold">El primer jugador que llegue a <span className="text-verde">+10 puntos</span> es el ganador.</p>
          </section>
        </div>
      </div>
    </div>
  )
}
