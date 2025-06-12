# Dashboard React

Este proyecto es un dashboard interactivo construido con **React** y **Vite**. Permite crear, editar y eliminar gráficos dinámicos utilizando [ApexCharts](https://apexcharts.com/) y almacenar los datos localmente en el navegador.

## Características

- Crear gráficos personalizados (línea, área, barra, heatmap)
- Editar datos de los gráficos existentes
- Eliminar gráficos individualmente
- Resetear toda la aplicación (borrar todos los datos)
- Persistencia de datos en `localStorage`
- Interfaz moderna con **TailwindCSS**

## Instalación

1. Clona el repositorio:

   ```sh
   git clone <url-del-repositorio>
   cd dashboard-react'

  2. Instala las dependencias:
      ```sh
     npm install

  3. Inicia el servidor de desarrollo con:
     ```sh
     npm run dev

  Abre http://localhost:5173 en tu navegador para ver la aplicación

  4. Inicia el servidor de desarrollo con:
       Estructura del proyecto
       ```text
         src/
              ├── components/      # Componentes reutilizables (formularios, modales, gráficos)
              ├── context/         # Contexto global para gestión de gráficos
              ├── hooks/           # Hooks personalizados
              ├── reducers/        # Reducer para el manejo del estado de los gráficos
              ├── App.jsx          # Componente principal
              ├── main.jsx         # Punto de entrada de la app
              └── index.css        # Estilos globales (TailwindCSS)

