//estado inicial  - Es un arreglos de objetos vacios
export const estadoInicial = {
  //aqui se almacenan
  datos: [],
};

// Reducer: nos sirve para amanejar las acciones de creacion, actualizacion y elimiacion
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
        datos:state.datos.map((grafico)=> grafico.id === action.payload.id ? {...grafico,...action.payload} : grafico)
      }
  }


  return state;
};
