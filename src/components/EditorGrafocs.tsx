import { useState } from "react"
import { useChartContext } from "../context/ChartContext"
import Modal_Eliminar from "./Modal_Eliminar"
import useModal from "../hooks/useModal"

const EditorGrafocs = () => {

  const { state, actualizarGrafico, eliminarGrafica } = useChartContext()
  const [selectorTitulo, setSelectorTitulo] = useState('')
  const [valorGrafico, setValorGrafico] = useState(0)
  const [fecha, setFecha] = useState(new Date())
  const listaGraficos = state.datos
  const { isOpen: isOpenModalEliminar,
    openModal: openModalModalEliminar, closeModal: closeModalModalEliminar
  } = useModal()


  const handleSubmit = (e) => {
    e.preventDefault()

    const fechaFormateada = fecha.toISOString().split('T')[0]
    const nuevoDato = {
      x: fechaFormateada,
      y: valorGrafico
    }

    //copia de el grafico
    const graficoSeleccionado = state.datos.find((grafico) => grafico.id === selectorTitulo)

    if (graficoSeleccionado) {
      let nuevosDatos = [
        ...graficoSeleccionado.series[0].data
      ]

      const indiceFecha = nuevosDatos.findIndex(dato => dato.x === nuevoDato.x)

      if (indiceFecha !== -1) {
        // si no es -1 , entonces se encotro un dato con la misma fecha 
        nuevosDatos[indiceFecha] = nuevoDato
      } else {
        //si es -1 , enotnces n0 se encontro
        nuevosDatos.push(nuevoDato)
      }

      //si me devuelven un numero negativo, entonces fechA debe ir antes de fechaB
      //si me da 0 fechaA y fechaB son iguales
      //si me devuelve un numero positivo, entonces fechaA  debe ir despues de fecha b
      nuevosDatos.sort((fechaA, fechaB) => fechaA.x.localeCompare(fechaB.x))

      const nuevoGrafico = {
        ...graficoSeleccionado,
        series: [{
          ...graficoSeleccionado.series[0],
          data: nuevosDatos
        }]
      }

      console.log(`obtenemos la nueva informacion de la actualizacion ${nuevoGrafico} `);

      actualizarGrafico(nuevoGrafico)
    }


    resetForm()
  }

  const resetForm = () => {
    setSelectorTitulo('')
    setValorGrafico(0)
    setFecha(new Date())
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-around">

          <select
            className="w-96 m-5 p-1 rounded shadow-lg border border-slate-300 focus:shadow-slate-400 focu:outline-none"
            value={selectorTitulo}
            onChange={(e) => setSelectorTitulo(e.target.value)}
          >
            <option className="text-center text-indigo-100">---Titulo del grafico---</option>
            {listaGraficos.map((grafico) => (
              <option
                key={grafico.id}
                value={grafico.id}
              >
                {grafico.titulo
                  ? grafico.titulo
                  : 'no llega algo'}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder='Dato'
            value={valorGrafico}
            onChange={(e) => setValorGrafico(Number(e.target.value))}
            className='w-24 m-5 p-1 rounded shadow-lg border border-slate-300 focus:shadow-slate-400 focu:outline-none' />

          <input
            type="date"
            value={fecha.toISOString().split('T')[0]}
            onChange={(e) => { setFecha(new Date(e.target.value)) }}
            className='w-44 m-5 p-1 rounded shadow-lg border border-slate-300 focus:shadow-slate-400 focu:outline-none' />

          <button
            type="button"
            className='bg-red-500 hover:bg-red-700 rounded  m-5 p-2 text-white hover:cursor-pointer shadow-lg'
            onClick={() => openModalModalEliminar()}
          >
            Eliminar Grafico
          </button>

          {isOpenModalEliminar &&
            <Modal_Eliminar
              onClose={closeModalModalEliminar}
              selectorTitulo={selectorTitulo}
              eliminarGrafica={eliminarGrafica}
              

            />
          }

          <button

            className='bg-blue-600 hover:bg-blue-500 rounded  m-5 p-2 text-white hover:cursor-pointer shadow-lg'>
            Actualizar el grafico

          </button>

        </div>
      </form>
    </>
  )
}

export default EditorGrafocs
