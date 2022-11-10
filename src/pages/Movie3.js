import React from 'react';
import axios from 'axios';

class Movie3 extends React.Component {
	
  constructor() {
    super();
    this.state = {
	  title: '',
      overview: '',
	  imageurl: ''	  

    };
  }
  
componentDidMount() {  

    axios.get('https://api.themoviedb.org/3/search/movie?api_key=5f6907c45589a114e83c963b14160d13&query=avatar&language=en-US&page=1&include_adult=false')
      .then(response => {
        this.setState({title: response.data.results[0].title});
	    this.setState({overview: response.data.results[0].overview});
		this.setState({imageurl: response.data.results[0].poster_path})
      })	  
      .catch(function (error) {
        console.log(error);
      });	

	  
	  
  }

  render() {
    return (
	
      <div className="Box1">  
	  
	    <span> <img alt="movie" className="ImageSmall" src={"https://image.tmdb.org/t/p/w500"+ this.state.imageurl } />	 </span> 
	    <span> <img alt="movie" className="ImageSmall" src={"https://image.tmdb.org/t/p/w500"+ this.state.imageurl } />	 </span>
	    <span> <img alt="movie" className="ImageSmall" src={"https://image.tmdb.org/t/p/w500"+ this.state.imageurl } />	 </span>	  
		
		<p>Title: {this.state.title}</p>		
		
		<p>Overview: {this.state.overview}</p>
		
		<img alt="movie" className="Image" src={"https://image.tmdb.org/t/p/w500"+ this.state.imageurl } />	
		
      </div>
	  
    );
  }
  
};

export default Movie3;





