// main.js
import dotenv from "dotenv";
dotenv.config();

console.log("MAIN", process.env.STUFF);

import "./sub.js";
