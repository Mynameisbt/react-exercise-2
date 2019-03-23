import React, {Component} from "react";
import MovieDescription from "./MovieDescription"

class MovieList extends Component {
  render() {
    const movies = this.props.movies;
    const moviesArray = [];
    for (var movieId in movies) {
     moviesArray.push(movies[movieId]);
    }
    
    const profiles = this.props.profiles;
    const users = this.props.users;
    return moviesArray.map((movie)=>{
      let usersFav = profiles.filter((profile) => profile.favoriteMovieID == movie.id);
      return <div>
          <h2>{movie.name}</h2>
     	  <MovieDescription userFavorite={usersFav} users={users}/>
       </div>
    });
  };
};

export default MovieList;