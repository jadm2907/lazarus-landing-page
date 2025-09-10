Lazarus Landing Page
Plataforma líder en gestión de salud mental y rehabilitación cognitiva. Este proyecto es una página web desarrollada con React y React Router para mostrar las características y visión de Lazarus Technology SpA.
Características

Diseño responsivo: Adaptado para dispositivos móviles y de escritorio.
Navegación dinámica: Incluye secciones como Inicio, Problema, Solución, Propuesta de Valor, Visión y Llamado a la Acción.
Páginas legales: Términos y Condiciones, Política de Privacidad, Política de Seguridad y Aviso Legal, accesibles desde el footer.
Efectos visuales: Animaciones de desplazamiento y paralaje para una experiencia interactiva.

Requisitos previos

Node.js (v16 o superior)
npm (v8 o superior)

Instalación

Clona el repositorio:git clone https://github.com/<tu-usuario>/lazarus-landing-page.git


Navega al directorio del proyecto:cd lazarus-landing-page


Instala las dependencias:npm install


Inicia el servidor de desarrollo:npm start

La aplicación estará disponible en http://localhost:3000.

Estructura del proyecto
lazarus-landing-page/
├── public/                 # Archivos estáticos (favicon, index.html, etc.)
├── src/
│   ├── assets/            # Imágenes y otros recursos
│   ├── components/        # Componentes React (HeroSection, Footer, etc.)
│   ├── legal/             # Páginas legales (Términos, Privacidad, etc.)
│   ├── styles/            # Archivos CSS para estilos
│   ├── utils/             # Funciones de utilidad (scrollEffects.js, etc.)
│   ├── App.js             # Componente principal con enrutamiento
│   ├── index.js           # Punto de entrada de la aplicación
│   └── index.css          # Estilos globales
├── package.json           # Dependencias y scripts
└── README.md              # Documentación del proyecto

Uso

Navegación: Usa los enlaces del footer para acceder a las secciones de la página principal o a las páginas legales, que se abren en nuevas pestañas.
Desarrollo: Modifica los componentes en src/components o los estilos en src/styles para personalizar la aplicación.
Despliegue: Usa npm run build para generar una versión optimizada en la carpeta build.

Dependencias principales

React: ^18.2.0
React Router DOM: ^6.14.0

Contribución

Haz un fork del repositorio.
Crea una rama para tu funcionalidad: git checkout -b feature/nueva-funcionalidad.
Realiza tus cambios y haz commit: git commit -m "Agrega nueva funcionalidad".
Envía tus cambios: git push origin feature/nueva-funcionalidad.
Abre un Pull Request en GitHub.

Contacto

Email: joseandresdonoso290723@gmail.com
LinkedIn: José Andrés Donoso

Licencia
© 2025 Lazarus Technology SpA. Todos los derechos reservados.