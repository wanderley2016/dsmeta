import Header from "./components/Header";
import SalesCard from "./components/SalesCard";
import { ToastContainer } from 'react-toastify'; // para receber mensagem na tela  
import 'react-toastify/dist/ReactToastify.css'; //  para receber mensagem na tela 

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section >
      </main >
    </>
  )
}


export default App;
