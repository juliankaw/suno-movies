import styles from "./styles.module.scss";
import img from "../../images/image-movie.png";
import { AiFillStar } from "react-icons/ai";

export function Releases() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <h2>
          Lançamentos <span>da semana</span>
        </h2>
        <section>
          <div>
            <img src={img} alt="follow me" />
            <h3>Follow me</h3>
            <h4>Suspense, terror</h4>
            <div className={styles.rate}>
              <AiFillStar />
              <p>8.4</p>
            </div>
          </div>
          <div>
            <img src={img} alt="follow me" />
            <h3>Follow me</h3>
            <h4>Suspense, terror</h4>
            <div className={styles.rate}>
              <AiFillStar />
              <p>8.4</p>
            </div>
          </div>
          <div>
            <img src={img} alt="follow me" />
            <h3>Follow me</h3>
            <h4>Suspense, terror</h4>
            <div className={styles.rate}>
              <AiFillStar />
              <p>8.4</p>
            </div>
          </div>
          <div>
            <img src={img} alt="follow me" />
            <h3>Follow me</h3>
            <h4>Suspense, terror</h4>
            <div className={styles.rate}>
              <AiFillStar />
              <p>8.4</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
