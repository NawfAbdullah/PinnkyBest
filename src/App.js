import './App.css';
import NapkinPage from './pages/Napkins';
import Home from './pages/Home';
import { Route,BrowserRouter,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PhenylPage from './pages/Phenyl';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/napkin' element={<NapkinPage/>}/>
          <Route path='/phenyl' element={<PhenylPage bcolor={'#dcdcff'}/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
