

import './App.css';


import Router from './Router';




// const Home = lazy(() => import('./Page/Home'))
// const IntoPaper = lazy(() => import('./Page/IntoPaper'))
// const Profile = lazy(() => import('./Page/Profile/Profile'))
// const Register = lazy(() => import('./components/Register'))
import Loading from './Loading';
import { BrowserRouter, HashRouter, Route, Routes, } from 'react-router-dom';
import Home from './Page/Home';
import IntoPaper from './Page/IntoPaper';
import Profile from './Page/Profile/Profile';
import Register from './components/Register';
import Socket from './components/Socket.js'




function App() {
  return (
    <div className='bg-[#E8F8F5]'>

      <Router />

    </div>
  );
}

export default App;
