import logo from './logo.svg';
import './App.css';
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import ironhackLogo from "./images/ironhack-logo-xs.png";
import menuTop from "./images/menu-top-xs.png";

function App() {
  return (
    <div className="App">
      <div id='top'>
        <nav id='navbar'>
          <img src={ironhackLogo} alt="logo-ironhack" />
          <img src={menuTop} alt="menu" height="30px" width="40px" />
        </nav>
        <div id="title">
          <section id="title">
            <h1>Say hello to <br /> ReactJS</h1>
            <p>You will learn how <br/>the most popular frontend library <br />and become a super Ninja developer</p>
          </section>
          <button>Awesome!</button>
        </div>
      </div>

      <div id='footer'>
        <div className='icons-footer'>
          <img src={icon1} alt="icon" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className='icons-footer'>
          <img src={icon2} alt="icon" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state</p>
        </div>
        <div className='icons-footer'>
          <img src={icon3} alt="icon" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the components</p>
        </div>
        <div className='icons-footer'>
          <img src={icon4} alt="icon" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers</p>
        </div>
      </div>

    </div>
  );
}

export default App;
