import React from 'react'
import "./Post.css"
import { useState } from 'react';
import YouTube from 'react-youtube';
import { useEffect } from 'react';
import axios from "../../axios"
import { APIKEY, ImageURL } from '../../Constants';
function Post(props) {
  const [movies,setMovies] = useState([])
  const [urlid,setUrlid] = useState();
  useEffect(()=>{
    axios.get(props.url)
    .then((response)=>
    {
      setMovies((response.data.results))
    })
  })
  const opts = {
    height: '390',
    width: '100%',
    autoplay: 1,
    }
  function handleClick (id) {
    console.log(id);
    axios.get(`/movie/${id}?api_key=${APIKEY}&append_to_response=videos`)
    .then((response)=>{
      console.log(response.data.videos.results[0])
  setUrlid(response.data.videos.results[0].key)
}
    )
    
}
  return (
    <div className='post'>
        
        <h2 className='title1'>{props.title}</h2>
        <div className='image'>
{
  movies.map((obj)=>{

    return(
    <img src={`${ImageURL+obj.backdrop_path}`} className={ props.isSmall ? 'small' : 'poster'} onClick={()=>{handleClick(obj.id)}} alt='no image'/>
    )
  })
     
}
    
    </div>

    <YouTube videoId= {urlid} opts={opts}/>
    </div>

  )
}

export default Post ;