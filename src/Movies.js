import React, {Component} from 'react';
import MovieDetails from './MovieDetails';

class Movies extends Component{
  render(){
    const movies = GetMoviesArray(this.props.movies);    
    return(   
      <div>
      	{ movies.map((movie)=>(
      		<MovieDetails movieProfiles = {this.props.profiles.filter(p => p.favoriteMovieID === movie.id.toString())} movie = {movie} users = { this.props.users}/>
    	))} 
	</div>  
      )
  }
}

function GetMoviesArray(moviesObject){
  let movies = [];
  for (let i = 1; i < 6; i++) {
  		let movie = moviesObject[i];    
    	movies.push(movie);
	}
  return movies;
}

function NotPopularMovie(){
  return <p>None of the current users liked this movie</p>
}

export default Movies;