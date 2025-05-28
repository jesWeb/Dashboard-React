
const EditorGrafocs = () => {
  return (
   <>
   <form action="">
    <div className="flex justify-around">
        <select name="" id="">
            <option value="">Titulo del grafico </option>
        </select>
        <input type="number"  placeholder='Dato'  className='w-24 m-5 p-1 rounded shadow-lg border border-slate-300 focus:shadow-slate-400 focu:outline-none' />
        <input type="date" className='w-44 m-5 p-1 rounded shadow-lg border border-slate-300 focus:shadow-slate-400 focu:outline-none' />

        <button type="button"
        className='bg-red-500 hover:bg-red-700 rounded  m-5 p-2 text-white hover:cursor-pointer shadow-lg'
        >Eliminar Grafico</button>
        <button className='bg-blue-600 hover:bg-blue-500 rounded  m-5 p-2 text-white hover:cursor-pointer shadow-lg'>Actualizar el grafico</button>
        
    </div>
   </form>
   </>
  )
}

export default EditorGrafocs
