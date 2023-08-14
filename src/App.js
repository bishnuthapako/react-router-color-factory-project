import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import AddColor from './page/AddColor';
import Color from "./page/Color"
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const INITIAL_COLOR = [
  {
    id: uuid(),
    name: "pink",
    color: "pink"
  },
  {
    id: uuid(),
    name: "green",
    color: "green"
  }
]

function App() {
  const [colorName, setColorName] = useState(INITIAL_COLOR);

  function addNewColor(newColor) {
    setColorName(prev => [{ id: uuid(), ...newColor }, ...prev]);
  }
  

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navigate to="/colors" />} />
        <Route path="/colors" element={<Home colorName={colorName} />} />
        <Route path="/new" element={<AddColor addNewColor={addNewColor} />} />
        <Route path="/colors/:color" element={<Color colorName={colorName} />} />
        <Route path="*" element={<Navigate to="/"/>}/>
      </Routes>
    </div>
  );
}

export default App;
