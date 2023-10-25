netflix-logo='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'

nav-avatar='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'§

banner='https://wallpaperaccess.com/full/2703652.png

card = 'https://images.squarespace-cdn.com/content/v1/59232e19579fb3fa44a693c2/1589212826160-UM9PEPGOS3OJPR0FJ81X/ke17ZwdGBToddI8pDm48kHZUaJeKzodyg_sXWBMxNTdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxCBUU7B-_SAG1kGvCwYgmUjQXvn8_OJjtz3K1llMQBa1MPsuSXPSY3X-tgg78M7lI/SKOyqL1qFLIhbK6ho2lB-696x975.jpg?format=1500w'

//////////////////////////////////////////////////////////////API's//////////////////////////////////////////////////////////////////////////

imageUrl = 'https://image.tmdb.org/t/p/original'

apiBaseUrl='https://api.themoviedb.org/3'

trending ='https://api.themoviedb.org/3/trending/all/week?api_key={API_KEY_HERE}&language=en-US'

action ='https://api.themoviedb.org/3/discover/movie?api_key={API_KEY_HERE}&with_genres=28'

originals ='https://api.themoviedb.org/3/discover/tv?api_key={API_KEY_HERE}&with_networks=213'

ComedyMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=35',

HorrorMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=27',

ActionMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=28',

RomanceMovies: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=10749',

Documentaries: 'https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY_HERE}&with_genres=99',

////////////////////////////////////////////////////////////////////API KEY////////////////////////////////////////////////////////////////////////////

API_KEY = "YOUR API KEY"


directory=


adult
: 
false
backdrop_path
: 
"/628Dep6AxEtDxjZoGP78TsOxYbK.jpg"
genre_ids
: 
(2) [28, 53]
id
: 
575264
media_type
: 
"movie"
original_language
: 
"en"
original_title
: 
"Mission: Impossible - Dead Reckoning Part One"
overview
: 
"Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most."
popularity
: 
2305.783
poster_path
: 
"/NNxYkU70HPurnNCSiCjYAmacwm.jpg"
release_date
: 
"2023-07-08"
title
: 
"Mission: Impossible - Dead Reckoning Part One"
video
: 
false
vote_average
: 
7.719
vote_count
: 
1754
[[Prototype]]
: 
Object



axios.get(`/movie/${id}?api_key=${APIKEY}&append_to_response=videos`)

.then((response)=>{
console.log(response.data);

  })

