import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/login/Login';
import Homepage from './components/homepage/Homepage';
import Advisor from './components/advisor/Advisor';
import History from './components/history/History';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/home" element={< Homepage />} />
          <Route path="/history" element={< History/>}/>
          <Route path="/advisor" element={< Advisor/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
