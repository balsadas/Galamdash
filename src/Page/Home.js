import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import PaperMean from '../components/PaperMean';
import Register from '../components/Register';



function Home() {
  const [change, setChange] = useState(0)


  return (
    <div>

      <Nav change={change} setChange={setChange} />
      <PaperMean change={change} setChange={setChange} />
      <Footer />

    </div>
  );
}

export default Home;
