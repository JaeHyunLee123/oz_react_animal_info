//@ts-check
import { NavLink, useNavigate } from "react-router";
import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  /**
   *
   * @param {Event} e
   */
  const onSeachButtonClick = (e) => {
    e.preventDefault();

    navigate(`/search/${search}`);
  };

  return (
    <header className="header">
      <NavLink to="/" className="header__title">
        동물 위키
      </NavLink>
      <form className="search-form">
        <input
          className="search-form__input"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="동물 이름으로 검색"
        />
        <button
          className="search-form__button"
          // @ts-ignore
          onClick={onSeachButtonClick}
        >
          검색
        </button>
      </form>
    </header>
  );
}
