
import './App.css';
import ECNavBar from './components/ECNavBar';
import Router from './pages/Router'
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
      <ECNavBar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
