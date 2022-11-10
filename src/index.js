import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie2 from './pages/Movie2';
import Movie3 from './pages/Movie3'; 
import Movie4 from './pages/Movie4'; 
import Movie5 from './pages/Movie5'; 
import Layout from './pages/Layout'; 
import Home from './pages/Home';
import './App.css';
import tree from './images/tree.jpg';

export default function App() {
  return (

	<div style={{ backgroundImage:`url(${tree})`,backgroundRepeat:"repeat" }}>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Movie2" element={<Movie2 />} />
          <Route path="/Movie3" element={<Movie3 />} />
          <Route path="/Movie4" element={<Movie4 />} />	
		  <Route path="/Movie5" element={<Movie5 />} />	
        </Route>
      </Routes>
    </BrowserRouter>	
	
	</div>

  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);