
import sinaeProfilePicture from "../assets/teams/sinae.png";
import maneeshProfilePicture from "../assets/teams/maneesh.png";
import glenProfilePicture from "../assets/teams/glen.png";
import miaProfilePicture from "../assets/teams/mia.png";
import falguniProfilePicture from "../assets/teams/falguni.png";
import linkedInIconBlack from "../assets/teams/linkedin-icon-black.png";
let devArray = [], designArray = [];

  devArray = [
    {
      name: "Falguni Lakdawala",
      src: falguniProfilePicture,
      role: "PM / Full Stack Developer",
      description:
        "As a software developer has 5 years of experience in developing and managing project implementation of MDM systems and credit rating software.",
      linkedInURL: "https://www.linkedin.com/in/falguni-lakdawala/",
      url: "/falguni-lakdawala"
    },   
    {
      name: "Maneesh Thouti",
      src: maneeshProfilePicture,
      role: "Android Developer",
      description:
        "I’m specialized in building native android interfaces in kotlin/Java. I worked on the android and backend part for Stepaw.",
      linkedInURL: "https://www.linkedin.com/in/maneesh43/",
      url: "/maneesh43"
    },
    {
      name: "Glen Thomas",
      src: glenProfilePicture,
      role: "Full Stack Developer",
      description:
        "I worked on the hardware part for Stepaw with arduino and also did a little coding in android.",
      linkedInURL: "https://www.linkedin.com/in/glen-tk/",
      url: "/glen-tk"
    },
  ];
 
  designArray = [
    {
      name: "Sinae Bak",
      src: sinaeProfilePicture,
      role: "Design Lead / UX/UI Designer",
      description:
        "I designed branding for Stepaw based on UX research and created design systems.",
      linkedInURL: "https://www.linkedin.com/in/sinae-bak/",
      url: "/sinae-bak"
    },
    {
      name: "Chun-Mei Lin",
      src: miaProfilePicture,
      role: "UI/UX Designer",
      description:
        "I went through every UX process and converted the result to UI design.",
      linkedInURL: "https://www.linkedin.com/in/chun-mei-lin/",
      url: "/chun-mei-lin"
    },
  ];

const Team = () => {
  return (
    <div className="team-page-cont" id="team-section">
      <div className="max-width-cont">
        <div className="heading">
          <h3 role="heading">Team</h3>
          <div className="subheading">
            Introductions for team members who built up for this amazing app, Stepaw!
        </div>
        </div>
        
        <div className="team-members-cont row1">
          {devArray.map((data, index) => {
            console.log(data);
            return (
              <div className="member-cont" key={index + data.name}>
                <div className="image-cont">
                  <img className="team-img" role="img" src={data.src} alt={`${data.name} picture`} />  
                </div>
                <div className="text-details-cont">
                  <div className="name">{data.name}</div>
                  <div className="role">{data.role}</div>
                  <div className="description">{data.description}</div>
                  <div className="linkedin-link">
                    
                      <a role="link" href={data.linkedInURL}>
                        <img
                          role="img"
                          src={linkedInIconBlack}
                          alt="linkedin for the profile"
                        />
                      </a>
                    
                      <p className="linkedinUrl">{data.url}</p>
                    
                  </div>
                </div>
              </div> 
            );
          })
        }
        </div>

        <div className="team-members-cont row2">
          {designArray.map((data, index) => {
            console.log(data);
            return (
              <div className="member-cont" key={index + data.name}>
                <div className="image-cont">
                  <img className="team-img" role="img" src={data.src} alt={`${data.name} picture`} />  
                </div>
                <div className="text-details-cont">
                  <div className="name">{data.name}</div>
                  <div className="role">{data.role}</div>
                  <div className="description">{data.description}</div>
                  <div className="linkedin-link">
                    
                      <a role="link" href={data.linkedInURL}>
                        <img
                          role="img"
                          src={linkedInIconBlack}
                          alt="linkedin for the profile"
                        />
                      </a>
                    
                      <p className="linkedinUrl">{data.url}</p>
                    
                  </div>
                </div>
              </div> 
            );
          })
        }
        </div>
      </div>
    </div>
  );
};

const setActiveNavLink = () => {
  let pageURL = window.location.pathname.substring(1);
  let links = document.querySelectorAll(".app_header nav ul li a");
  links.forEach((el) => {
    if (pageURL === el.getAttribute("href").substring(1)) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
  setActiveNavLink();
};

export default Team;
