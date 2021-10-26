import './App.css';
import HelloF from './components/HelloFunction';
import HelloC from './components/HelloClass';


function App() {
  return (
    <div className="App">
      <div className="App-header">
          <HelloF name="Ahmad" />
          <HelloC name="Khaled" />
      </div>
    </div>
  );
}

export default App;
