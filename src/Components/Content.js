import Image from "./Image";
import dog_icon_1 from "../assets/dog_icon_1.svg";
import feature_image_1 from "../assets/feature_image_1.svg";
import feature_image_2 from "../assets/feature_image_2.svg";
import feature_image_3 from "../assets/feature_image_3.svg";
import CarouselSlide from "./CarouselSlide";


const Content = () => {
  return (
    <div className="ui container">
      <section className="intro">
        <Image src={dog_icon_1} alt={"Dog image"} />

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
        <button className="button">Download</button>
      </section>

      <section className="features" id="feature-section">
        <h2>Features</h2>
        <p>Explore what stepaw offers you to check your dog's health.</p>
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
