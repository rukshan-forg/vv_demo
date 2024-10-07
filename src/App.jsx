import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Home from './pages/home/Home.jsx';
import WebDev from './pages/webDev/WebDev.jsx';
import GraphicsDev from './pages/graphicsDev/graphicsDev.jsx';
import TypingDev from './pages/typingDev/TypingDev.jsx';
import ArtDev from './pages/artDev/ArtDev.jsx';
import NotFound from "./pages/notFound/NotFound.jsx";
import Navbar from "./component/NavBar.jsx";
import './App.css';
import {useEffect} from "react";
import SignUp from "./pages/user/SignUp.jsx";
import SignIn from "./pages/user/SignIn.jsx";


function App() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in ms
            once: true,     // Whether animation should happen only once
        });
    }, []);


    return (
      <Router>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/web" element={<WebDev/>}/>
              <Route path="/graphics" element={<GraphicsDev/>}/>
              <Route path="/typing" element={<TypingDev/>}/>
              <Route path="/art" element={<ArtDev/>}/>
              <Route path="/user/sign-up" element={<SignUp/>}/>
              <Route path="/user/sign-in" element={<SignIn/>}/>
              <Route path="*" element={<NotFound/>}/> {/* Handle unknown routes */}
          </Routes>
      </Router>
  );
}

export default App;
