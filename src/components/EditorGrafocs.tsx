import { useState } from "react"
import { useChartContext } from "../context/ChartContext"

const EditorGrafocs = () => {

  const { state } = useChartContext()
  const [selectorTitulo, setSelectorTitulo] = useState('')
  const [valorGrafico, setValorGrafico] = useState(0)
  const [fecha, setFecha] = useState(new Date())
  const listaGraficos = state.datos


  const handleSubmit = (e) => {
    e.preventDefault()
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
            {listaGraficos.map((grafico) => {
              <option
                key={grafico.id}
                value={grafico.id}
              >
                {grafico.titulo
                  ? grafico.titulo
                  : 'no llega algo'}
              </option>
            })}
          </select>

          <input
            type="number"
            placeholder='Dato'
            value={valorGrafico}
            onChange={(e)=>setValorGrafico(Number(e.target.value))}
            className='w-24 m-5 p-1 rounded shadow-lg border border-slate-300 focus:shadow-slate-400 focu:outline-none' />

          <input
            type="date"
            value={fecha.toISOString().split('T')[0]}
            onChange={(e)=>{setFecha(new Date(e.target.value))}}
            className='w-44 m-5 p-1 rounded shadow-lg border border-slate-300 focus:shadow-slate-400 focu:outline-none' />

          <button
            type="button"
            className='bg-red-500 hover:bg-red-700 rounded  m-5 p-2 text-white hover:cursor-pointer shadow-lg'
          >Eliminar Grafico
          </button>

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
