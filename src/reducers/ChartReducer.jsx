//estado inicial  - Es un arreglos de objetos vacios
export const estadoInicial = {
  //aqui se almacenan
  datos: [],
};

// Reducer: nos sirve para amanejar las acciones de creacion, actualizacion y elimiacion
export const dashboardReducer = (state, action) => {
  if (action.type === "crerar_grafico") {
    console.log("llegan los dato", action.payload);

    return {
      ...state,
      datos: [...state.datos, action.payload],
    };
  }

  return state;
};
