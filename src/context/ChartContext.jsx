import { createContext, useContext } from "react";
import useChart from "../hooks/useChart";


const ChartContext = createContext();

export const ChartProvider = ({ children }) => {
  const { state, agregarGrafico, actualizarGrafico,eliminarGrafica } = useChart();

  return (
    <ChartContext.Provider value={{ state, agregarGrafico, actualizarGrafico,eliminarGrafica }}>
      {children}
    </ChartContext.Provider>
  );
};

export const useChartContext = () => {
  const context = useContext(ChartContext);
  if (!context) {
    throw new Error("Usechart must be used whithin a chart Provider ");
  }
  return context;
};
