import { useState } from "react";

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']

const SearchParams = () => {
  const [location, setLocation] = useState("")
  const [animal, setAnimal] = useState("")
  const [breed, setBreed] = useState('')
  const breeds = [];

  const handleAnimalChange = (e) => {
    setAnimal(e.target.value)
    setBreed("")
  }
  const handleBreedChange = (e) => {
    setBreed(e.target.value)
  }
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location} placeholder="Location" onChange={(e) => setLocation(e.target.value)} />
        </label>
        <label htmlFor="animal">
          Animal
          <select id='animal' value={animal} onChange={handleAnimalChange} onBlur={handleAnimalChange}>
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>{animal}</option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select disabled={!breeds.length} id="breed" value={breed} onChange={handleBreedChange} onBlur={handleBreedChange}>
            <option />
            <option>
              {breeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default SearchParams;
