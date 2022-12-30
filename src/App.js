import './App.css';
import {Navigation} from "./components/Navigation";
import {Banner} from "./components/Banner";
import {Skills} from "./components/Skills"
import 'bootstrap/dist/css/bootstrap.min.css';
import {CoverScreen} from "./components/CoverScreen";

function App() {
  return (
    <div className="App">
        <CoverScreen/>
        <Navigation/>
        <Banner/>
        <Skills/>
    </div>
  );
}

export default App;
