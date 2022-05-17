import Home from './pages/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import MoviePage from './pages/MoviePage';
import './App.scss';

function App() {
  return (
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie/:id' element={<MoviePage />}/>
    </Routes>
  </Router>
  )
}

export default App;
