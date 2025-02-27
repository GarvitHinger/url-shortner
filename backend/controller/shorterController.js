import URL from "../model/urls.models.js";

export const redirectWebsite = async (req, res) => {
    const { shortCode } = req.params;
    console.log("Received shorterCode:", shortCode);

    try {
        const url = await URL.findOne({ shortUrl: shortCode });
        console.log(url);
        if (!url) {
            return res.status(404).json({ error: "URL doesn't exist" });
        }

        if (url.status === "inactive") {
            return res.status(401).json({ error: "Owner has disabled the link" });
        }

        url.clicks += 1;
        await url.save();

        res.redirect("https://x.com/home");
    } catch (error) {
        console.error("Error in redirect:", error);
        res.status(500).json({ error: "Internal server error" });
    }

}