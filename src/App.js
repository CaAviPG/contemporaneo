import logo from './logo.svg';
import './App.css';
// import Card from './components/Card'
import Header from './components/Header'
import Home from './components/Home';
import Footer from './components/Footer';
import Banner from './components/Banner';

// import info from'./info.json'

function App() {
  // const nombre =
  return (
    <div className="container-fluid">
      <Header/>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido
        </p>

      <Home />
      <Footer/>
    </div>
  );
}

export default App;
