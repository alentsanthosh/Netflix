import React from 'react'
import SearchIcon from "./SearchIcon.png"
import axios from "../../axios"
import "./NavBar.css"
import { useState } from 'react'
import { APIKEY} from '../../Constants'
function NavBar() {
const [query,setQuery] =  useState("");
function HandleSearch(e){
  e.preventDefault();
   axios.get(`/search/movie?query=${query}&api_key=${APIKEY}`)
   .then((response)=>{
    console.log(response.data.results);
   })

}
  return (
    <div className='NavBar'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' className='logo' alt='No image'/>
      <img src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' className='avatar' alt='No image available'/>
      <div className='Formdiv'>
      <form>
        <input type='text' placeholder='Search movie name' className='Navbarform' onChange={(e)=>{setQuery(e.target.value)}} />
       <img className='Icon' src = {SearchIcon} onClick={HandleSearch}/>
      </form>
      </div>
    </div>
  )
}

export default NavBar;