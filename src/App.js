import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { CustomCard } from "./Components/card/CustomCard";
import { SearchForm } from "./Components/form/SearchForm";
import { MovieList } from "./Components/movie-list/MovieList";
import { TItle } from "./Components/Title/TItle";
import { fetchMovie } from "./Helper/axiosHelper";
import { RandomGenerator } from "./Helper/randomGenerator";

function App() {
  const [movieList, setList] = useState({});
  const [movieLists, setMovieLists] = useState([]);

  useEffect(() => {
    const char = RandomGenerator();
    getMovie(char);
  }, []);

  const getMovie = async (search) => {
    const { data } = await fetchMovie(search);
    console.log(data);
    setList(data);
  };

  const addToMovieList = (type) => {
    // const mv = { ...movieList, cat: type };
    setMovieLists([...movieLists, { ...movieList, cat: type }]);
    setList({});
  };

  const handelOnDelete = (imdbID) => {
    const filterFromList = movieLists.filter(
      (movie, i) => movie.imdbID !== imdbID
    );
    setMovieLists(filterFromList);
  };

  return (
    <div className="wrapper">
      <Container>
        <TItle />
        <SearchForm getMovie={getMovie} />
        {movieList?.imdbID && (
          <CustomCard movieObj={movieList} func={addToMovieList} />
        )}

        <hr />
        <MovieList movieLists={movieLists} handelOnDelete={handelOnDelete} />
      </Container>
    </div>
  );
}

export default App;
