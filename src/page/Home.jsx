//@ts-check

import { data as animalData } from "../assets/data/data";
import "./Home.css";
import AnimalCard from "../components/AnimalCard";

function Home() {
  return (
    <div className="home">
      <div className="animal-data-box">
        {animalData.map((animal) => (
          <AnimalCard animal={animal} key={animal.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
