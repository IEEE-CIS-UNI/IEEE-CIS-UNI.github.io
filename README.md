# IEEE CIS UNI - Página Oficial

Esta es la página oficial de IEEE CIS UNI, donde los usuarios pueden explorar información sobre la organización, su equipo, eventos, cursos y contactar a través de la plataforma. Además, incluye un sistema de autenticación utilizando **Firebase Authentication** para el inicio de sesión.

## Secciones del sitio web

1. **Inicio**: Página principal con enlaces a todas las secciones importantes.
2. **Nosotros**: Información sobre IEEE CIS UNI.
3. **Equipo**: Conoce al equipo detrás de IEEE CIS UNI.
4. **Cursos**: Catálogo de cursos disponibles.
5. **Eventos**: Información sobre eventos actuales y futuros.
6. **Contacto**: Formulario para contacto directo con el equipo.
7. **Login**: Página de autenticación mediante Firebase.

## Características principales

- **Autenticación con Firebase**: Los usuarios pueden iniciar sesión o registrarse utilizando Firebase Authentication (soporta Google, email y otros métodos).
- **Páginas dinámicas**: Secciones dinámicas con información actualizada.
- **Formulario de contacto**: Los usuarios pueden enviar mensajes directamente a IEEE CIS UNI.

## Tecnologías utilizadas

- **HTML5/CSS3**: Estructura y diseño del sitio web.
- **JavaScript**: Interactividad y manejo de eventos.
- **Firebase**:
  - **Firebase Auth**: Sistema de autenticación.
  - **Firebase Hosting** (opcional): Para desplegar la página web.
- **Bootstrap**: Estilo y estructura responsiva.

## Requisitos previos

1. Tener una cuenta de Firebase.
2. Tener Node.js instalado en tu máquina.
3. Tener acceso a las APIs de autenticación de Firebase (configuradas en la consola de Firebase).

## Instalación y configuración

### 1. Clona este repositorio

```bash
git clone https://github.com/tu_usuario/ieee-cis-uni.git
cd ieee-cis-uni



Estructura del proyecto

/ieee-cis-uni
├── /css
│   └── estilos.css  # Estilos de la página
├── /img             # Carpeta para las imágenes
├── /js
│   └── scripts.js   # Funciones y lógica de la página
├── index.html       # Página principal con las secciones
└── README.md        # Este archivo
