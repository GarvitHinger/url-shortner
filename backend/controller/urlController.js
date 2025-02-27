import URL from "../model/urls.models.js";

export const addUrl = async (req, res) => {
    try {
        //need to change it latter
        const username = "garvit";
        const { originalUrl } = req.body;
        const urls = await URL.findOne({ originalUrl });
        if (urls) {
            return res.status(400).json({ error: "URL already shortened" });
        }
        let shortUrl;
        let shortUrlExist;
        do {
            shortUrl = Math.random().toString(36).substring(7);
            shortUrlExist = await URL.findOne({shortUrl }); 
        } while (shortUrlExist);
        const newUrl = await URL.create({ originalUrl, shortUrl, owner: username,clicks: 0,status:"active"});
        res.status(201).json({ status: "success", shortUrl: newUrl.shortUrl, originalUrl: newUrl.originalUrl });

    } catch (error) {
        console.error("Error adding URL:", error);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
}

export const toggleUrl = async (req, res) => {
    try {
        const { shortUrl } = req.body;
        const url = await URL.findOne({ shortUrl });
        if (!url) {
            return res.status(404).json({ error: "URL not found" });
        }
        url.status = url.status == "active" ? "inactive" : "active";
        await url.save();
        res.status(200).json({ status: "success", message: `URL ${url.status}`,shortUrl: url.shortUrl});
    } catch (error) {
        console.error("Error toggling URL status:", error);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
}

export const deleteUrl = async (req, res) => {
    try {
        const { shortUrl } = req.body;
        const url = await URL.findOne({ shortUrl });
        if (!url) {
            return res.status(404).json({ error: "URL not found" });
        }
        await URL.deleteOne({ shortUrl });
        res.status(200).json({ message: `${url.shortUrl} deleted successfully`});
    } catch (error) { 
        console.error("Error deleting URL status:", error);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
}


export const urlList = async (req, res) => {
    try {
        const username = "garvit";
        const urls = await URL.find({ owner: username });
        if (!urls) {
            return res.status(404).json({ error: "No URLS Found" });
        }
        return res.status(201).json(urls);
    }
     catch (error) {
        console.error("Error in finding URL:", error);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
}