import "./Detail.css";
import { useParams } from "react-router";
import { data as animalData } from "../assets/data/data";

export default function Detail() {
  const { id } = useParams();

  const animal = animalData.filter((element) => element.id === Number(id))[0];

  return (
    <>
      {animal ? (
        <div className="animal-detail-box">
          <img src={animal.img} className="animal-detail-box__image" />
          <div className="animal-detail-text-box">
            <h2 className="animal-detail-text-box__title">{animal.name}</h2>
            <p className="animal-detail-text-box__description">
              {animal.description}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
