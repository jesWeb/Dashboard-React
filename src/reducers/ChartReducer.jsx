export const estadoInicial = {

  datos: [],
};

export const dashboardReducer = (state, action) => {

  if (action.type === 'new_graf') {
    console.log("llegan los datos", action.payload);

    return {
      ...state,
      datos: [...state.datos, action.payload],
    };
  }

  if (action.type === 'update_graf') {
    return {
      ...state,
      datos: state.datos.map((grafico) =>
        grafico.id === action.payload.id
          ? { ...grafico, ...action.payload }
          : grafico
      ),
    };
  }

  if (action.type === 'eliminarGrafico') {
    return {
      ...state,
      datos: state.datos.filter((grafico) => grafico.id !== action.payload.id),
    };
  }

  return state;
};
