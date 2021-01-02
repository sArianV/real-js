import './App.css';
import '@fontsource/roboto';

//import Material ui
import Grid from '@material-ui/core/Grid';


//import componentes
import Navbar from './components/navbar/Navbar';


require('pretty-error').start();


function App() {
  return (
    <div className="App">
      <Grid container xs={12} spacing={0}>
        <Navbar />


      </Grid>
    </div>
  );
}

export default App;
