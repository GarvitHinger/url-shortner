// import React from 'react'; 
import data from "../data.json";
import UrlRow from "./UrlRow.jsx";
import "./ShortUrlHistory.css";
const ShortUrlHistory = () => {
  return (
    <div className="short-url-history-block">
          {
              data.map((url) => (
                  <UrlRow key={url._id} urlData={url} />
              ))
          }
    </div>
  )
}

export default ShortUrlHistory;