import './../App.css';
import avatar from './../images/avatar_eyes.jpg';
import flower from './../images/flower5.jpg';

const Home = () => {	
	
  return (
  <div className="Box1">
	
	    <span> <img alt="movie" className="ImageSmall" src={avatar} />	 </span> 
	    <span> <img alt="movie" className="ImageSmall" src={avatar} />	 </span>
	    <span> <img alt="movie" className="ImageSmall" src={avatar} />	 </span>	  
		
		<p>Title: Avatar Next Generation</p>		
		
		<p>Overview: A look behind the scenes - creating the landscape, flora and fauna of Pandora</p>
		
		<img alt="movie" className="Image" src={flower} />	

  </div>
  )
  
};

export default Home;

