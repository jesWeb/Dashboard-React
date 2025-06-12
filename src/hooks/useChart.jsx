import { useReducer } from "react";
import { dashboardReducer, estadoInicial } from "../reducers/ChartReducer";
import { useEffect } from "react";
import { useState } from "react";

export default function useChart() {
  const [state, dispatch] = useReducer(dashboardReducer, estadoInicial);
  const [graficosCargados, setGraficosCargados] = useState(false);

  const id = new Set();
  //buscar si existe y despues de guardam
  useEffect(() => {
    if (!graficosCargados) {
      const data = localStorage.getItem("graficos");

      if (data) {
        const graficos = JSON.parse(data);
        graficos.forEach((grafico) => {
          if (!id.has(grafico.id)) {
            id.add(grafico.id);
            dispatch({ type: "new_graf", payload: grafico });
          }
        });
      }
    }
    setGraficosCargados(true);
  }, [graficosCargados]);
  
  //
  useEffect(() => {
    if (graficosCargados) {
      localStorage.setItem("graficos", JSON.stringify(state.datos));
    }
  }, [state.data,graficosCargados]);

  const agregarGrafico = (grafico) => {
    console.log("datos del grafico originales", grafico);

    if (!id.has(grafico.id)) {
      id.add(grafico.id);
      dispatch({ type: "new_graf", payload: grafico });
    } else {
      console.warn(
        "Grafico con id duplicado",
        `${grafico.id}, este grafico no se publica y se omitira`
      );
    }
  };

  //actualizar el grafico de edicion
  const actualizarGrafico = (graficoElejido) => {
    console.log("que llegas de la actualizacion", graficoElejido);
    dispatch({ type: "update_graf", payload: graficoElejido });
  };

  //eliminar grafico
  const eliminarGrafica = (id) => {
    dispatch({ type: "eliminarGrafico", payload: { id } });
  };

  return { state, agregarGrafico, actualizarGrafico, eliminarGrafica };
}
