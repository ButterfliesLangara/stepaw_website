import Image from "./Image";
import dog_icon_1 from "../assets/dog_icon_1.svg";
import feature_image_1 from "../assets/feature_image_1.svg";
import feature_image_2 from "../assets/feature_image_2.svg";
import feature_image_3 from "../assets/feature_image_3.svg";
import CarouselSlide from "./CarouselSlide";


const Content = () => {
window.addEventListener('hashchange',()=>{
  const feature=document.querySelector('.featurelink');
  const team=document.querySelector('.teamlink');
  const contact=document.querySelector('.contactlink');
  const color_primary="#004e99"
  switch(window.location.hash){
    case '#feature-section':feature.style.color=color_primary;
    team.style.color="black";
    contact.style.color="black";
      break;
    case '#contact-section':
      feature.style.color="black";
      contact.style.color=color_primary;
      team.style.color="black";
    break;
    case '#team-section':
      feature.style.color="black";
      contact.style.color="black";
      team.style.color=color_primary;
    break;
    default:team.style.color="black";
    contact.style.color="black";
    feature.style.color="black";
  }
})

  return (
    <div className="ui container">
      <section className="intro">
        <div className="intro-section-1">
        <Image src={dog_icon_1} alt={"Dog image"} />
        </div>
        <div className="intro-section-2">
        <div className="text-heading">
          <p>Stepaw helps you to monitor your furry family's health.</p>
        </div>

        <div className="text-content-1">
          <p>May you live with your best dog for the long term together.</p>
        </div>
        <div className="text-content-2">
          <p>
            Check your dog's step numbers and set special schedules only for
            your dog.
          </p>
        </div>
        <button className="button stepaw-button">Download</button>
        </div>
      </section>

      <section className="features" id="feature-section">
        <div className="feature-heading">
        <h2>Features</h2>
        <p>Explore what stepaw offers you to check your dog's health.</p>
        </div>
        <div className="feature1">
          <Image src={feature_image_1} alt={"Feature image"} />
          <p>
            <span>Detect your dog's approximate steps</span> to have an idea how
            far your dog walks per day.
          </p>
        </div>
        <div className="feature2">
          <Image src={feature_image_2} alt={"Feature image"} />
          <p>
            Monitor your dog's steps in a convenient way with three different{" "}
            <span>visual charts</span>
          </p>
        </div>
        <div className="feature3">
          <Image src={feature_image_3} alt={"Feature image"} />
          <p>
            <span>Schedule</span> excite moments for your dog to build strong
            bonds in a regular basis.
          </p>
        </div>
      </section>

      <section className="carousel">
    <CarouselSlide/>
      </section>
    </div>
  );
};
export default Content;
