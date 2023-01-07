import './App.css';
import Login from './Login/Login';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from './Register/Register';
import ProtectedRoute from './Utility/Protect';
import Dashboard from './Dashboard/Dashboard';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path="/SignUp" element={<Register/>}/>
      <Route path='/Dashboard' element={
                <ProtectedRoute>
                    <Dashboard/>
                </ProtectedRoute>
            } />  
      </Routes>
    </div>
    </Router>
  );
}

export default App;
