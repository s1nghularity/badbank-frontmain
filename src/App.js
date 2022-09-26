import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

import Navi from './component/navbar';
import HomePage from './pages/HomePage';
import Deposit from './pages/Deposit';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import ErrorPage from './pages/Error'


function App() {
  
  return (
    <div className="App">
      {/* <AuthProvider> */}
      <Router>
        <Navi /> 
          <Routes>
            <Route index element= { <HomePage /> } />
            <Route path="/Deposit" element={ <Deposit /> } />
            <Route path="/Login" element={<Login />}/>
            <Route path="/CreateAccount" element={ <CreateAccount /> } />
            <Route path="*" element= { <ErrorPage/> }     />
          </Routes>
      </Router>
      <Outlet />    
   </div>
  );
}

export default App;