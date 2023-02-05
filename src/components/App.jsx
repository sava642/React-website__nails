import '../index.css';
//import Carousel from './Carousel/Carousel';
import Reviews from './Reviews';
import ContactUs from './ContsctUs';
import Footer from './Footer';
import Header from './Header';
import School from './School';
import Info from './Info';
import { useState } from 'react';
import Burger from './Burger';
import Schedule from './Schedule';


export const App = () => {
  const [isActive, setActive] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [enroll, setEnroll] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="wrapper">
      <Burger isActive={isActive} setActive={setActive} />
      <Header toggleClass={toggleClass} isActive={isActive} />
      <main className="main__container main">
        <School setIsOpen={setIsOpen} isOpen={isOpen} />
        <Info />
        <Schedule isOpenInfo={isOpenInfo} setIsOpenInfo={setIsOpenInfo} enroll={enroll} setEnroll={setEnroll} />
        <Reviews />
        <ContactUs />
      </main >
      <Footer />
    </div >
  );
};
