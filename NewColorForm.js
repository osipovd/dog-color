import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function NewColorForm({ addColor }) {
  const [color, setColor] = useState("#000000");
  const [name, setName] = useState("");
  let history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    if (!name) {
      alert('Please enter a color name');
      return;
    }
    addColor({ name, color });
    setName("");
    setColor("#000000");
    history.push("/colors");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Color Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      </label>
      <label>
        Choose a color:
        <input type="color" value={color} onChange={e => setColor(e.target.value)} required />
      </label>
      <button>Add this color</button>
    </form>
  );
}

export default NewColorForm;





