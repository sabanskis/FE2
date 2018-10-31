import React from 'react';
import axios from 'axios';
import Card from './Card';
import { endpoints } from '../../config';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movieList: [],
      genresList: [],
    };

    this.requestMovies();
    this.requestGenres();
  }

  requestMovies = () => {
    axios
      .get(endpoints.genreMovies())
      .then((res) => this.setMovieList(res.data.results))
      .catch((error) => console.log(error));
  };

    requestGenres = () => {
        axios
            .get(endpoints.genres())
            .then((res) => this.setGenresList(res.data.results))
            .catch((error) => console.log(error));
    };



  setMovieList = (movieList) => {
    this.setState({
      movieList,
    })
  };


    setGenresList = (genresList) => {
        this.setState({
            genresList,
        })
    };

  render() {

    const { movieList, genresList } = this.state;


    console.log(movieList);
    console.log(genresList);
    return (
      <div className="cards">
        {movieList.map((movie) => <Card movie={movie} />)}
      </div>
    );
  }
}
