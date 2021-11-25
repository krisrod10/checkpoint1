import  {useState} from 'react';
import Card from './components/Card';
import './App.css';
import { Switch } from '@mui/material';

function App() {
  const [isOnline, setIsOnline]= useState(false)
  // const handleClick= () => {
  //  console.log("CLicked");
  // }
  return (
    <div className="App">
    {/*<Button variant="outlined" onClick={handleClick}>Outlined</Button>*/}
<Card title="Online mode" body="Is this application connected to the internet"state={isOnline} setState={setIsOnline} component={Switch}/>
<Card title="Master mode" body="Over Rides all other sound settings in this application" state={setIsOnline} component />
{!isOnline && <p>Is currently offline</p>}
    </div>
  );
}

export default App;
