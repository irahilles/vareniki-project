import styles from './Hero.module.css';
import hero from '../assets/hero.jpg';

export default function Hero() {
    return (
        <section
  className={styles.hero}
  style={{ backgroundImage: `url(${hero})` }}
>
  <div className={styles.content}>
    <h1>A little taste of home, in every bite.</h1>
                <p>Handmade vareniki and pelmeni, ready for your table.</p>
                <a className={styles.menuLink} href="#menu"> Go To Menu </a>
  </div>
</section>
    )
}