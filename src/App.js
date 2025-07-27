import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Specials from './Specials.jsx';



function App() {
  return (
    <>
      {/* <Header />
      <Main />
      <Footer /> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          {/* <Route path="/footer" element={<Footer />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
