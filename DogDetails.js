import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

const DogDetails = ({ dogs }) => {
  const { name } = useParams();

  const dog = dogs.find((dog) => dog.name.toLowerCase() === name.toLowerCase());

  if (!dog) {
    return <Redirect to="/dogs" />;
  }

  return (
    <div>
      <h2>{dog.name}</h2>
      <h4>Age: {dog.age}</h4>
      <h4>Facts:</h4>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default DogDetails;


