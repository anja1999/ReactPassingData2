import React, {Component} from 'react';

class MovieDetails extends Component{
  render(){
    const profiles = this.props.movieProfiles;
    const movie = this.props.movie;
    const isPopular = profiles.length > 0;
    const users = this.props.users;
    if (!isPopular) {
      return (
        <div>
        	<h2 key = {movie.id}>{movie.name}</h2>
      		<NotPopularMovie/>
        </div>
      )
    }
    
    return (
     <div>
      <h2 key = {movie.id}>{movie.name}</h2>
	  <p>Liked By:</p>
      <PopularMovieDetails profiles={profiles}  users = {users}/>
  </div>
    )   
  }
}

function NotPopularMovie(){
  return <p>None of the current users liked this movie</p>
}

function PopularMovieDetails(props){ 
  return (
    <ol className = 'contact-list'>
    	{  props.profiles.map((profile)=> (<li>{props.users[profile.userID].name})</li> 
	))
    }
    </ol>
  )

}
export default MovieDetails;