import { createContext, useContext } from "react";
import useChart from "../hooks/useChart";

// 1 creo el Context
const ChartContext = createContext();

// 2 - Creo el proveedor del cpntext

export const ChartProvider = ({ children }) => {
  const {} = useChart();

  return <ChartContext.Provider value={{}}>{children}</ChartContext.Provider>;
};

// 3 - Hoock para acceder al context

export const useChartContext = () => {
  const context = useContext(ChartContext);
  if (!context) {
    throw new Error("Usechart must be used whithin a chart Provider ");
  }
  return context;
};
