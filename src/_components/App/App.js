import React from 'react';
import './App.scss';
import { moviesData } from '../../moviesData';
import MovieItem from '../MoovieItem/MovieItem';
import { API_URL, API_KEY_3 } from '../../api';
import MovieTabs from '../MovieTabs/MovieTabs';
import Paginataon from '../Paginataon/Paginataon';

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      movies: moviesData,
      moviesToWillWatch: [],
      sort_by: 'popularity.desc',
      page: 300
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru&sort_by=${this.state.sort_by}&page=${this.state.page}`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({
          movies: data.results
        })
      })
  }

  componentDidUpdate( prevProps, prevState ) {

    if ( prevProps.sort_by !== this.state.sort_by ) {
      this.getMovies();
    } else if ( prevProps.page !== this.state.page ) {
      this.getCurrentPage();
    }
  };

  getMovies = () => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru&sort_by=${this.state.sort_by}&page=${this.state.page}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          movies: data.results
        });
      });
  };

  getCurrentPage = () => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&language=ru&sort_by=${this.state.sort_by}&page=${this.state.page}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          movies: data.results
        });
      });
  };

  removeMovie = (movie) => {
    const updateMovie = this.state.movies.filter((item) => {
      return item.id !== movie.id
    });
    this.setState({
      movies: updateMovie
    });
  };

  addMoviesToMoviesWatch = (movie) => {
    const updateMoviesToMoviesWatch = [...this.state.moviesToWillWatch, movie];
    // updateMoviesToMoviesWatch.push(movie);

    this.setState({
      moviesToWillWatch: updateMoviesToMoviesWatch
    });
  };

  removeMovieFromWillWatch = (movie) => {
    const updateMoviesToMoviesWatch = this.state.moviesToWillWatch.filter((item) => {
      return item.id !== movie.id
    });
    this.setState({
      moviesToWillWatch: updateMoviesToMoviesWatch
    });
  };

  updateSortBy = (value) => {
    this.setState({
      sort_by: value
    });
  };

  updateCurrentPage = (value) => {
    this.setState({
      page: value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <h2 className="title">Films list</h2>
            <div className="row">
              <div className="col-9">
                <div className="row">
                  <div className="row">
                    <div className="col-12">
                      <Paginataon page={this.state.page} updateCurrentPage={this.updateCurrentPage} />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-12">
                      <MovieTabs sort_by={this.state.sort_by} updateSortBy={this.updateSortBy} />
                    </div>
                  </div>
                  {this.state.movies.map((movie) => {
                    return (
                      <div className="col-6" key={movie.id}>
                        <MovieItem movie={movie} removeMovie={this.removeMovie} addMoviesToMoviesWatch={this.addMoviesToMoviesWatch}
                          removeMovieFromWillWatch={this.removeMovieFromWillWatch} />
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="col-3">
                <p>Will Watch: {this.state.moviesToWillWatch.length}</p>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }

}

export default App;
