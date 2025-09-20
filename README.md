# Node MVC CRUD Product Supplier

A full-featured CRUD web application for managing suppliers and products, built with Node.js, Express, MongoDB, and Mongoose using the MVC architecture.

![Node.js](https://img.shields.io/badge/Node.js-14%2B-green?logo=node.js)
![Express](https://img.shields.io/badge/Express-4.x-blue?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen?logo=mongodb)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## 📑 Table of Contents

- [✨ Features](#features)
- [🖥️ System Requirements](#system-requirements)
- [📁 Project Structure](#project-structure)
- [⚡ Installation](#installation)
- [⚙️ Configuration](#configuration)
- [🚀 Usage](#usage)
- [👨‍💻 Author](#author)
- [📞 Support](#support)
- [📝 License](#license)

---

## ✨ Features

- 🏢 Supplier management: add, edit, delete, list suppliers
- 📦 Product management: add, edit, delete, list products
- 🎨 Clean, responsive UI with EJS templates
- 🗄️ Data stored securely in MongoDB
- 🧩 MVC architecture for maintainable code
- 🌱 Seed script for sample data

---

## 🖥️ System Requirements

- **Node.js** (v14 or higher)
- **MongoDB** (running locally or on cloud)
- **Git**

---

## 📁 Project Structure

```
node-mvc-crud-product-supplier/
├── package.json
├── .env (MONGO_URI)
├── app.js
├── /models
│   ├── Supplier.js
│   └── Product.js
├── /controllers
│   ├── supplierController.js
│   └── productController.js
├── /routes
│   ├── supplierRoutes.js
│   └── productRoutes.js
├── /views
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   ├── index.ejs
│   ├── suppliers/
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   └── edit.ejs
│   └── products/
│       ├── index.ejs
│       ├── new.ejs
│       └── edit.ejs
├── /public
│   └── css/style.css
└── seed.js (optional)
```

---

## ⚡ Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/node-mvc-crud-product-supplier.git
   cd node-mvc-crud-product-supplier
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

---

## ⚙️ Configuration

Create a `.env` file in the root directory and add your MongoDB connection string and desired port:

```
MONGO_URI=mongodb://localhost:27017/yourdbname
PORT=3000
```

---

## 🚀 Usage

Start the application:

```sh
npm start
```

For development with auto-reload:

```sh
npm run dev
```

Open your browser and visit [http://localhost:3000](http://localhost:3000)

---

## 👨‍💻 Author

- **Nguyễn Huy Khang**
- 📧 Email: [khang.ng243@gmail.com](mailto:khang.ng243@gmail.com)
- 🐙 GitHub: [LuxKaito](https://github.com/LuxKaito)

---

## 📞 Support

If you encounter any issues or have questions, please create an issue on GitHub or contact the author directly.

---

⭐ **If you find this project useful, please give it a star!**

---

## 📝 License

This project is licensed under the MIT License.