import React from "react";
import Movie from "../Movie/movie";
import ModalMovie from "../ModalMovie/modalMovie";
import { useState } from "react";

export default function MovieList({ trendingMovie }) {
  const [show, setShow] = useState(false);
  const [chosenRecipe, setChosenRecipe] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function handelChosenMovie(data) {
    setChosenRecipe(data);
    handleShow();
  }
  return (
    <>
      {
      trendingMovie.map(trend => {
        return (
          <>
            <Movie trend={trend} handelChosenMovie={handelChosenMovie} />
          </>
        );
      })}
      {chosenRecipe && (
        <ModalMovie
          movies={chosenRecipe}
          show={show}
          handleClose={handleClose}
        />
      )}
    </>
  );
}
