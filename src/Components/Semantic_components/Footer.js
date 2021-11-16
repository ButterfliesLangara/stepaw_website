import ContactForm from '../../Components/ContactForm';
import Team from '../../Components/Team';

const Footer = () => {

  const props1 = {
    placeholder: "Subject",
    title: "Subject",
    name: "subject",
    type: "text",
  };
  const props2 = {
    placeholder: "Name",
    title: "Name",
    name: "name",
    type: "text",
  };
  const props3 = {
    placeholder: "Email",
    title: "Email",
    name: "email",
    type: "email",
  };


  return <footer>
      <Team></Team>
      <ContactForm
              input_number={[
                [1, props1],
                [2, props2],
                [3, props3],
              ]}
            />
  </footer>;
};



export default Footer;
