import {BrowserRouter} from 'react-router-dom'
import Navbar from "./Components/UI/navbar/NavBar";
import AppRouter from "./Components/UI/AppRouter";
import './styles/App.css';

//
// for using TS and styled components i need two more days to read about it and try it
//i will finish this project anyway. for practice but i need extra time


function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <AppRouter/>
      </BrowserRouter>
  );
}
export default App;