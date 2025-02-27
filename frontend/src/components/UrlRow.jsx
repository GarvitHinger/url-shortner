// import "./UrlRow.css";
// const UrlRow = ({ urlData }) => {
//     return (
//         <div className="url-row">
//             <p className="original-url">{urlData.originalUrl}</p>
//             <p className="short-url">{urlData.shortUrl}</p>
//             <p className="clicks">{urlData.clicks}</p>
//             <button className="status">{urlData.status}</button>
//             <button className="delete">Delete</button>
//             <button className="copy">Copy</button>
//         </div>
//     )
// }

// export default UrlRow;

// import { useState } from "react";
// import "./UrlRow.css";

// const UrlRow = ({ urlData, onToggleStatus, onDelete }) => {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <div className={`url-row ${urlData.status.toLowerCase()}`}>
//             <p className="original-url">{urlData.originalUrl}</p>
//             <p className="short-url">{urlData.shortUrl}</p>
//             <button className="copy">Copy</button>

//             <div className="menu-container">
//                 <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>⋮</button>
                
//                 {menuOpen && (
//                     <div className="menu">
//                         <button className="toggle" >
//                             {urlData.status === "active" ? "Set Inactive" : "Set Active"}
//                         </button>
//                         <button className="delete" >Delete</button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default UrlRow;


import { useState } from "react";
import "./UrlRow.css";

const UrlRow = ({ urlData, onToggleStatus, onDelete }) => {
    const [menuOpen, setMenuOpen] = useState(false);

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
                        <button className="toggle" onClick={() => onToggleStatus(urlData.id)}>
                            {urlData.status === "Active" ? "Set Inactive" : "Set Active"}
                        </button>
                        <button className="delete" onClick={() => onDelete(urlData.id)}>Delete</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UrlRow;
