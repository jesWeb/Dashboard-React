import { useReducer } from "react";
import { dashboardReducer, estadoInicial } from "../reducers/ChartReducer";

export default function useChart() {
  const [state, dispatch] = useReducer(dashboardReducer, estadoInicial);
  return {};
}
