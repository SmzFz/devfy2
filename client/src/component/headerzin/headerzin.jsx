import styles from "./headerzin.module.css"
import sr from "../../assets/product/seta-right.svg"
import sl from "../../assets/product/seta-left.svg"
import { useNavigate } from "react-router-dom"




const Headerzin = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
    <div className={styles.header}>
    <img src={sl} alt="" />
    <img src={sr} alt="" />

    <div className={styles.login}> 
<p>Sign up</p>
<button onClick={() => navigate("/register")}>Login</button>



    </div>
    </div>

    </div>
  )
}

export default Headerzin