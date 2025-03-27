import styles from "@/styles/solar-system.module.css";

export const Orbit = ({
  imageUrl,
  orbit,
  orbitPeriod,
  planetSize,
  rotationPeriod,
}) => {
  return (
    <div
      className={styles.orbit}
      style={{
        width: orbit,
        height: orbit,
        "--orbit-period": orbitPeriod,
      }}
    >
      <div
        className={styles.planet}
        style={{
          width: planetSize,
          height: planetSize,
          "--planet-period": rotationPeriod,
        }}
      >
        <img
          src={imageUrl}
          alt=""
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};
