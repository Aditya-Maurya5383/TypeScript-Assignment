import './App.css';
import Cards from './components/card/Card';
import Sidebar from './components/sidebar/Sidebar';



function App() {
  return (
    <div className="container">
      <Sidebar/>
      <Cards/>
    </div>
  );
}

export default App;
