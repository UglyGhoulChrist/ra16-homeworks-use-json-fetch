import "./App.css";
import ComponentData from "./components/ComponentData";
import ComponentError from "./components/ComponentError";
import ComponentLoading from "./components/ComponentLoading";

function App() {
  return (
    <div className="App">
      <ComponentData />
      <ComponentError />
      <ComponentLoading />
    </div>
  );
}

export default App;
