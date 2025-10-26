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
const allowedOrigins = [
  "http://localhost:5173", // Your local Vite development port (adjust if needed)
  "https://juspay-site.onrender.com", // Your deployed Render frontend URL
];
const corsOptions = {
  // Check if the request origin is in the allowed list
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps, Postman, or same-domain requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"), false);
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow necessary HTTP methods
  credentials: true, // Crucial for sending cookies/session headers if you add them later
};

app.use(cors(corsOptions));
app.use(express.json());

// app.use("/api/payment", paymentRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
