import React, {Component} from 'react';

class MovieDetails extends Component{
  render(){
    const profiles = this.props.movieProfiles;
    const movie = this.props.movie;
    const isPopular = profiles.length > 0;
    console.log(movie.id,profiles, isPopular);
    if (!isPopular) {
      return (
        <div>
        	<h2 key = {movie.id}>{movie.name}</h2>
      		<NotPopularMovie/>
        </div>
      )
    }
    
    return (
      <h2 key = {movie.id}>{movie.name}</h2>
      		//<MovieDetails />
    )
 // }
 // return <div></div>;     
  }
}

function NotPopularMovie(){
  return <p>None of the current users liked this movie</p>
}
export default MovieDetails;