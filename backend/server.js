import express from "express";
import dotenv from "dotenv";
import { connectDB } from "../../ProductStore/backend/config/db.js";
import productRoutes from "./route/Product.route.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT;
app.use(express.json());

app.use("/api/product", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});
// 1SZwv3OElwcy0V6q
