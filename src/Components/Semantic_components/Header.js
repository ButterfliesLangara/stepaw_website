import Image from "../Image";
import mobile_icon from "../../assets/mobile_icon.svg";
import desktop_icon from "../../assets/desktop_icon.svg";
import hamburger from "../../assets/hamburger.svg";
const Header = () => {
  return (
    <header>
      <nav>
        <div className="desktop">
          <div className="leftnav">
        <a href="#" onClick={()=>{ document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;}}><Image src={desktop_icon} alt={`Stepaw logo`} /></a>
          </div>
          <div className="rightnav">
            <ul>
              <li>
                <a href="#feature-section">Features</a>
              </li>
              <li>
                <a href="#team-section">Teams</a>
              </li>
              <li>
                <a href="#contact-section">Contact us</a>
              </li>
            </ul>
          </div>
        </div>

        <ul className="mobile">
          <div className="leftnav">
            <Image src={mobile_icon} alt={"Stepaw logo"} />
          </div>
          <div className="rightnav">
            <Image src={hamburger} alt={"Hamburger menu"} />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
