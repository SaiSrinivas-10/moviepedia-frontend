import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Movie from "../Movies/Movie";
// import Dropdownbox from "../GlobalComponents/Dropdown";

export default function Home() {
  // const MoviesList = useRef([]);
  const [MoviesList, setMoviesList] = useState([1, 2, 3, 4]);
  // useEffect(async () => {
  //   const temp = await axios
  //     .get("http://localhost:3000/getmovies")
  //     .then((res) => {
  //       setMoviesList(res.data);
  //       console.log(MoviesList);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const movies = () => {
    var temp = [1, 2, 3, 4];
    temp.map((m) => {
      return <Movie />;
    });
  };
  return (
    <div>
      <Movie />
      {movies()}
    </div>
  );
}
