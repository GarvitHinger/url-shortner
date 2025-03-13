import { useState } from "react";
import "./UrlRow.css";

const UrlRow = ({ urlData, fetchUrlHistory }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleStatus = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/url/toggle", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ shortUrl: urlData.shortUrl }),
            });
            if (response.ok) {
                fetchUrlHistory();
            }
        } catch (error) {
            console.error("Error toggling URL status:", error);
        }
    }

    const handleDelete = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/url/toggle", {
                method: "DELETE",
                headers: { "Content-Type:": "application/json" },
                body: JSON.stringify({ shortUrl: urlData.shortUrl }),
            });
            if (response.ok) {
                fetchUrlList();
            }
        } catch (error) {
            console.error("Error deleting URL:", error);
        }
    }

    return (
        <div className={`url-row ${urlData.status.toLowerCase()}`}>
            <p className="original-url">{urlData.originalUrl}</p>
            <p className="short-url">{urlData.shortUrl}</p>
            <p className="clicks">{urlData.clicks} Clicks</p>
            <button className="copy">Copy</button>

            <div className="menu-container">
                <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>⋮</button>

                {menuOpen && (
                    <div className="menu">
                        <button className="toggle" onClick={handleToggleStatus}>
                            {urlData.status === "Active" ? "Set Inactive" : "Set Active"}
                        </button>
                        <button className="delete" onClick={handleDelete}>Delete</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UrlRow;
