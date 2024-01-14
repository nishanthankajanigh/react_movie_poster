import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import img1 from '../assets/img1.png'; 
import img2 from '../assets/img2.png'; 
import img3 from '../assets/img3.png'; 
import img4 from '../assets/img4.png'; 
import img5 from '../assets/img5.png'; 
import { Link } from "react-router-dom";






const Movie = () => {
    return (
        <>
        <div>
        <h1>Welcome to Movie Page </h1>
        <p>name of the image</p>
      
        <p>LLLLLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            
        </div>

        
        <table >
        <tr className='movie_name'>
            <td> <Link to="MovieImagePop1" > Die Harder</Link></td>
            <td> <Link to="MovieImagePop2" > Blade Runner</Link></td>
            <td> <Link to="MovieImagePop3"> Iorn Man</Link></td>
            <td> <Link to="MovieImagePop4">The Meg</Link></td>
            <td><Link to="MovieImagePop5" >Prestige</Link></td>
        </tr>
        <tr className="movie_image-style" >
            <td  ><img src={img1 } alt="Logo"   /></td>
            <td> <img src={img2 } alt="Logo" /></td>
            <td><img src={img3 } alt="Logo"  /></td>
            <td><img src={img4 } alt="Logo"  /></td>
            <td> <img src={img5 } alt="Logo" /></td>
        </tr>
    </table>
        </>
    );
}
export default Movie;

