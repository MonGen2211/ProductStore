import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "../../ProductStore/backend/config/db.js";
import productRoutes from "./route/Product.route.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT;

const __dirname = path.resolve();

app.use(express.json());

app.use("/api/product", productRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});
// 1SZwv3OElwcy0V6q
