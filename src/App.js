import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {Home,Post,About} from './Pages'
import Navbar from './Components/navBar/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/post' element={<Post/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  );
}

export default App;
