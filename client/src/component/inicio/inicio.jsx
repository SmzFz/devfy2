import styles from "./inicio.module.css"
import logo from "../../assets/product/icon-spotify.svg"
import casa from "../../assets/product/casa.svg"
import pesquisa from "../../assets/product/pesquisa.svg"

const Inicio = () => {
  return (
    <div className={styles.container}>
        <div className={styles.spotify}>
<img src={logo} alt="" />
        </div>
        <div className={styles.inicioz}>
        <img src={casa} alt="" />
        <p>Início</p>
        </div>
        <div className={styles.buscar}>
        <img src={pesquisa} alt="" />
        <p>Buscar</p>
        </div>
        </div>
  )
}

export default Inicio