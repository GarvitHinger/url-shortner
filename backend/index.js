import express from "express";
import dotenv from "dotenv";

import connectDB from "./db/connectDB.js";
import userRoute from "./routes/userRoute.js";
import urlRoute from "./routes/urlRoute.js";
import redirectRoute from "./routes/redirectRoute.js";

const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT || 4000;
app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.use("/api/user", userRoute);
app.use("/api/url", urlRoute);
app.use("/api/shorter", redirectRoute);

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URI)
      app.listen(PORT, () =>
        console.log(`App is listening on port ${PORT}...`)
      );
    } catch (error) {
      console.log(error)
    }
  }
  start();