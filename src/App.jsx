import ApexChartEnlace from "./components/ApexChartEnlace";
import EditorGrafocs from "./components/EditorGrafocs";
import FormPrincipal from "./components/FormPrincipal";

function App() {
  return (
    <>
      <div className="w-4/5 mx-auto">
        <div className="flex justify-between items-center my-5">
          <h1 className="text-center font-black text-4xl">Dashboard</h1>
          <button
            type="button"
            className="bg-red-400 hover:bg-red-700 rounded p-2 text-white hover:cursor-pointer shadow-lg"
          >
            Resetar Aplicacion
          </button>
        </div>

        {/* formulario para crear y editar  */}
        <div className="rounded border shadow-2xl p-5 bg-white">
          <FormPrincipal />
          <EditorGrafocs />
        </div>
        {/* graficos */}
        <div className="grid grid-cols-3 gap-4 mt-8 justify-center">
          <div className="rounded shadow-xl p-5 bg-slate-200 text-center">
            <h2 className="text-center font-bold pb-2">Grafico 1</h2>
            <div className="flex justify-center shadow-lg">
              <ApexChartEnlace />
            </div>
          </div>
          <div className="rounded shadow-xl p-5 bg-slate-200 text-center">
            <h2 className="text-center font-bold pb-2">Grafico 2</h2>
            <div className="flex justify-center shadow-lg">
              <ApexChartEnlace />
            </div>
          </div>
          <div className="rounded shadow-xl p-5 bg-slate-200 text-center">
            <h2 className="text-center font-bold pb-2">Grafico 3</h2>
            <div className="flex justify-center shadow-lg">
              <ApexChartEnlace />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
