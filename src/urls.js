import { APIKEY } from "./Constants";

export const trending =`trending/all/week?api_key=${APIKEY}&language=en-US`;

export const originals =`discover/tv?api_key=${APIKEY}&with_networks=213`;

export const action =`discover/movie?api_key=${APIKEY}&with_genres=28`;

export const ComedyMovies = `discover/movie?api_key=${APIKEY}&with_genres=35`;

export const HorrorMovies = `discover/movie?api_key=${APIKEY}&with_genres=27`;

export const ActionMovies =`discover/movie?api_key=${APIKEY}&with_genres=28`;

export const RomanceMovies = `discover/movie?api_key=${APIKEY}&with_genres=10749`;

export const Documentaries = `discover/movie?api_key=${APIKEY}&with_genres=99`;