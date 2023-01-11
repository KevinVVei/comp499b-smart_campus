import React from 'react';
import './App.css';
import Homepage from './pages/Home';
import Navbar from './components/Navbar';

const navBar = (
  <div>
    <Navbar/>
  </div>
  )

class App extends React.Component{
  //用于切换不同的页面
  //
  render(){
    return(
      <div>
        {navBar}
        <Homepage/>
      </div>
    )
  }
}

export default App;










// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;