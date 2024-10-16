import './App.css';
import Hero from './components/hero/Hero';
import Header from './components/header/Header';
import Featured from './components/featured/Featured';
import Recent from './components/recent/Recent';
import Awards from './components/awards/Awards';
import Location from './components/location/Location';
import Team from './components/team/Team';
import Price from './components/price/Price';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Header />
      <Hero/>
      <Featured/>
      <Recent/>
      <Awards />
      <Location />
      <Team />
      <Price />
      <Footer />

      {/* <Featured />
      <Recent />
      <Awards />
      <Location />
      <Team />
      <Price /> */}
    </>
  );
}

export default App;
