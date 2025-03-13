import React, { useState } from 'react'
import './Shortner.css';
const Shortner = ({fetchUrlHistory }) => {

  const [originalUrl, setOriginalUrl] = useState("");
  const [error, setError] = useState("");

  const handleShorten = async () => {
    if (!originalUrl.trim()) {
      setError("Please provide a valid link");
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/url/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ originalUrl }),
      });
      const data = await response.json();
      if (response.ok) {
        setError("");
        setOriginalUrl("");
        fetchUrlHistory();
      }
      else {
        setError(data.error || "Failed to shorten URL");
      }
    }
    catch (error) {
      console.error("Error shortening URL:", error);
      setError("Something went wrong. Please try again.");
    }
  };


  return (
    <div className="shortner">
      <div className="shortner-input">
        <input
          type="text"
          placeholder='Shorten a link here'
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}

        />
        {error && <p className="shortner-warning">{error}</p>}
      </div>
      <div className="shortner-button">
        <button onClick={handleShorten}>Shorten It</button>
      </div>
    </div>
  )
}

export default Shortner