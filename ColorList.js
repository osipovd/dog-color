import React from 'react';
import { Link } from 'react-router-dom';

function ColorList({ colors }) {
  return (
    <div>
      <h1>Welcome to the color factory.</h1>
      <Link to="/colors/new">Add a color</Link>
      <ul>
        {colors.map((colorObj, i) => (
          <li key={i}>
            <Link to={`/colors/${colorObj.name}`}>{colorObj.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ColorList;









