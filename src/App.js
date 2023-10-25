import React from "react";
import "./App.css"
import NavBar from "./Components/NavBar/NavBar";
import { originals,action, trending, ComedyMovies, HorrorMovies, ActionMovies, RomanceMovies, Documentaries} from "./urls";
import Banner from "./Components/Banner/Banner";
import Post from "./Components/Post/Post";
import { useState } from "react";
function App() {
 

  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <Post  url ={originals} title = "Netflix Originals"/>
      <Post  url= {action} title ="Action" isSmall />
      <Post  url= {trending} title ="Trending" isSmall />
      <Post  url= {ComedyMovies} title ="Comedy" isSmall />
      <Post  url= {HorrorMovies} title ="Horror" isSmall />
      <Post  url= {ActionMovies} title ="Fight" isSmall />
      <Post  url= {RomanceMovies} title ="Romance" isSmall />
      <Post  url= {Documentaries} title ="Documentry" isSmall />
    </div>
  );
}

export default App;
