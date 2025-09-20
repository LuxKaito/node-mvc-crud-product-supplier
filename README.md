# Node MVC CRUD Product Supplier

This project is a CRUD web application for managing suppliers and products, built with Node.js, Express, MongoDB, and Mongoose using the MVC architecture.

## Features

- Manage supplier information (add, edit, delete, list)
- Manage product catalog (add, edit, delete, list)
- User-friendly interface with EJS templates
- Data stored in MongoDB
- MVC structure for clean code organization


## Project Structure

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


## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/node-mvc-crud-product-supplier.git
   cd node-mvc-crud-product-supplier
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file and set your MongoDB connection string:
   ```
   MONGO_URI=mongodb://localhost:27017/yourdbname
   PORT=3000
   ```

## Usage

Start the application:
```sh
npm start
```
Or for development with auto-reload:
```sh
npm run dev
```

Open your browser and visit [http://localhost:3000](http://localhost:3000)

## License

This project is licensed under the MIT License.