import { Hero } from '../../components/Hero/Hero';
import { Navbar } from '../../components/Navbar/Navbar';
import { Explore } from '../../components/Explore/Explore';
import Journal from '../../components/Journal/Journal';
import Footer from '../../components/Footer/Footer';
import HeroImg from '../../assets/hero.jpg';

const bgImage: React.CSSProperties = {
  backgroundImage: `url(${HeroImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  backgroundSize: 'cover',
  position: 'relative',
};

export const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden bg-brandDark text-white">
      <div style={bgImage}>
        <Navbar />
        <Hero />
      </div>
      <Explore />
      <Journal />
      <Footer />
    </div>
  );
};
