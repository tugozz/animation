import Image from "next/image";

export const Sun = () => {
  return (
    <div style={{ position: "relative", width: "80px", height: "80px" }}>
      <Image
        src="/sun.png"
        alt="sun"
        fill
        style={{
          objectFit: "contain",
        }}
        priority
      />
    </div>
  );
};
