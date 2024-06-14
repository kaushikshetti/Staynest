import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import NameForm from './components';
import SearchBar from './components/SearchBar';
import Room from './components/Room';
import Visits from './components/Visits';
function App() {
  return (
    <div className="App">
     <Header/>
     <SearchBar/>
     <Visits/> 
     <Room/>
     {/* <NameForm/> */}
    </div>
  );
}

export default App;
