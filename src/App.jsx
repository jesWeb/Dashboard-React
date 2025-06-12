import ApexChartEnlace from "./components/ApexChartEnlace";
import EditorGrafocs from "./components/EditorGrafocs";
import FormPrincipal from "./components/FormPrincipal";
import Modal_Eliminar from "./components/Modal_Eliminar";
import ResetModal from "./components/ResetModal";
import { useChartContext } from "./context/ChartContext";
import useModal from "./hooks/useModal";

function App() {
  const { state } = useChartContext();
  //reclicarl hook de modal
  const {
    isOpen: isResetModalOpen,
    openModal: openResetModal,
    closeModal: closeResetModal,
  } = useModal();

  return (
    <>
      <div className="w-4/5 mx-auto my-auto ">
        <div className="flex justify-between items-center my-5">
          <h1 className="text-center font-black text-4xl">Dashboard</h1>
          <button
            type="button"
              onClick={openResetModal}
            className="bg-red-400 hover:bg-red-700 rounded p-2 text-white hover:cursor-pointer shadow-lg"
          >
            Resetar Aplicacion
          </button>

           {isResetModalOpen && <ResetModal onClose={closeResetModal} />}

        </div>
        {/* formulario para crear y editar  */}
        <div className="rounded border border-indigo-50 shadow-2xl p-5 bg-white">
          <FormPrincipal />
          <EditorGrafocs />
        </div>
        {/* graficos */}
        <div className="grid grid-cols-3 gap-4 mt-8 justify-center">
          {state.datos.map((grafico) => (
            <div
              key={grafico.id}
              className="rounded shadow-xl p-5 bg-slate-200 text-center"
            >
              <h2 className="text-center font-bold pb-2">{grafico.titulo}</h2>
              <div className="flex justify-center shadow-lg">
                <ApexChartEnlace datagrafico={grafico} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
