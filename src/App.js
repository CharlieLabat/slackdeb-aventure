
import './App.scss';
import Jeu from './components/Jeu';

function App() {
  return (
    <main className='principal'>
      <h1 className='titre-principal'><span className='titre-principal--p1'>Slack</span><span className='titre-principal--p2'>Deb</span> Adventure</h1>
      <Jeu/>
    </main>
  );
}

export default App;
