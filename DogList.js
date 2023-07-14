import React from 'react';
import { Link } from 'react-router-dom';

const DogList = ({ dogs }) => {
  return (
    <div>
      {dogs.map((dog) => (
        <div key={dog.name}>
          <h3>{dog.name}</h3>
          <Link to={`/dogs/${dog.name.toLowerCase()}`}>
            {dog.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DogList;



