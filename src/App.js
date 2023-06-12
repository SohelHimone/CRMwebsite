
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/HomePage';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Sales from './Pages/Sales';
import Experience from './Pages/Experience';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Sales/>
      <Experience/>
    </div>
  );
}

export default App;
