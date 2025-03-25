import { solarSystem } from "@/constants/solarSystem"; // Make sure to create this
import styles from "@/styles/solar-system.module.css";
import { BackgroundGalaxyImage, Orbit, Sun } from "@/components";

const Homepage = () => {
  return (
    <div className={styles.mainContainer}>
      <BackgroundGalaxyImage />

      <div className={styles.solarSystem}>
        <Sun />

        {solarSystem.map((orbitValues) => (
          <Orbit key={orbitValues.name} {...orbitValues} />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
