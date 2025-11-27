export default function ManualEyVos(){
  return (
    <div className="manual-content min-h-screen bg-black text-white p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto space-y-8 pb-20">
        
        {/* Video Section */}
        <div className="bg-gradient-to-br from-amarillo/20 to-naranja/20 rounded-3xl p-8 border border-amarillo/30">
          <h2 className="text-3xl font-bold text-center mb-4 text-amarillo">📹 Video Tutorial</h2>
          <div className="aspect-video bg-black/50 rounded-xl flex items-center justify-center">
            <p className="text-gray-400">Video próximamente</p>
          </div>
        </div>

        {/* ¿DE QUÉ TRATA? */}
        <section className="bg-gradient-to-br from-turquesa/20 to-violeta/20 rounded-3xl p-8 border border-turquesa/30">
          <h2 className="text-4xl font-bold mb-6 text-center text-turquesa">🧠 ¿DE QUÉ TRATA EL JUEGO?</h2>
          <div className="space-y-4 text-lg">
            <p>Cada jugador tiene cartas con letras.</p>
            <p className="text-amarillo font-semibold">Tu objetivo es quedarte sin cartas diciendo palabras que empiecen con esa letra.</p>
            <p>Para saber de qué tenés que decir palabras, se usa una <span className="text-verde font-bold">carta de Categoría</span> y un <span className="text-naranja font-bold">dado digital</span> que te da una categoría al azar.</p>
          </div>
        </section>

        {/* QUÉ TRAE LA CAJA */}
        <section className="bg-gradient-to-br from-violeta/20 to-rojo/20 rounded-3xl p-8 border border-violeta/30">
          <h2 className="text-4xl font-bold mb-6 text-center text-violeta">📦 QUÉ TRAE LA CAJA</h2>
          <div className="space-y-3 text-lg">
            <p>• <span className="text-amarillo font-bold">62 cartas de Letras</span> (A, B, C, D…)</p>
            <p>• <span className="text-verde font-bold">38 cartas de Categorías</span> (cosas como países, animales, comidas, etc.)</p>
          </div>
        </section>

        {/* PREPARACIÓN */}
        <section className="bg-gradient-to-br from-verde/20 to-turquesa/20 rounded-3xl p-8 border border-verde/30">
          <h2 className="text-4xl font-bold mb-6 text-center text-verde">🔧 PREPARACIÓN (paso por paso)</h2>
          <div className="space-y-4 text-lg">
            <p><span className="text-amarillo font-bold">1.</span> A cada jugador se le reparten <span className="text-amarillo font-bold">7 cartas de Letras</span>.</p>
            <p><span className="text-amarillo font-bold">2.</span> El resto de cartas de Letras se deja boca abajo: este es el <span className="text-turquesa font-bold">mazo sobrante</span>.</p>
            <p><span className="text-amarillo font-bold">3.</span> Se hace otro mazo con todas las <span className="text-verde font-bold">cartas de Categorías</span>, boca abajo.</p>
            <p><span className="text-amarillo font-bold">4.</span> Se deja un espacio vacío en el centro: será el <span className="text-naranja font-bold">Pozo de Descarte</span>.</p>
            <div className="bg-black/30 rounded-xl p-6 mt-6 border border-amarillo/40">
              <p className="text-amarillo font-bold mb-3">Entrá a la PWA escaneando el QR de la caja.</p>
              <p>Ahí tenés:</p>
              <ul className="list-disc list-inside space-y-2 mt-3 ml-4">
                <li>El <span className="text-turquesa">dado digital</span> (elige categoría)</li>
                <li>El <span className="text-verde">cronómetro de 15 segundos</span></li>
                <li>El <span className="text-violeta">tiempo total de 2 minutos</span> por categoría</li>
              </ul>
            </div>
            <p className="text-center text-naranja font-bold text-xl mt-6">👉 El turno siempre va hacia la derecha.</p>
          </div>
        </section>

        {/* CÓMO SE JUEGA */}
        <section className="bg-gradient-to-br from-naranja/20 to-rojo/20 rounded-3xl p-8 border border-naranja/30">
          <h2 className="text-4xl font-bold mb-6 text-center text-naranja">🎮 ¿CÓMO SE JUEGA?</h2>
          
          {/* PASO 1 */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-amarillo mb-4">1️⃣ PASO 1: Levantar una carta de Categoría</h3>
            <p className="text-lg mb-4">El jugador que empieza levanta una <span className="text-verde font-bold">carta de Categoría</span>, la muestra, y tira el <span className="text-turquesa font-bold">dado digital</span> para ver cuál de las 6 categorías de esa carta se va a jugar.</p>
            <div className="bg-black/40 rounded-xl p-6 border border-verde/40">
              <p className="text-verde font-bold mb-2">Ejemplo:</p>
              <p>• Carta muestra varias categorías</p>
              <p>• El dado digital dice <span className="text-amarillo font-bold">2</span></p>
              <p>• Tocó <span className="text-turquesa font-bold">"Ciudades de Argentina"</span></p>
              <p className="text-amarillo font-bold mt-3">Listo: esa será la categoría.</p>
            </div>
          </div>

          {/* PASO 2 */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-amarillo mb-4">2️⃣ PASO 2: Se juegan 2 minutos con ESA categoría</h3>
            <p className="text-lg mb-3">Todos los jugadores van jugando esa misma categoría, uno a la vez, pero todos dentro de un total de <span className="text-violeta font-bold">2 minutos</span>.</p>
            <p className="text-lg">Cada jugador tiene <span className="text-verde font-bold">15 segundos</span> por turno.</p>
          </div>

          {/* PASO 3 */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-amarillo mb-4">3️⃣ PASO 3: Tu turno</h3>
            <p className="text-lg mb-4">Cuando es tu turno, hacés esto:</p>
            <div className="space-y-3 mb-4">
              <p>• Elegís una <span className="text-amarillo font-bold">carta de Letras</span> de tu mano.</p>
              <p>• Tenés <span className="text-verde font-bold">15 segundos</span> para decir una palabra que:</p>
              <ul className="list-disc list-inside ml-6 space-y-2">
                <li>Pertenezca a la categoría</li>
                <li>Empiece con la letra de tu carta</li>
              </ul>
            </div>
            <div className="bg-black/40 rounded-xl p-6 border border-turquesa/40">
              <p className="text-turquesa font-bold mb-2">Ejemplo:</p>
              <p>• Categoría: <span className="text-verde">Ciudades de Argentina</span></p>
              <p>• Carta elegida: <span className="text-amarillo font-bold">M</span></p>
              <p>• Decís: <span className="text-naranja font-bold">"Mendoza"</span></p>
              <p className="mt-4">✅ Si lo decís bien → tirás esa carta al <span className="text-naranja">Pozo de Descarte</span> y tocás el cronómetro para pasar turno.</p>
              <p className="mt-2">❌ Si lo decís mal, no decís nada o te pasás de tiempo → te comés castigo.</p>
            </div>
          </div>
        </section>

        {/* CASTIGOS */}
        <section className="bg-gradient-to-br from-rojo/20 to-naranja/20 rounded-3xl p-8 border border-rojo/30">
          <h2 className="text-4xl font-bold mb-6 text-center text-rojo">4️⃣ CASTIGOS (muy simple)</h2>
          <p className="text-lg mb-4">Si te equivocás:</p>
          <div className="bg-black/40 rounded-xl p-6 border border-rojo/40">
            <p className="text-rojo font-bold text-xl mb-4">❌ MAL / TARDAS / NO DECÍS NADA:</p>
            <p className="text-lg mb-3">Tenés que agarrar cartas así:</p>
            <div className="space-y-4 ml-4">
              <p>• <span className="text-naranja font-bold">Si hay cartas en el Pozo de Descarte:</span><br/>
              → Te llevás <span className="text-amarillo font-bold">todas esas cartas</span>.</p>
              <p>• <span className="text-verde font-bold">Si el Pozo está vacío:</span><br/>
              → Sacás <span className="text-amarillo font-bold">una carta</span> del mazo sobrante.</p>
              <p>• <span className="text-violeta font-bold">Si tampoco queda mazo sobrante:</span><br/>
              → Le robás <span className="text-amarillo font-bold">una carta</span> al jugador de tu izquierda, sin mirar.</p>
            </div>
          </div>
        </section>

        {/* CUANDO ALGUIEN FALLA */}
        <section className="bg-gradient-to-br from-violeta/20 to-rojo/20 rounded-3xl p-8 border border-violeta/30">
          <h2 className="text-4xl font-bold mb-6 text-center text-violeta">5️⃣ CUANDO ALGUIEN FALLA…</h2>
          <div className="bg-black/40 rounded-xl p-6 border border-rojo/40">
            <p className="text-lg mb-3">→ Se corta automáticamente la categoría <span className="text-rojo font-bold">ANTES de los 2 minutos</span>.</p>
            <p className="text-lg mb-6">→ El siguiente jugador levanta una <span className="text-verde font-bold">nueva carta de Categoría</span> y tira el dado digital otra vez.</p>
            <p className="text-amarillo font-bold text-xl text-center">💥 Cada vez que alguien falla, empieza una categoría nueva.</p>
          </div>
        </section>

        {/* IMPORTANTE */}
        <section className="bg-gradient-to-br from-amarillo/20 to-verde/20 rounded-3xl p-8 border border-amarillo/30">
          <h2 className="text-4xl font-bold mb-6 text-center text-amarillo">⏱️ IMPORTANTE</h2>
          <div className="space-y-3 text-lg">
            <p>• Cada jugador tiene <span className="text-verde font-bold">15 segundos</span> por turno.</p>
            <p>• La categoría completa dura máximo <span className="text-violeta font-bold">2 minutos</span>, salvo que alguien falle y "resetea" la categoría.</p>
            <p>• Durante discusiones o dudas el tiempo de 2 minutos <span className="text-naranja font-bold">sigue corriendo</span>.</p>
          </div>
        </section>

        {/* REGLA REPETIR */}
        <section className="bg-gradient-to-br from-turquesa/20 to-violeta/20 rounded-3xl p-8 border border-turquesa/30">
          <h2 className="text-4xl font-bold mb-6 text-center text-turquesa">🚫 REGLA SOBRE REPETIR CATEGORÍAS</h2>
          <p className="text-lg mb-3">Si el dado digital elige una categoría que ya salió antes, hay que tirar el dado de nuevo.</p>
          <p className="text-rojo font-bold text-xl text-center">No se repiten categorías.</p>
        </section>

        {/* CÓMO SE GANA */}
        <section className="bg-gradient-to-br from-verde/20 to-amarillo/20 rounded-3xl p-8 border border-verde/30">
          <h2 className="text-4xl font-bold mb-6 text-center text-verde">🏆 ¿CÓMO SE GANA?</h2>
          <div className="text-center">
            <p className="text-lg mb-4">Muy fácil:</p>
            <div className="bg-black/40 rounded-xl p-8 border border-amarillo/40">
              <p className="text-2xl font-bold text-amarillo">👉 El primer jugador que se queda sin cartas de Letras<br/>es el ganador del juego.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
