 import "./App.css";
import Banner from "./Banner/Banner";
import Navi from "./Navi/Navi"
import requests from "./requests";
import Row from "./Row/Row";
function App() {
 return (
   <div className="App">
<Navi/>
<Banner/>
     <Row title="Netflix Orignals" fetchUrl={requests.fetchNetflixOriginals }isLargeRow />
    <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies}/>
    <Row title="Action Movies" fetchUrl={requests.ActionMovies}/>
    <Row title="Adventure Movies" fetchUrl={requests.AdventureMoves}/>
    <Row title=" Drama Movies" fetchUrl={requests.DramaMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.comedyMovies}/>
    < Row title="Thriller Movies" fetchUrl={requests.ThrillerMovies}/>
    <Row title="Science Fiction Movies" fetchUrl={requests.ScienceFictionMovies}/>
    <Row title="Fantasy Movies" fetchUrl={requests.FantasyMovies}/>
   </div>
  );
 
 }
 export default App;

