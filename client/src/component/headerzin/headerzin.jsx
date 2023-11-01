import styles from "./headerzin.module.css"
import sr from "../../assets/product/seta-right.svg"
import sl from "../../assets/product/seta-left.svg"

const Headerzin = () => {
  return (
    <div className={styles.container}>
    <div className={styles.header}>
    <img src={sl} alt="" />
    <img src={sr} alt="" />
    </div>

    </div>
  )
}

export default Headerzin