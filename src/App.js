import './App.css';
import Navbar from './components/Navbar';
import Service_List from './components/Service_List';
import Small_nav from './components/Small_nav';


function App() {
  return (
      <>
       <Navbar/>
       <Small_nav link1 = "Home" link2 = "About" link3 = "Contact" link4 = "videos" />
       <Service_List/>
      </>
  );
}

export default App;
