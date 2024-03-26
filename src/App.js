import './App.css';
import Navbar from './Components/NavBar/navbar';
import MainPage from './Pages/MainPage/mainPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <MainPage />
      </div>
    </Router>
    
  );
}

export default App;
