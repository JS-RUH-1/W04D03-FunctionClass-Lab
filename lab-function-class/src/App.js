import "./App.css";
// import FunctionalHelloWorld from "./components/FunctionalHelloWorld";
import ClassHelloWorld from "./components/ClassHelloWorld";

function App() {
  return (
    <div className="App">
      {/*<FunctionalHelloWorld name="majeed" />*/}
      <ClassHelloWorld name="majeed" />
    </div>
  );
}

export default App;
