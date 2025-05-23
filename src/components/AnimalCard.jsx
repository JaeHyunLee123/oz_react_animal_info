//@ts-check

import { NavLink } from "react-router";
import "./AnimalCard.css";

/** @typedef {import("../types").AnimalData} AnimalData */

/**
 *  @typedef {Object} AnimalCardProps
 *  @property {AnimalData} animal
 */

/**
 *
 * @param {AnimalCardProps} props
 */
export default function AnimalCard({ animal }) {
  return (
    <NavLink className="animal-card" to={`/detail/${animal.id}`}>
      <h2 className="animal-card__title">{animal.name}</h2>
      <img className="animal-card__image" src={animal.img} width={150} />
    </NavLink>
  );
}
