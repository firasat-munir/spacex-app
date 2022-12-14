import React from 'react';
import Launch from './components/Launch';
import LaunchDetails from './components/LaunchDetails';
import './App.css'

const App = () =>{
  const [id, setId] = React.useState(13);
  const handleIdChange = React.useCallback((newId:any) => {
    setId(newId);
  }, []);
  return(
    <div className='App'>
      <Launch handleIdChange={handleIdChange} />
      <LaunchDetails id={id} />
    </div>
  )
}

export default App;