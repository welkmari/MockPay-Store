import { Header } from "../Components/Header";
import Banner from "../Assets/Banner.png";
import Carrousel from "../Components/Carrousel";

export default function Home() {
  return (
    <>
      <Header />
      <img src={Banner} alt="Banner" />
      <Carrousel/>
    </>
  );
}
