import styles from "./midia.module.css"
import Cardm from "../cardm/cardm";

const Midia = () => {
  return (
    <div className={styles.container}>
        <div className={styles.superior}>

        <div className={styles.escrito}>
            <h2>Spotify Playlists</h2>
        </div>
            <div className={styles.escrito2}>
<p>Show all</p>

            </div>
            <div className={styles.catalogos}>

<Cardm />
            </div>
        </div>
        <div className={styles.inferior}>

        <div className={styles.escrito}>
            <h2>Great first audiobooks</h2>
        </div>
            <div className={styles.escrito2}>
<p>Show all</p>

            </div>
        </div>
    </div>
  )
}

export default Midia