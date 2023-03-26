import './App.scss';
import Feature from './components/Feature';
import Header from './components/Header';
import Logo from './components/Logo';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Client from './components/Client';
import Connect from './components/Connect';
import Faq from './components/Faq';
import Quality from './components/Quality';

function App() {

  return (
    <div className="App">
      <Nav />
      <Header />
      <Logo />
      <Quality />
      <Feature />
      <Cards />
      <Client />
      <Connect />
      <Faq />
      <Footer/>
    </div>
  );
}

export default App;

