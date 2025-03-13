
import './App.css'
import NavBar from './components/NavBar.jsx';
import Introduction from "./components/Introduction.jsx";
import Shortner from './components/Shortner.jsx';
import ShortUrlHistory from './components/ShortUrlHistory.jsx';
import AdvanceStats from './components/AdvanceStats.jsx';
import LinkBoost from './components/LinkBoost.jsx';
import Footer from './components/Footer.jsx';
import "./app.css";
import { useEffect, useState } from 'react';
function App() {


  const [urlList, setUrlList] = useState([]);

  const fetchUrlHistory = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/url/urllist');
      if (!response.ok) {
        throw new Error(`HTTP error: Status: ${response.status}`);
      }
      const data = await response.json();
      setUrlList(data.urls);
    } catch (error) {
      console.log("Error fetching URL history:", error);
    }

  };

  useEffect(() => {
    fetchUrlHistory();
  }, []);


  return (
    <div className='container'>
      <div className="container-main">
        <NavBar />
        <Introduction />
        <Shortner fetchUrlList={fetchUrlHistory} />
        <ShortUrlHistory urlList={urlList} fetchUrlHistory={fetchUrlHistory} />
        <AdvanceStats />
      </div>
      <div className='container-footer'>
        <LinkBoost />
        <Footer />
      </div>
    </div>
  )
}

export default App
