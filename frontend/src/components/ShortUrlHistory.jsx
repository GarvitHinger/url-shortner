// import React from 'react'; 
import data from "../data.json";
import UrlRow from "./UrlRow.jsx";
import "./ShortUrlHistory.css";
const ShortUrlHistory = ({ urlList,fetchUrlHistory }) => {
  
  return (
    <div className="short-url-history-block">
          {
              urlList.map((url) => (
                <UrlRow
                  key={url._id} urlData={url} 
                  fetchUrlHistory={fetchUrlHistory}
                  
                  />
              ))
          }
    </div>
  )
}

export default ShortUrlHistory;