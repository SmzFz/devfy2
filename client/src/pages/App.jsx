import Biblioteca from "../component/biblioteca/biblioteca";
import Inicio from "../component/inicio/inicio";

import "./app.css";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="sidebar">
          <Inicio />

          <Biblioteca />

        </div>
        <div className="content">
          
        </div>
        <div className="mundial">

        </div>
      </div>
      <footer>
        <p>Rodapé</p>
      </footer>
    </>
  );
};

export default App;
