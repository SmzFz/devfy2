import Biblioteca from "../component/biblioteca/biblioteca";
import Headerzin from "../component/headerzin/headerzin";
import Inicio from "../component/inicio/inicio";
import Infof from "../component/infof/infof";
import Midia from "../component/midia/midia";
import "./App.css"
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="sidebar">
          <Inicio />

          <Biblioteca />

        </div>
        <div className="content">
<Link to="/">App</Link>
<Link to="/register"></Link>
            <Headerzin />

            <Midia />

</div>
        </div>
        <div className="mundial">

        </div>
  
      <footer>
<Infof />
      </footer>
    </>
  );
};

export default App;
