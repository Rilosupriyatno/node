import express from "express";
import db from "./config/database.js";
import router from "./routes/index.js";
import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
import SequelizeStore from "connect-session-sequelize";
import cors from "cors";
import game from "./routes/game.js";
import session from "express-session";
import auth from "./routes/auth.js";

dotenv.config();
const app = express();

const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
  db: db,
});

// (async () => {
//   await db.sync();
// })();

try {
  await db.authenticate();
  console.log("Database Connected...");
} catch (error) {
  console.error(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// app.use(cookieParser());
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);
app.use(router);
app.use(game);
app.use(auth);
// store.sync();
app.listen(5000, () => console.log("Server running at port 5000"));
