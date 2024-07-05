Este es un [Next.js](https://nextjs.org/) proyecto iniciado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Empezando

Primero, ejecuta el servidor de desarrollo:


```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) con su navegador para ver el resultado.

Puede comenzar a editar la página modificando `app/page.tsx`. La página se actualiza automáticamente a medida que edita el archivo.

Este proyecto utiliza [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para optimizar y cargar automáticamente Inter, una fuente personalizada de Google.

## Aprende más

Para obtener más información sobre Next.js, consulte los siguientes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - obtenga más información sobre las funciones y la API de Next.js.
- [Learn Next.js](https://nextjs.org/learn) - un tutorial interactivo de Next.js.

Puedes consultar [the Next.js GitHub repository](https://github.com/vercel/next.js/) - ¡Tus comentarios y contribuciones son bienvenidos!

## Deploy en Vercel

La forma más sencilla de implementar su aplicación Next.js es utilizar el [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) De los creadores de Next.js.

Echa un vistazo a nuestra [Next.js deployment documentation](https://nextjs.org/docs/deployment) para más detalles.

# Perfil de Usuario Web con Next.js

Este proyecto está desarrollado utilizando Next.js 14 para crear una página web interactiva de perfil de usuario. La página está diseñada para presentar de manera intuitiva la información personal de un usuario, sus intereses y ofrecer un medio de contacto fácil de usar.

# Descripción

El perfil de usuario web se ha estructurado utilizando las capacidades avanzadas de Next.js 14 para una gestión eficiente de rutas dinámicas y renderizado del lado del servidor. Además, se ha implementado una funcionalidad opcional donde se muestra una tarjeta de usuario inicialmente. Los visitantes pueden hacer clic en el botón "Ver perfil" en la tarjeta para acceder al perfil completo, facilitando la navegación dentro de la aplicación.

# Características Principales

Secciones Dinámicas: Utilización de componentes modulares para gestionar secciones como "Header, About me, Interest y contact", que presenta una breve descripción personal, y una lista de intereses del usuario.

Formulario de Contacto: Integración de un formulario interactivo que permite a los visitantes contactar al usuario a través de campos para nombre, email y mensaje.

Estilización Avanzada: Implementación de estilos responsivos utilizando CSS Modules para asegurar una apariencia coherente en dispositivos móviles y de escritorio, sin depender de frameworks externos.

# Pruebas y Optimización

Se han realizado pruebas básicas utilizando Jest y Testing Library para garantizar la funcionalidad esperada de los componentes clave como el formulario de contacto. Además, se han incluido animaciones sutiles para mejorar la experiencia de usuario y la interactividad de la página.

