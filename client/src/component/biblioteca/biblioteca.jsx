import styles from "./biblioteca.module.css"
import library from "../../assets/product/library.svg"
import mais from "../../assets/product/mais.svg"

const Biblioteca = () => {
  return (
    <div className={styles.container}>
   <div className={styles.library}>
<img src={library} alt="" />
<p>Sua Biblioteca</p>
<img src={mais} alt="" />
   </div>
   <div className={styles.info1}>
    <h2>Crie sua primeira playlist</h2>
    <p>É fácil, vamos te ajudar</p>

        <button>Criar playslist</button>



   </div>
   <div className={styles.info2}>
   <h2>Que tal seguir um podcast novo?</h2>
    <p>Avisaremos você sobre novos episódios</p>

        <button>Explore podcast</button>

</div>
    </div>
  )
}

export default Biblioteca