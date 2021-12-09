import Image from "../Image";
import mobile_icon from "../../assets/mobile_icon.svg";
import desktop_icon from "../../assets/desktop_icon.svg";
import hamburger from "../../assets/hamburger.svg";
import closeButton from '../../assets/close-button.svg'
import { useEffect } from "react";
const Header = () => {
const openNav=()=>{
    const sidenav=document.querySelector(".sidenav");
    sidenav.classList.toggle("sidenav-active");
}

const closeNav=()=>{
    const sidenav=document.querySelector(".sidenav");
    sidenav.classList.toggle("sidenav-active");                
}
useEffect(()=>{
const d=document.querySelector(".openNav");
d.addEventListener("click",openNav);
const c=document.querySelector(".close-btn");
c.addEventListener("click",closeNav);
},[])

  return (
    <header>
      <nav>
        <div className="desktop">
          <div className="leftnav">
            <a
              href="#home"
              onClick={() => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
              }}
            >
              <Image src={desktop_icon} alt={`Stepaw logo`} />
            </a>
          </div>
          <div className="rightnav">
            <ul>
              <li>
                <a href="#feature-section" className="featurelink" >Features</a>
              </li>
              <li>
                <a href="#team-section" className="teamlink">Teams</a>
              </li>
              <li>
                <a href="#contact-section" className="contactlink">Contact us</a>
              </li>
            </ul>
          </div>
        </div>

        <ul className="mobile">
          <div className="leftnav">
            <a href="#home"  onClick={() => {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;}}><Image src={mobile_icon} alt={"Stepaw logo"} /></a>
          </div>
          <div className="rightnav">
            <span className="openNav"><Image src={hamburger} alt={"Hamburger menu"} /></span>
          </div>
          <div className="sidenav">
            <ul>
              <li className="close-btn"><Image src={closeButton} alt="close button"/></li>
              <li onClick={()=>closeNav()}><a href="#feature-section" className="featurelinkmobile">Features</a></li>
              <li onClick={()=>closeNav()}><a href="#team-section" className="teamlinkmobile">Team</a></li>
              <li onClick={()=>closeNav()}><a href="#contact-section" className="contactlinkmobile">Contact us</a></li>
            </ul>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
