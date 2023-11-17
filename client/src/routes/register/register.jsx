import React from "react";
import styles from "./register.module.css";
import logo from "../../assets/product/icon-spotify.svg"




const Register = () => {
  return (
    <div className={styles.geral}>
      <div className={styles.navc}>

<div className={styles.logo}>

      <img src={logo} alt=""  width={130}/>
</div>
      </div>

<div className={styles.container}>
<div className={styles.login}>
<h1>Entrar no Spotify</h1>
</div>

</div>
    
      



    </div>
  );
};

export default Register;
