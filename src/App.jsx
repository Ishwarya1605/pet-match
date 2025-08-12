import './App.scss';
import "./assets/style.scss";
import{BrowserRouter as Router,Routes,Route} from  "react-router-dom";
import Header from './components/header/Header';
import Home from "./pages/home/HomePage";
import BrowsePets from "./pages/browsepets/BrowsePets";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="browsepets" element={<BrowsePets/>}></Route>
          <Route path="about" element={<About/>}></Route>
          <Route path="contact" element={<Contact/>}></Route> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
