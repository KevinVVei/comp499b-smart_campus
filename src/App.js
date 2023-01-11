import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/SignIn' element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
