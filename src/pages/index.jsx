import { Container } from "@/components/Container";

const HomePage = () => {
  return (
    <div>
      <img src="/galaxy.webp" alt="galaxy" className="galaxy" />
      <div className="solarSystem">
        <img src="/sun.png" alt="sun" className="sun" />
        <img src="/mercury.png" alt="mercury" className="mercury" />
        <img src="/venus.png" alt="venus" className="venus" />
        <img src="/earth.png" alt="earth" className="earth" />
        <img src="/mars.png" alt="mars" className="mars" />
        <img src="/jupiter.png" alt="jupiter" className="jupiter" />
        <img src="saturn.png" alt="saturn" className="saturn" />
        <img src="uranus.png" alt="uranus" className="uranus" />
        <img src="neptune.png" alt="neptune" className="neptune" />
      </div>
      <Container />
    </div>
  );
};

export default HomePage;
