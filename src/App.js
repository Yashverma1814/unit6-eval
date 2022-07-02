import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Card } from './Components/Card';
import { Home } from './Pages/Home';
import { Booking } from './Pages/Booking';

function App() {
  return (
    <div>
        {/* <Navbar /> */}
        {/* <Card /> */}
        {/* <Home /> */}
        <Booking />
    </div>
  );
}

export default App;
