import Navbar from "./Navbar";
import './Main.css'
import mallikuva from '../images/pine.jpg';


function Main() {

  const imageCount = 3;

  const images = [];
  for (let i = 0; i < imageCount; i++) {
      images.push(<img key={i} src={mallikuva} alt="mallikuva" style={{ marginRight: '10px' }} />);
  }

    return (
      <main className="main">
        <div className="navbar"> 
        <Navbar />
        </div>
        <aside className="aside">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...
                </p>            
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    {images}
                </div>            
            </aside>
      </main>
    );
  }
  
  export default Main;