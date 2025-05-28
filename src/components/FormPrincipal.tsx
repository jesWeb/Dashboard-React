import React from 'react'

const FormPrincipal = () => {
    return (
        <>
            <form action="">
                <div className="flex justify-around">
                    <input type="text" name="" placeholder='Nombre del Grafico' className='w-96 m-5 p-1 rounded shadow-lg border border-slate-300 focus:shadow-slate-400 focu:outline-none' id="" />
                    <input type="number" placeholder='Dato' name="" id="" className='w-24 m-5 p-1 rounded shadow-lg border border-slate-300 focus:shadow-slate-400 focu:outline-none' />
                    <input type="date" name="" id="" className='w-44 m-5 p-1 rounded shadow-lg border border-slate-300 focus:shadow-slate-400 focu:outline-none' />
                    <select name="" id="" className='w-48 m-5 p-1 rounded shadow-lg border border-slate-300 focus:shadow-slate-400 focu:outline-none'>
                        <option value="">Tipo de Grafico</option>
                    </select>
                    <button className='bg-blue-600 hover:bg-blue-500 rounded  m-5 p-2 text-white hover:cursor-pointer shadow-lg' type='submit'>Crear Grafico</button>
                </div>
                
            </form>
        </>
    )
}

export default FormPrincipal
