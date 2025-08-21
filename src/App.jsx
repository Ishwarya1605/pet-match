import './App.scss';
import "./assets/style.scss";
import{BrowserRouter as Router,Routes,Route} from  "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from "./pages/home/HomePage";
import BrowsePets from "./pages/browsepets/BrowsePets";
import PetsProfile from './pages/petsprofile/PetsProfile';
import About from "./pages/about/About";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/browsepets" element={<BrowsePets/>}></Route>
          <Route path="/petsprofile" element={<PetsProfile />} />
          <Route path="/about" element={<About/>}></Route>
        </Routes>
         <Footer />
      </Router>
    </>
  );
}

export default App;
