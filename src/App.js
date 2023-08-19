import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import AddColor from "./page/AddColor";
import Color from "./page/Color";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [colors, setColors] = useState([]); // Renish: {id:'', name: '', color: ''}

  // Renish: Load from LS, only one time at the beginning
  useEffect(() => {
    const colors = JSON.parse(localStorage.getItem("colors"));
    if (colors) {
      setColors(colors);
    }
  }, []); // Renish: Note [] array cause only one time to run this function.

  function addNewColor(name, color) {
    // Renish: Update State and LocalStorage at the same time.
    setColors((prev) => {
      const updatedColors = [{ id: uuid(), name, color }, ...prev];
      localStorage.setItem("colors", JSON.stringify(updatedColors));
      return updatedColors;
    });
  }

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navigate to="/colors" />} />
        <Route path="/colors" element={<Home colors={colors} />} />
        <Route path="/new" element={<AddColor addNewColor={addNewColor} />} />
        <Route path="/colors/:color" element={<Color colors={colors} />} />
        {/* <Route path="*" element={<Navigate to="/"/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
