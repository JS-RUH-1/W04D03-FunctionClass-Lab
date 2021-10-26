import "./App.css";

import FunctionalHelloWorld from "./component/FunctionalHelloWorld";
import ClassHelloWorld from "./component/ClassHelloWorld";
function App() {
  return (
    <>
      <FunctionalHelloWorld name="Abdullah using function" />
      <ClassHelloWorld name="Abdullah Using class" />
    </>
  );
}

export default App;
