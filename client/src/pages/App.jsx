import Biblioteca from "../component/biblioteca/biblioteca";
import Headerzin from "../component/headerzin/headerzin";
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
          <Headerzin />
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
