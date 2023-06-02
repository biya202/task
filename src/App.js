import "./App.css";
import Navbar from "./component/header/Navbar";
import Banner from "./component/Banner/index";
import Main from "./component/Main/index";
import Footer from "./component/Footer/index";

function App() {
  return (
    <div id="wrapper">
      <Navbar/>
      <Banner/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
