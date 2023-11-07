import Biblioteca from "../component/biblioteca/biblioteca";
import Headerzin from "../component/headerzin/headerzin";
import Inicio from "../component/inicio/inicio";
import Infof from "../component/infof/infof";

import "./App.css"

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
<Infof />
      </footer>
    </>
  );
};

export default App;
