import './App.scss';
import Content from './components/Content';
import Ctr from './components/Ctr';
import Feature from './components/Feature';
import Header from './components/Header';
import Logo from './components/Logo';
import Nav from './components/Nav';
import Blog from './components/Blog';
import WhatIsGtp from './components/WhatIsGtp';
import Footer from './components/Footer';
import Cards from './components/Cards';
import Client from './components/Client';
import Connect from './components/Connect';
import Faq from './components/Faq';

function App() {

  return (
    <div className="App">
      <Nav />
      <Header />
      <Logo />
      <WhatIsGtp />
      <Feature />
      <Cards />
      <Client />
      <Connect />
      <Faq />



      {/* <Content />
      <Ctr />
      <Blog /> */}
      <Footer/>
    </div>
  );
}

export default App;

