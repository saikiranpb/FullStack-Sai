import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './components/homepage/Home';
import RestaurantDetails from './components/Details/RestaurantDetails';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function App() {
  return (
    <div>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:rName" element={<RestaurantDetails/>}/>
      
     </Routes>
    </div> 
  );
}

export default App;
