import { Outlet, Link } from "react-router-dom";
import './../App.css';
import top from './../images/top.jpg';

const Layout = () => {
  return (
    <>
	
	
     

	  <div className="Box" style={{ backgroundImage:`url(${top})`,backgroundRepeat:"repeat" }}>MOVIE LISTING - AVATAR
	  </div>
		
      <div className="Menu">

        <span>
          <Link to="/Movie2"> AVATAR 1</Link> #
        </span>	  	
        <span>
          <Link to="/Movie3"> AVATAR 2</Link> # 
        </span>
        <span>
          <Link to="/Movie4"> AVATAR 3</Link> #
        </span>	
        <span>
          <Link to="/Movie5"> AVATAR 4</Link>
        </span>			

      </div>
	  
	 
	  
      <Outlet />
	  
	  	  
    </>
  )
};

export default Layout;
