import { Routes, Route } from "react-router-dom";
import useScroll from './hooks/useScroll';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Projects/Projects';
import Projects from './pages/Projects/Projects';
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import Footer from './components/Footer/Footer';

const App = () => {
    useScroll(true);

    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/project/:id' element={<ProjectDetails />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;