import Biblioteca from "../../component/biblioteca/biblioteca";
import Headerzin from "../../component/headerzin/headerzin";
import Inicio from "../../component/inicio/inicio";
import Infof from "../../component/infof/infof";
import Midia from "../../component/midia/midia";
import styles from "./home.module.css"




const Home = () => {
  return (
    <>
      <div className={styles.Home}>
        <div className={styles.sidebar}>
          <Inicio />

          <Biblioteca />

        </div>
        <div className={styles.content}>

            <Headerzin />

            <Midia />
</div>

        <div className={styles.mundial}>

        </div>
        </div>
  
      <footer>
<Infof />
      </footer>
    </>
  );
};

export default Home;
