import React from 'react';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import News from './components/News';
import Comment from './components/Comment';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/comment" element={<Comment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
