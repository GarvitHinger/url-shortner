
import './App.css'
import NavBar from './components/NavBar.jsx';
import Introduction from "./components/Introduction.jsx";
import Shortner from './components/Shortner.jsx';
import ShortUrlHistory from './components/ShortUrlHistory.jsx';
import AdvanceStats from './components/AdvanceStats.jsx';
import LinkBoost from './components/LinkBoost.jsx';
import Footer from './components/Footer.jsx';
import "./app.css";
function App() {
  

  return (
    <div className='container'>
      <NavBar />
      <Introduction />
      <Shortner />
      <ShortUrlHistory />
      <AdvanceStats />
      <LinkBoost />
      <Footer />
    </div>
  )
}

export default App
