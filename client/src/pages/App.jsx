import Biblioteca from "../component/biblioteca/biblioteca";
import Headerzin from "../component/headerzin/headerzin";
import Inicio from "../component/inicio/inicio";
import Infof from "../component/infof/infof";
import midia from "../component/midia/midia"

import "./App.css"
import Midia from "../component/midia/midia";

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
            <Midia />
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
