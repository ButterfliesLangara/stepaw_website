
import sinaeProfilePicture from "../assets/teams/sinae.png";
import maneeshProfilePicture from "../assets/teams/maneesh.png";
import glenProfilePicture from "../assets/teams/glen.png";
import miaProfilePicture from "../assets/teams/mia.png";
import falguniProfilePicture from "../assets/teams/falguni.png";

let shuffledArray = [];

function teamArray() {
  let array = [
    {
      name: "Falguni",
      src: falguniProfilePicture,
      role: "Project Manager/Developer (Full Stack)",
      description:
        "As a software developer has 5 years of experience in developing and managing project implementation of MDM systems and credit rating software.",
      linkedInURL: "https://www.linkedin.com/in/falguni-lakdawala/",
    },
    {
      name: "Sinae",
      src: sinaeProfilePicture,
      role: "Design Lead (UX/UI)",
      description:
        "I have an international relations academic background. I performed the whole UX research to UI design of the project by tracking the weekly deliverables.",
      linkedInURL: "https://www.linkedin.com/in/sinae-bak/",
    },
    {
      name: "Glen Thomas",
      src: glenProfilePicture,
      role: "Developer (Full Stack)",
      description:
        "I worked on the hardware part in this project with arduino and also did a little coding in android.",
      linkedInURL: "https://www.linkedin.com/in/glen-tk/",
    },
    {
      name: "Mia",
      src: miaProfilePicture,
      role: "Designer (UX/UI)",
      description:
        "As a UX/UI designer, going through every UX process and converting the result to UI design is my responsibility.",
      linkedInURL: "https://www.linkedin.com/in/chun-mei-lin/",
    },
    {
      name: "Maneesh",
      src: maneeshProfilePicture,
      role: "Developer (Full Stack)",
      description:
        "I’m specialized in building native android interfaces in kotlin/Java. I worked on the android and backend part of the project.",
      linkedInURL: "https://www.linkedin.com/in/maneesh43/",
    },
    ,
  ];
  return array;
}

const Team = () => {
  shuffledArray = teamArray();
  let count = 1;
  // console.log(shuffledArray);
  return (
    <div className="team-page-cont">
      <div className="max-width-cont">
        <div className="heading">
          <h3 role="heading">Team</h3>
        </div>
        <div className="subheading">
            Introductions for team members who built up for this amazing app, Stepaw!
        </div>
        <div className="team-members-cont">
          {shuffledArray.map((data, index) => {
            console.log(data);
            return (
              <div className="member-cont" key={index + data.name}>
                <div className="image-cont">
                {
                  index % 2 == 0 &&
                  <img className="team-img odd" role="img" src={data.src} alt={`${data.name} picture`} />
                }
                { 
                  index % 2 != 0 &&
                  <img role="team-img" src={data.src} alt={`${data.name} picture`} />
                }
                  
                  
                </div>
                <div className="text-details-cont">
                  <div className="name">{data.name}</div>
                  <div className="role">{data.role}</div>
                  <div className="description">{data.description}</div>
                  {/* <div className="linkedin-link">
                    <a role="link" href={data.linkedInURL}>
                      <img
                        role="img"
                        src={linkedInIconBlack}
                        alt="linkedin for the profile"
                      />
                    </a>
                  </div> */}
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