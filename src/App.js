import logo from './logo.svg';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <h1 style={{color:"red"}}>react-router-dom</h1>
     <nav style={{borderBottom: "1px solid",paddingBottom: "1rem"}}>

    
     <Link to="Invoices">Invoices</Link><br/>
     
     <Link to="Expenses">Expenses</Link>
     </nav>
     <Outlet/>
    </div>
  );
}

export default App;
