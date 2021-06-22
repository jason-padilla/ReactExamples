import React, {useState, useEffect} from 'react'

const PokeApi = (props) => {
  const [pokemon, setPokemon] = useState([]);
  const [clicked,setClicked] = useState(false);
  
  useEffect(() => {
    if (clicked) {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    }},[clicked]);

  const handleClicked = () => {
    if (!clicked) {
      setClicked(true);
    }
  }
  return (
    <div>
      <input onClick={handleClicked} type="button" value="Show Pokemon"/>
      {pokemon.length > 0 && pokemon.map((person, index)=> {
        return (<div key={index}>{person.name}</div>)})}
    </div>)
}

export default PokeApi;
