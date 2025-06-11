//estado inicial  - Es un arreglos de objetos vacios
export const estadoInicial = {
  //aqui se almacenan
  datos: [],
};

// Reducer: nos sirve para amanejar las acciones de creacion, actualizacion y elimiacion
export const dashboardReducer = (state, action) => {
  //crear
  if (action.type === 'new_graf') {
    console.log("llegan los datos", action.payload);

    return {
      ...state,
      datos: [...state.datos, action.payload],
    };
  }
  //editar
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

  //eliminar

  if (action.type === 'eliminarGrafico') {
    return {
      ...state,
      datos: state.datos.filter((grafico) => grafico.id !== action.payload.id),
    };
  }

  return state;
};
