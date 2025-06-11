import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { useChartContext } from "../context/ChartContext"


const FormPrincipal = () => {
     const { agregarGrafico } = useChartContext()
    const [titulo, setTitulo] = useState('')
    const [valorGrafico, setValorGrafico] = useState(0)
    const [fecha, setFecha] = useState(new Date())
    const [tipoGrafico, setTipoGrafico] = useState("")
    const tiposDeGraficos = ['line', 'area', 'bar', 'heatmap']

    const handleSubmit = (e) => {
        e.preventDefault();

        //flijo de la fecha ennel formulario
        const fechaFormateada = fecha.toISOString().split('T')[0];
        //crear un nuevo grafico 
        const nuevoGrafico = {
            id: uuidv4(),
            titulo,
            tipo: tipoGrafico,
            series: [{
                data: [{
                    x: fechaFormateada,
                    y: valorGrafico
                }]
            }]
        }
        console.log('Datos del grafico', nuevoGrafico);
        agregarGrafico(nuevoGrafico)
        
        resertForm()
    }


    const resertForm = () => {
        setTitulo('')
        setValorGrafico(0)
        setFecha(new Date())
        setTipoGrafico('')
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex justify-around">
                    {/* TITULO */}
                    <input
                        type="text"
                        placeholder='Nombre del Grafico'
                        className='w-96 m-5 p-1 rounded shadow-lg border border-slate-300 focus:shadow-slate-400 focu:outline-none'
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        required

                    />
                    {/* NUMERO */}
                    <input
                        type="number"
                        placeholder='Dato'
                        className='w-24 m-5 p-1 rounded shadow-lg border border-slate-300 focus:shadow-slate-400 focu:outline-none'
                        value={valorGrafico}
                        onChange={(e) => setValorGrafico(Number(e.target.value))}
                    />
                    {/* dia */}
                    <input
                        type="date"
                        className='w-44 m-5 p-1 rounded shadow-lg border border-slate-300 focus:shadow-slate-400 focu:outline-none'
                        value={fecha.toISOString().split('T')[0]}
                        onChange={(e) => { setFecha(new Date(e.target.value)) }}
                    />
                    <select
                        className='w-48 m-5 p-1 rounded shadow-lg border border-slate-300 focus:shadow-slate-400 focu:outline-none'
                        value={tipoGrafico}
                        onChange={(e) => setTipoGrafico(e.target.value)}
                    >
                        <option >-- Selecciona un Grafico --</option>
                        {tiposDeGraficos.map((tipo, index) => (
                            <option
                                key={index}
                                value={tipo}
                            >{tipo ? tipo : 'No hay nada'}</option>
                        ))}
                    </select>
                    <button className='bg-blue-600 hover:bg-blue-500 rounded  m-5 p-2 text-white hover:cursor-pointer shadow-lg' type='submit'>Crear Grafico</button>
                </div>

            </form>
        </>
    )
}

export default FormPrincipal
