import './App.sass';
import Calendar from './Calendar';
import Nav from './Nav';
import './App.css';
import Header from './Header';
import Caramel from './Caramel';

const App = () => (
  <div className="App">
    <Nav />
    <Caramel />
    <Header />
    <Calendar />
  </div>
)

export default App
