import { Header } from '../Components/Header'
import Banner from '../Assets/Banner.png'

export const App: React.FC = () => {
  return (
    <>
      <Header/>
      <img src={Banner} alt="Banner"/>
      <h2 className='font-semibold'>Novos Produtos</h2>
      <p></p>
    </>
  );
};
