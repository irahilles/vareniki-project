import styles from "./AboutUs.module.css";
import about from '../assets/about.jpg'

export default function AboutUs() {
  return (
    <section id="about" className={styles.about}>
      <p className={styles.eyebrow}>Our story</p>
      <h2>Made with care, inspired by home.</h2>
      <p className={styles.story}>
        We started with a simple idea: to share the comforting taste of
        homemade vareniki and pelmeni as well as chebureky. Each bite brings together familiar
        flavors and the warmth of a meal made to be shared.
          </p>
          <img
  className={styles.photo}
  src={about}
  alt="Homemade vareniki ready to share"
/>
    </section>
  );
}