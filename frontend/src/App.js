import logo from './assets/images/logo.svg';
import './assets/css/App.css';

//import componentes
import Start from './components/Start';
import ShowArticle from './components/ShowArticle';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
      <section className="componentes">
        < Header/>
      </section>
    </div>
  );
}

export default App;
