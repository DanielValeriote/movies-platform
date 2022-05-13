import Home from './pages/Home';

import './App.scss';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import { Header } from './components/Navbar/Navbar';
import MoviePage from './pages/MoviePage';

function App() {
  return (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/movie/:id' element={<MoviePage />}/>
    </Routes>
  </Router>
  )
}

export default App;
