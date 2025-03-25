import Image from "next/image";
import styles from "@/styles/solar-system.module.css";

export const Orbit = ({ name, image, orbitRadius, rotationDuration, size }) => {
  return (
    <div
      className={styles.orbit}
      style={{
        width: `${orbitRadius * 2}px`,
        height: `${orbitRadius * 2}px`,
        animation: `rotate ${rotationDuration}s linear infinite`,
      }}
    >
      <div className={styles.planet}>
        <div
          style={{
            position: "relative",
            width: `${size}px`,
            height: `${size}px`,
          }}
        >
          <Image
            src={image}
            alt={name}
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>
    </div>
  );
};
