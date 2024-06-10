import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import NameForm from './components';
import SearchBar from './components/SearchBar';
import Room from './components/Room';
function App() {
  return (
    <div className="App">
     <Header/>
     <SearchBar/> 
     <Room/>
     {/* <NameForm/> */}
    </div>
  );
}

export default App;
