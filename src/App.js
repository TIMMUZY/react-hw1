// import Home from './Home';
// import Tima from './Tima';
import { useState } from 'react';
import './style.css'

function App() {
  const [state, setState] = useState(0);
  const [tima, setTima] = useState('Tynchtyk');
  return (
    <div className="App">
      {/* <h1>{tima}</h1> */}
      {/* <button onClick={() =>{
        setTima('Tima')
      }}>change</button>
      <button onClick={() =>{
        setTima('Tynchtyk')
      }}>return</button> */}
      <h1>{state}</h1>
      <button onClick={() => {
         if (state < 10) 
        setState(state + 1)
      }}>+</button>
       <button onClick={() => {
         if (state > 0) 
        setState(state - 1)
      }}>-</button>
       <button onClick={() => {
         if (state > 1) 
        setState(state - 5)
      }}>-5</button>
       <button onClick={() => {
         if (state < 15) 
        setState(state + 5)
      }}>+5</button>
      {/* <Home /> */}
      {/* <Tima /> */}
    </div>
  );
}

export default App;
