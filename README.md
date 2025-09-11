# Lazarus Landing Page

Plataforma líder en gestión de salud mental y rehabilitación cognitiva. Esta página web, desarrollada con React y React Router, presenta las características y visión de Lazarus Technology SpA.

## Características
🚀 Características
Frontend (React)
✅ Diseño responsive y moderno

✅ Formulario de contacto funcional

✅ Sistema de logging integrado

✅ Componentes modulares y reutilizables

✅ Optimizado para SEO

✅ Service Worker para funcionalidad offline

Backend (Node.js + Express + MySQL)
✅ API RESTful para gestión de leads

✅ Base de datos MySQL con Sequelize ORM

✅ Sistema de logging avanzado con Winston

✅ Validación de datos y manejo de errores

✅ Configuración por environment variables

✅ CORS configurado para desarrollo y producción

## Requisitos
- Node.js (v16+)
- MySQL 5.7+
- npm (v8+)

## Instalación
1. Clona el repositorio:
   ```
   git clone https://github.com/<tu-usuario>/lazarus-landing-page.git
   ```
2. Ingresa al directorio:
   ```
   cd lazarus-landing-page
   ```
3. Instala dependencias:
   ```
   npm install
   ```
4. Inicia el servidor:
   ```
   npm start
   ```
   Accede en `http://localhost:3000`.

## Estructura
```
lazarus-landing-page/
├── backend/                 # API Server
│   ├── src/
│   │   ├── config/         # Configuración de base de datos
│   │   ├── controllers/    # Lógica de negocio
│   │   ├── models/         # Modelos de Sequelize
│   │   ├── routes/         # Rutas de la API
│   │   ├── services/       # Servicios de negocio
│   │   ├── utils/          # Utilidades
│   │   └── logs/           # Logs automáticos (gitignored)
│   ├── .env.example        # Variables de entorno ejemplo
│   ├── package.json
│   └── server.js
├── frontend/                # Aplicación React
│   ├── public/             # Archivos estáticos
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   ├── hooks/          # Custom hooks
│   │   ├── services/       # Servicios API
│   │   ├── styles/         # Estilos CSS
│   │   ├── utils/          # Utilidades
│   │   └── assets/         # Imágenes y recursos
│   ├── .env.example        # Variables de entorno ejemplo
│   └── package.json
├── .gitignore
└── README.md            # Documentación
```

## Uso
- **Navegación**: Usa los enlaces del footer para secciones o páginas legales.
- **Desarrollo**: Edita componentes en `src/components` o estilos en `src/styles`.
- **Despliegue**: Genera build con `npm run build`.

## Dependencias
- React: ^18.2.0
- React Router DOM: ^6.14.0

🚀 Ejecución
Desarrollo
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm start

Producción
# Backend
cd backend
npm start

# Frontend (build)
cd frontend
npm run build
# Servir los archivos estáticos con nginx/apache

📊 API Endpoints
## Leads

- POST /api/leads - Crear un nuevo lead
- GET /api/leads - Obtener todos los leads (requiere autenticación)
- GET /api/leads/:id - Obtener lead específico
- DELETE /api/leads/:id - Eliminar lead

## Health Check

- GET /health - Verificar estado del servidor

🎨 Componentes Principales

HeroSection - Banner principal con call-to-action

ProblemSection - Identificación del problema

SolutionSection - Presentación de la solución

ValueProposition - Propuesta de valor

CompanyVision - Visión de la empresa

FutureRoadmap - Roadmap futuro

CallToAction - Llamado a acción

ContactForm - Formulario de contacto

Footer - Pie de página


📝 Variables de Entorno

## Backend (.env)

Variable	Descripción	Valor por Defecto
PORT	Puerto del servidor	3000
DB_NAME	Nombre de la base de datos	lazarus_landing
DB_USER	Usuario de MySQL	landing_user
DB_PASSWORD	Password de MySQL	-
DB_HOST	Host de MySQL	localhost
DB_PORT	Puerto de MySQL	3306
LOG_LEVEL	Nivel de logging	info

## Frontend (.env)

Variable	Descripción	Valor por Defecto
REACT_APP_API_URL	URL de la API backend	http://localhost:3000/api
REACT_APP_ENVIRONMENT	Entorno de ejecución	development

🐛 Troubleshooting
## Error de conexión a MySQL
Verificar que MySQL esté ejecutándose

Confirmar credenciales en .env

Verificar que la base de datos exista

## CORS errors
Verificar que el backend esté ejecutándose en el puerto correcto

Confirmar REACT_APP_API_URL en frontend

## Logs
Backend: Los logs se guardan en backend/src/logs/

Frontend: Usar el botón "Descargar Logs" en el footer

📈 Monitoreo y Logs

## Backend
Logs automáticos en backend/src/logs/backend.log

Logs de errores en backend/src/logs/error.log

Formato: YYYY-MM-DD HH:mm:ss [LEVEL]: [CONTEXT] Mensaje

## Frontend
Logs en consola del navegador

Descarga manual de logs desde la interfaz



## Contribución 🤝
1. Haz un fork.
2. Crea rama: `git checkout -b feature/nueva-funcionalidad`.
3. Commitea cambios: `git commit -m "Agrega funcionalidad"`.
4. Sube cambios: `git push origin feature/nueva-funcionalidad`.
5. Abre un Pull Request.

## Contacto
- Email: [joseandresdonoso290723@gmail.com](mailto:joseandresdonoso290723@gmail.com)
- LinkedIn: [José Andrés Donoso](https://www.linkedin.com/in/joseandresdonosomolina)

## Licencia
© 2025 Lazarus Technology SpA. Todos los derechos reservados.