import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';

function App() 
{
  const data = {type:"Fiat", model:"500", color:"white"}
  const arr = [{type:"Fiat", model:"500", color:"white"}, {type:"Kelvin", model:"Moringa"}]

  console.log(data)
  return (
    <div>
      <Navbar/>
      <Landing data={data} arr={arr} name="Kelvin" id="453" />
    </div>
  );
}

export default App;
