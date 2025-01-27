import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ResponsiveAppBar from './Components/Layout/AppLayout';
import HomePage from './Components/home/HomePage';

function App() {
  return (
    <>
    <ResponsiveAppBar/>
    <HomePage />
    </>
  );
}

export default App;
