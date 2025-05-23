//@ts-check
import "./SearchResult.css";
import { getRegExp } from "korean-regexp";
import { useParams } from "react-router";
import { data as animalData } from "../assets/data/data";
import AnimalCard from "../components/AnimalCard";

export default function SeachResult() {
  const { search } = useParams();

  const searchRegex = getRegExp(search || "", {
    initialSearch: true,
    startsWith: false,
    endsWith: false,
    ignoreSpace: true,
    ignoreCase: true,
    global: true,
  });

  const animalResults = animalData.filter((animal) =>
    searchRegex.test(animal.name)
  );

  return (
    <div className="search-result">
      {animalResults.length > 0 ? (
        animalResults.map((animal) => (
          <AnimalCard animal={animal} key={animal.id} />
        ))
      ) : (
        <span>검색 결과가 없습니다</span>
      )}
    </div>
  );
}
