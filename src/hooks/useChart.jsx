import { useReducer } from "react";
import { dashboardReducer, estadoInicial } from "../reducers/ChartReducer";

export default function useChart() {
  const [state, dispatch] = useReducer(dashboardReducer, estadoInicial);
  const ids = new Set();
 
  const agregarGrafica = (grafico) => {
    console.log("datos del grafico", grafico);
    if (!ids.has(grafico.id)) {
      ids.add(grafico.id);
      dispatch({ type: "crerar_grafico", payload: grafico });
    } else {
      console.warn(
        "Grafico con id duplicado",
        `${grafico.id}, este grafico no se publicaea y se omitira`
      );
    }
  };

  return { state, agregarGrafica };
}
