import './App.css';
import MyButton from './widgets/button/button';
import MyContainer from './widgets/container/container';
import Navbar from './widgets/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MyButton/>
    </div>
  );
}

export default App;
