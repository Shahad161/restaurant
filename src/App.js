import './App.css';
import Header from './component/Header'
import Nav from './component/Nav';

function App() {
  return (
    <div className="container">
      <div className='nav_container'>
        <Header/>
        <Nav/>
      </div>
    </div>
  );
}

export default App;
