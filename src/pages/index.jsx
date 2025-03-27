import { solarSystem } from "@/constants/solarSystem";
import styles from "@/styles/solar-system.module.css";
import { BackgroundGalaxyImage, Orbit, Sun } from "@/components";

const Homepage = () => {
  return (
    <div className={styles.mainContainer}>
      <BackgroundGalaxyImage />

      <div className={styles.solarSystem}>
        <Sun />

        {solarSystem.map((orbit, index) => (
          <Orbit key={index} {...orbit} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
