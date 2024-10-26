import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import { SlideBottom } from '../../utility/animation';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  return (
    <>
      <nav className="container flex flex-row justify-around items-center py-4 md:py-8 uppercase font-semibold relative z-20 text-xs md:text-lg">
        <motion.div
          variants={SlideBottom(0)}
          initial="hidden"
          animate="visible"
        >
          <Link to="#">About</Link>
        </motion.div>
        <motion.div
          variants={SlideBottom(0.2)}
          initial="hidden"
          animate="visible"
        >
          <Link to="#">Explore</Link>
        </motion.div>
        <motion.div
          variants={SlideBottom(0.4)}
          initial="hidden"
          animate="visible"
        >
          <Link to="#">
            <img src={Logo} alt="logo" className="w-14" />
          </Link>
        </motion.div>
        <motion.div
          variants={SlideBottom(0.6)}
          initial="hidden"
          animate="visible"
        >
          <Link to="#">Journal</Link>
        </motion.div>
        <motion.div
          variants={SlideBottom(0.8)}
          initial="hidden"
          animate="visible"
        >
          <Link to="#">Search</Link>
        </motion.div>
      </nav>
    </>
  );
};
