import "./App.css";
import Counter from "./Counter";
import Users from "./Users";
import CoreConcept from "./CoreConcept";
function App() {
  function handleClick() {
    alert("First clicked");
  }
  const handleClickMe = () => {
    alert("Second clicked");
  };
  return (
    <>
      <h3> React Core Concepts</h3>
      <Users></Users>
      <CoreConcept></CoreConcept>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me 1</button>
      <button onClick={handleClickMe}>Click Me 2</button>
      <button
        onClick={() => {
          alert("Third Clicked");
        }}
      >
        Click Me 3
      </button>
    </>
  );
}

export default App;
