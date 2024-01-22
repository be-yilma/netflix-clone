// const key = "0c983abced982060be54d661836a2d49";

const key = process.env.REACT_APP_API_KEY;
const requests = {
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${key}&with_networks=213`,
  fetchTopRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  ActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity. asc&with_genres=28&year=2022`,
  AdventureMoves: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity. asc&with_genres= 12&year=2022`,
  DramaMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity. asc&with_genres=18&year=2022`,
  comedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity. asc&with_genres=35&year=2022`,
  ThrillerMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity. asc&with_genres=53&year=2022`,
  ScienceFictionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity. asc&with_genres=878&year=2022`,
  FantasyMovies: ` https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity. asc&with_genres=14&year=2022`,
};
export default requests;
