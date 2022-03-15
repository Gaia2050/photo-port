// import logo from './logo.svg';
// import './App.css';
import About from './components/About';
import React from 'react';
// import coverImage from "../../assets/cover/cover-image.jpg";
import Nav from "./components/Nav";

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

// function App () {
//   return (
//     <section className="my-5">
//     <h1 id="about">Who am I?</h1>
//     <img src={coverImage} className="my-2" style={{width: "100%"}} alt="cover"/>
//     </section>
//   );
// }


function App() {
  return (
    <div>
      <Nav>

      </Nav>
      <main>
        <About/>
      </main>
    </div>
  );
}


export default App;
