require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const supplierRoutes = require("./routes/supplierRoutes");
const productRoutes = require("./routes/productRoutes");

// Import models
const Product = require("./models/Product");
const Supplier = require("./models/Supplier");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// Routes
app.get("/", async (req, res) => {
  try {
    const productCount = await Product.countDocuments();
    const supplierCount = await Supplier.countDocuments();

    res.render("index", {
      title: "Trang chủ - Product & Supplier Management",
      productCount: productCount,
      supplierCount: supplierCount,
      currentPage: "home",
    });
  } catch (error) {
    console.error("Error fetching statistics:", error);
    res.render("index", {
      title: "Trang chủ - Product & Supplier Management",
      productCount: 0,
      supplierCount: 0,
      currentPage: "home",
    });
  }
});

app.use("/suppliers", supplierRoutes);
app.use("/products", productRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// 404 handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
