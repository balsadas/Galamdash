
import { forwardRef, useEffect, useRef, useState } from 'react';
import './App.css';
import Home from './Page/Home';





function App() {

    
  const [click, setClick] = useState(false)

  return (
    <div className='bg-[#E8F8F5]'>
        <Home click={click} setClick={setClick}/>
    </div>
  );
}

export default App;
