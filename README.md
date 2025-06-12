
# 📊 Dashboard React

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-purple?logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)

Este proyecto es un dashboard interactivo construido con **React** y **Vite**. Permite crear, editar y eliminar gráficos dinámicos utilizando [ApexCharts](https://apexcharts.com/), con almacenamiento local en el navegador.

---

## ✨ Características

- 📈 Crear gráficos personalizados (línea, área, barra, heatmap)
- 🛠️ Editar datos de los gráficos existentes
- ❌ Eliminar gráficos individualmente
- ♻️ Resetear toda la aplicación (borrar todos los datos)
- 💾 Persistencia de datos en `localStorage`
- 🎨 Interfaz moderna con **TailwindCSS**

---
## 🧰 Tecnologías Utilizadas

* ⚛️ React
* ⚡ Vite
* 📊 ApexCharts
* 💨 TailwindCSS
* 🧠 React Context + Reducers
* 🧪 localStorage API

---

## ⚙️ Instalación

1. 📥 Clona el repositorio:

   ```sh
   git clone https://github.com/jesWeb/Dashboard-React.git
   cd dashboard-react
   ````

2. 📦 Instala las dependencias:

   ```sh
   npm install
   ```

3. ▶️ Inicia el servidor de desarrollo:

   ```sh
   npm run dev
   ```

4. 🌐 Abre en tu navegador:

   ```sh
   http://localhost:5173
   ```


## 🧱 Estructura del Proyecto

```text
src/
├── components/      # Componentes reutilizables (formularios, modales, gráficos)
├── context/         # Contexto global para gestión de gráficos
├── hooks/           # Hooks personalizados
├── reducers/        # Reducer para el manejo del estado de los gráficos
├── App.jsx          # Componente principal
├── main.jsx         # Punto de entrada de la app
└── index.css        # Estilos globales (TailwindCSS)
```

## 👨‍💻 Autor

Desarrollado por [@jesWeb](https://github.com/jesWeb) 🚀


