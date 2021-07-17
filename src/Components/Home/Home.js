import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../Movies/Movie";
import { saveAs } from "file-saver";
import { Container } from "react-bootstrap";
// import Dropdownbox from "../GlobalComponents/Dropdown";

export default function Home() {
  const [MoviesList, setMoviesList] = useState([]);
  const [Id, setId] = useState("");
  console.log(Id);
  useEffect(() => {
    axios
      .get("http://localhost:3000/getmovies")
      .then((res) => {
        setMoviesList(res.data);
        console.log(MoviesList);
      })
      .catch((err) => console.log(err));
  }, []);

  const playvideo = () => {
    axios
      .post("http://localhost:3000/getmovie", { id: Id })
      .then((res) => {
        var file = res.data;
        saveAs(res);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const movies = () =>
    MoviesList.map((moviedata, i) => {
      return (
        <div key={i++}>
          <Movie playvideo={playvideo} setId={setId} data={moviedata} />
        </div>
      );
    });

  return (
    <Container className="mt-3">
      <div className="d-flex flex-wrap justify-content-around">
        {movies()}
        {movies()}
        {movies()}
      </div>
    </Container>
  );
}
