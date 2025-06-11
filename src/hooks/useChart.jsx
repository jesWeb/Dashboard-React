import { useReducer } from "react";
import { dashboardReducer, estadoInicial } from "../reducers/ChartReducer";

export default function useChart() {
  const [state, dispatch] = useReducer(dashboardReducer, estadoInicial);
  const id = new Set();

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
    dispatch({type:'update_graf',payload:graficoElejido})
  };

  return { state, agregarGrafico, actualizarGrafico };
}
