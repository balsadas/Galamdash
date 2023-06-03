

import './App.css';


import Router from './Router';




// const Home = lazy(() => import('./Page/Home'))
// const IntoPaper = lazy(() => import('./Page/IntoPaper'))
// const Profile = lazy(() => import('./Page/Profile/Profile'))
// const Register = lazy(() => import('./components/Register'))




function App() {
  return (
    <div className='bg-[#E8F8F5]'>

      <Router />

    </div>
  );
}

export default App;
