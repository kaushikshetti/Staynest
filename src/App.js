import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import NameForm from './components';
import SearchBar from './components/SearchBar';
import Room from './components/Room';
import Visits from './components/Visits';
import RentalCard from './components/Rental/RentalCard';
import FavoritesList from './components/Rental/FavoritesList';
const rentals = [
  { id: 1, name: 'Beach House', description: 'A nice beach house.' },
  { id: 2, name: 'Mountain Cabin', description: 'A cozy mountain cabin.' },
];
function App() {
  return (
    <div className="App">
     <Header/>
     <SearchBar/>
     <Visits/> 
     <Room/>
     <div>
      <h1>Rental Properties</h1>
      {rentals.map(rental => (
        <RentalCard key={rental.id} rental={rental} />
      ))}
      <FavoritesList />
    </div>
     {/* <NameForm/> */}
    </div>
  );
}

export default App;
