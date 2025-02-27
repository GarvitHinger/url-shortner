import User from "../model/user.models.js";
import URL from "../model/urls.models.js";
// export const userSignup = async (req, res) => {
//     const { username, password } = req.body;
//     if (!username || !password) {
//         return res.status(400).json({ error: "All field are required." });
//     }
//     const user = await User.findOne({ username });
//     if (user) {
//         return res.status(400).json({ error: "User already exist." });
//     }
//     const newUser = new User({
//         username: username,
//         password: password
//     })
//     if (newUser) {
//         await newUser.save();
        
//     }


// };

