import React from 'react';
import img1 from '../assets/img1.png';



function Movieimagepop1(props){
    return (
        <section>
           
            <p class="Big_font">Die Harder</p>
            <img src={img1 } alt="Logo"  className="movie_image-style-pop" />

            <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa </p>
            <p>year: 2011</p>
            <p>Rate : </p>
            <p>Director :</p>
        </section>
    )
}
export default Movieimagepop1;