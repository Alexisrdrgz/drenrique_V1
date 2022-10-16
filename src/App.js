import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Router from './Navigation/Router';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <main>
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
    </main>
  );
}

export default App;
