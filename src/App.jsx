import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import BackToTopBtn from "./components/BackToTopBtn/BackToTopBtn";
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

const App = () => {
    return (
        <ThemeProvider>
        <Router>
            <Navbar />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/project/:id' element={<ProjectDetails />} />
            </Routes>

            <Footer />
        </Router>
        </ThemeProvider>
    );
};

export default App