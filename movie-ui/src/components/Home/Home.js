import React, { useState, useEffect } from "react";
import Addmovie from "../AddMovie/Addmovie";
import classes from "./Home.module.css";
import MovieItem from "../MovieList/MovieItem";
import Card from "../UI/Card/Card";

import { getdata, AddMoive } from "../Endpoints/Endpoints";
const data = [
  {
    id: 1,
    movieName: "KGF",
    reviewComments: "Out of the box 5 start",
  },
  {
    id: 2,
    movieName: "Beastupdated",
    reviewComments: "the best acting from vijay and poja ",
  },
  {
    id: 4,
    movieName: "Lovemoktail2",
    reviewComments: "the best moive",
  },
];

const Home = (props) => {
  const [movieList, setMovie] = useState([]);

  useEffect(() => {
    // getdata().then((response) => {
    //   setMovie(response.movies);
    // });

    setMovie(data);
  }, []);

  const HandleAddMovie = (movie) => {
    //
    console.log(movie);
    AddMoive(movie).then((response) => {
      if (response.status == 2) {
        setMovie((prev) => {
          return [{ ...movie, id: response.id }, ...prev];
        });
      }
    });

    // and plese inser the id do't forget
  };

  const HandleDelete = (id) => {
    // call the delete api
    deleteMovie(id).then((res) => {
      if (res.status == 5) {
        const filterdmovie = movieList.filter((x) => x.id != id);
        setMovie(filterdmovie);
      }
    });
  };

  return (
    <React.Fragment>
      <Addmovie HandleAddMovie={HandleAddMovie} />
      {movieList.length > 0 && (
        <Card className={classes.container}>
          {movieList.map((item) => (
            <MovieItem key={item.id} item={item} HandleDelete={HandleDelete} />
          ))}
        </Card>
      )}
    </React.Fragment>
  );
};

export default Home;
