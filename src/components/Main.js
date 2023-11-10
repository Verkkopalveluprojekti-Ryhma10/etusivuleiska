import Navbar from "./Navbar";
import './Main.css'
import mallikuva from '../images/pine.jpg';


function Main() {
    return (
      <main className="main">
        <div className="navbar"> 
        <Navbar />
        </div>
        <aside className="aside">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>            
            <img src={mallikuva} alt="mallikuva"></img>            
        </aside>
      </main>
    );
  }
  
  export default Main;