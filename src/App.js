import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleClick = () => {
    alert("This is button click");
  };
  return (
    <div className="App">
      <button id="clickBtn" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

export default App;
