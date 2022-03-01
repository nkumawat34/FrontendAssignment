import logo from './logo.svg';
import './App.css';
import Categories  from './categories'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Selected from './selected';
function App() {
  return (
    <div className="App">
      <Router>
        <Categories/>
        <Routes>
          
          <Route exact path="/selected" element={<Selected/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
