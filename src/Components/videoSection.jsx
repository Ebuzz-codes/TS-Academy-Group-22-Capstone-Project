import styles from "../Components/videoSection.css";
import video from "../assets/Planet.mp4";

export default function Astronomy() {
  return (
    <div className={styles.bodyWrapper}>

{/* The second section */}
        <section className={styles.section2}>
          <div>
            <video controls loop autoPlay muted>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className={styles.section2text}>
            <h2>How Planetary Data Helps Us Understand Space</h2>
            <p>
              Planetary science goes beyond images. Comparing{' '}
              <strong>mass, diameter, gravity,</strong> and{' '}
              <strong>density,</strong> we gain insight into how planets form,
              behave and interact within the solar system.
            </p>
          </div>
        </section>
        </div>
  );
}
