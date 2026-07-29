
import React, { useEffect, useState } from 'react';
import './App.scss';
import Jeu from './components/Jeu';




function App() {
  const [data, setData] = useState(null)
  useEffect(() => {
    fetch("./data.json").then(resp => resp.json()).then(d => setData(d)).catch(error => console.error('Erreur', error))
  }, []

  )
  console.log(data)

  return (
    <main className='principal'>
      <h1 className='titre-principal'><span className='titre-principal--p1'>Slack</span><span className='titre-principal--p2'>Deb</span> Adventure</h1>
      <Jeu donnee={data} />
    </main>
  );



}

export default App;
