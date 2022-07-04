import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import Router from './Router/Router';


function App() {
  return (
    <div className="App">
      <Header/>
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
