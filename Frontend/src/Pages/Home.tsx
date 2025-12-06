import Header from "../components/Header";
import Banner from "../Assets/Banner.png";
import Carousel from "../components/CarouselSize";

export default function Home() {
  return (
    <>
      <Header />
      <img src={Banner} alt="Banner" />
      <Carousel/>
    </>
  );
}
