import React from 'react'
import "./Banner.css"
import { useEffect } from 'react'
import axios from "../../axios"
import { APIKEY,ImageURL } from '../../Constants'
import { useState } from 'react'
function Banner() {
  
  const [movie,setMovie] = useState();

useEffect(() => {

  axios.get(`trending/all/week?api_key=${APIKEY}&language=en-US`)
  .then((response)=>{
    setMovie(response.data.results[3])

  }
, [])
}
)


  return (
    <div className='Banner' style={{backgroundImage : `url(${movie ? ImageURL+movie.backdrop_path : ""})`}}>
        <div className='content'>
          <h1 className='title'>{movie ? movie.original_title : ""}</h1>  
            <div className='buttons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>
            </div>
            <div>
            <h5 className='description'>{movie ? movie.overview : ""} </h5>
            </div>
        </div>
        <div className='fade'>
            
        </div>
    </div>
  )
}

export default Banner