import { uesState, useEffect, useState } from "react";
import "./App.css";
import CardComp from "./CardComp"

function App() {
  const [data, setData] = useState();
  const fetchData = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  };
  // useEffect(() => {
  //   fetchData()
  //   console.log("data",data)
  // }, []);
  const handleClick = () => {
    fetchData();
  };
  console.log("data", data);
  return (
    <div className="App">
      <button id="clickBtn" onClick={handleClick}>
        Get Products
      </button>
      <div style={{margin:"auto",padding:"30px",display:"flex",flexWrap: "wrap", gap:"40px"}}>
      {data &&
        data.map((item, id) => {
          return (
              <CardComp key={id} details={item}  />
          );
        })}
        </div>
    </div>
  );
}

export default App;
