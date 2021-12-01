import Image from "./Image";
import dog_icon_1 from "../assets/dog_icon_1.svg";
import feature_image_1 from "../assets/feature_image_1.svg";
import feature_image_2 from "../assets/feature_image_2.svg";
import feature_image_3 from "../assets/feature_image_3.svg";
import CarouselSlide from "./CarouselSlide";
import stepaw_video from "../assets/Stepaw_video.mp4";

const Content = () => {
  window.addEventListener("hashchange", () => {
    const feature = document.querySelector(".featurelink");
    const team = document.querySelector(".teamlink");
    const contact = document.querySelector(".contactlink");
    const color_primary = "#004e99";
    switch (window.location.hash) {
      case "#feature-section":
        feature.style.color = color_primary;
        team.style.color = "black";
        contact.style.color = "black";
        break;
      case "#contact-section":
        feature.style.color = "black";
        contact.style.color = color_primary;
        team.style.color = "black";
        break;
      case "#team-section":
        feature.style.color = "black";
        contact.style.color = "black";
        team.style.color = color_primary;
        break;
      default:
        team.style.color = "black";
        contact.style.color = "black";
        feature.style.color = "black";
    }
  });

  return (
    <div className="ui container">
      <section className="intro">
        <div className="intro-section-1">
          <Image src={dog_icon_1} alt={"Dog image"} />
        </div>
        <div className="intro-section-2">
          <div className="text-heading">
            <h1>Stepaw</h1>
            <h2>Must have mobile app for dog owners!</h2>
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
          <h2>Stepaw?</h2>
          <p>Explore what stepaw offers you to increase your dog's mental and physical health.</p>
        </div>
        <div className="feature1">
          <Image src={feature_image_1} alt={"Feature image"} />
          <span className="feature-number">1</span>
         <h3>Beacon registration and detecting walk steps.</h3>
        </div>
        <div className="feature2">
          <Image src={feature_image_2} alt={"Feature image"} />
          <span className="feature-number">2</span>
          <h3>Records for dog steps with visual charts.</h3>
        </div>
        <div className="feature3">
          <Image src={feature_image_3} alt={"Feature image"} />
          <span className="feature-number">3</span>
         <h3>Exclusive reminders for dog schedules.</h3>
        </div>
      </section>

      <section className="carousel">
        <CarouselSlide />
      </section>

      <section className="stepawvideo"> 
<video width="100%" height="100%" autoPlay muted preload="metadata" controls >
  <source src={stepaw_video} type="video/mp4"></source>
  <a href={stepaw_video} download>Download</a>
  </video>
      </section>
    </div>
  );
};
export default Content;
