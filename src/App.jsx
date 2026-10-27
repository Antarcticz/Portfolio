import { Routes, Route } from "react-router-dom";
import useScroll from './hooks/useScroll';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

const App = () => {
    useScroll(true);

    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/project/:id' element={<ProjectDetails />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;