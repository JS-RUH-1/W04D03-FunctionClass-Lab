//import logo from './logo.svg';
import './App.css';
import FHW from './components/FunctionalHelloWorld'
import CHW from './components/ClassHelloWorld'
import LCM from './components/LifeCycleMethods'
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <LCM></LCM>
      <FHW name="PERSON ONE"></FHW>
      <CHW name="SECOND PERSON"></CHW>
      </header>
    </div>
  );
}

export default App;
