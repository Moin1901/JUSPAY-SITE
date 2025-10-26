import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import paymentRoutes from "./routes/panpm i nodemon
// ymentRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

const corsOptions = {
  // Setting origin to true allows the requested origin if it's found in the Access-Control-Allow-Origin header check.
  // By using this simpler configuration, we avoid the function logic that is currently throwing an error.
  origin: "*", // ALLOWS ALL ORIGINS - INSECURE, FOR DEBUG ONLY
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// app.use("/api/payment", paymentRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
