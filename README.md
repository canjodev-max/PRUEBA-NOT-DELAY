# Not Delay - PWA de Juegos

Aplicación web progresiva (PWA) para los juegos de cartas **TELEPATUTTI** y **¡EY, VOS!**

## 🎮 Descripción

Not Delay es una PWA que proporciona herramientas digitales para jugar juegos de mesa físicos:

- **TELEPATUTTI**: Juego de cartas con modos único y matching
  - Contador de puntos (gana a los 10 puntos)
  - Cronómetro de 40 segundos
  - Manual completo con reglas

- **¡EY, VOS!**: Juego de categorías con letras
  - Dado digital (selección de categoría)
  - Cronómetro dual (15s por turno, 2min totales)
  - Manual completo con reglas

## 🚀 Características

- ✅ PWA instalable en dispositivos móviles y escritorio
- ✅ Funciona offline después de la primera carga
- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Animaciones fluidas con Framer Motion
- ✅ Paleta cromática personalizada (turquesa, violeta, rojo, naranja, verde, amarillo)
- ✅ Tipografía Bricolage Grotesque
- ✅ Splash screen animado
- ✅ Tema oscuro

## 📦 Tecnologías

- **React 18.2.0** - Framework UI
- **Vite 5.0.8** - Build tool
- **Tailwind CSS 3.4.0** - Estilos
- **Framer Motion 10.16.16** - Animaciones
- **vite-plugin-pwa 0.20.5** - Service Worker y manifest

## 🛠️ Instalación

### Requisitos previos
- Node.js 16+ 
- npm o yarn

### Pasos

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd test
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 📝 Scripts disponibles

```bash
npm run dev          # Inicia servidor de desarrollo
npm run build        # Construye para producción
npm run preview      # Previsualiza build de producción
```

## 🎨 Paleta de colores

```css
turquesa: #64AEC5
violeta:  #7F5DC9
rojo:     #DB4E40
naranja:  #E06D33
verde:    #7EAB74
amarillo: #EAB04B
```

## 📱 Instalación como PWA

### En móviles (Android/iOS):
1. Abre la app en el navegador
2. Aparecerá un mensaje de instalación en la esquina superior derecha
3. Toca "Instalar" o usa el menú del navegador → "Agregar a pantalla de inicio"

### En desktop (Chrome/Edge):
1. Busca el ícono de instalación en la barra de direcciones
2. Click en "Instalar Not Delay"

## 📂 Estructura del proyecto

```
test/
├── public/
│   ├── icons/              # Iconos PWA (ico-clar.png, ico-oscu.png)
│   ├── manifest.webmanifest
│   └── offline.html
├── src/
│   ├── components/
│   │   ├── AnimatedBackground.jsx
│   │   ├── ContadorPuntos.jsx    # Contador -2/-1/+1, max 10 puntos
│   │   ├── Cronometro.jsx        # Timer 15s + global 2min
│   │   ├── Cronometro40.jsx      # Timer 40s para TELEPATUTTI
│   │   ├── Dado.jsx              # Dado digital 1-6
│   │   ├── Manual.jsx            # Manual TELEPATUTTI
│   │   └── ManualEyVos.jsx       # Manual ¡EY, VOS!
│   ├── App.jsx                   # Componente principal
│   ├── GameLibrary.jsx           # Biblioteca de juegos + prompt instalación
│   ├── GameMenu.jsx              # Menú de funciones de cada juego
│   ├── GameFunction.jsx          # Router de componentes
│   ├── SplashScreen.jsx          # Animación "Not/Delay."
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js            # Configuración Tailwind + colores
├── vite.config.js                # Configuración Vite + PWA
├── postcss.config.js
├── package.json
└── README.md
```

## 🎯 Componentes principales

### Cronómetro
- **15 segundos** por turno (se resetea manualmente tocando pantalla)
- **2 minutos** globales (se reinicia automáticamente al terminar)
- Beep de audio al llegar a 0

### Contador de Puntos
- Permite números negativos (sin límite inferior)
- Máximo 10 puntos (muestra corona al ganador)
- Botones: -2, -1, +1
- Nombres editables
- Agregar/eliminar jugadores

### Dado Digital
- Animación de rotación 3D
- Números 1-6 con colores aleatorios

## 🌐 Deploy

### Netlify/Vercel
1. Conecta tu repositorio
2. Build command: `npm run build`
3. Publish directory: `dist`

### GitHub Pages
```bash
npm run build
# Sube la carpeta dist/
```

## 📄 Licencia

Proyecto privado - Not Delay

## 👥 Créditos

Desarrollado para los juegos Not Delay By CANJO.dev
- Tipografía: Bricolage Grotesque (Google Fonts)
- Animaciones: Framer Motion
- Iconos: Emoji nativos

---

**Nota**: Los iconos `ico-clar.png` e `ico-oscu.png` deben estar en `public/icons/` para que la PWA funcione correctamente.
