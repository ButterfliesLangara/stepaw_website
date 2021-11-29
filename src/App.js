import Header from "./Components/Semantic_components/Header";
import Body from "./Components/Semantic_components/Body";
import Footer from "./Components/Semantic_components/Footer";
import smoothscroll from 'smoothscroll-polyfill';
import "./App.scss";

function App() {
smoothscroll.polyfill();
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
