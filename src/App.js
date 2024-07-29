import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import './css/_/reset.css';
import Home from './parts/Home';
import About from './parts/About';
import Contact from './parts/Contact';


const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer /> 
            </div>
            
        </Router>   
        
    );
};

const Header = () => (
    <header>
        <h1>My Website</h1>
    </header>
);

const Footer = () => (
    <footer>
        <p>© 2024 My Website</p>
    </footer>
);

export default App;
