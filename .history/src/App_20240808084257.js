import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './Home';
import Chelsea from './Chelsea'; 


function App() {
  return (
    <Router>
      <div className='App'>
        <div className='app-cont'>
          <header><Menu/></header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chelsea" element={<Chelsea />} />
            
          </Routes>
        </div> 
      </div>
    </Router>
  );
}

export default App;