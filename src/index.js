
import ReactDOM from "react-dom"; 
import React, {useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout"; 
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks";
import Movie from "./pages/Movie";
import NoPage from "./pages/NoPage";
import NameForm from "./pages/NameForm";
import Bookings from "./pages/Bookings";
import MovieImagePop1 from "./pages/MovieImagePop1";
import MovieImagePop2 from "./pages/MovieImagePop2";
import MovieImagePop3 from "./pages/MovieImagePop3";
import MovieImagePop4 from "./pages/MovieImagePop4";
import MovieImagePop5 from "./pages/MovieImagePop5";



import  "./App.css";


export default function App() {
  
  const [namer, setNamer] = useState('');
  const handleChange = (e) => {
    console.log(e.target.value);
    setNamer(e.target.value);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NameForm handleChange={(e)=>handleChange(e)}/>} />
         
          <Route path="thanks/:salute/:firstname/:lastname/:age /:address/:country" element={<Thanks namer={namer}/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="movie" element={<Movie/>} />
          <Route path="bookings" element={<Bookings/>} />
          <Route path="movie/Movieimagepop1" element={<MovieImagePop1/>} />
          <Route path="movie/Movieimagepop2" element={<MovieImagePop2/>} />
          <Route path="movie/Movieimagepop3" element={<MovieImagePop3/>} />
          <Route path="movie/Movieimagepop4" element={<MovieImagePop4/>} />
          <Route path="movie/Movieimagepop5" element={<MovieImagePop5/>} />
          
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


ReactDOM.render(<App />, document.getElementById("root"));





