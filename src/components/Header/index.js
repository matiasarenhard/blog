import "./styles.css";
import mainImagge from "./header.jpg"

function Header(){
  return(
    <header>
        <h1>React Blog test</h1>
        <img src={mainImagge} alt="only test"></img>
    </header>
  );
}

export default Header;