import Header from "../components/Header";
import Banner from "../Assets/Banner.png";
import Carousel from "../components/CarouselSize";
import builds from "../Assets/builds.png"
import msilaptops from "../Assets/msilaptops.png"

export default function Home() {
  return (
    <>
      <Header />
      <img src={Banner} alt="Banner" />
      <Carousel/>
      <img src={builds} alt="Costume Builds" />
      <img src={msilaptops} alt="Laptops" />
    </>
  );
}
