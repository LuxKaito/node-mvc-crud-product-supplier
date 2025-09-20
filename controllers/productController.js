const Product = require('../models/Product');
const Supplier = require('../models/Supplier');

// Display all products
exports.index = async (req, res) => {
    try {
        const products = await Product.find().populate('supplierId');
        res.render('products/index', { products });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Display form to create new product
exports.new = async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.render('products/new', { suppliers });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Create new product
exports.create = async (req, res) => {
    try {
        const { name, price, quantity, supplierId } = req.body;
        const product = new Product({ name, price, quantity, supplierId });
        await product.save();
        res.redirect('/products');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Display specific product
exports.show = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id).populate('supplierId');
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.render('products/show', { product });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Display form to edit product
exports.edit = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        const suppliers = await Supplier.find();
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.render('products/edit', { product, suppliers });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Update product
exports.update = async (req, res) => {
    try {
        const { name, price, quantity, supplierId } = req.body;
        await Product.findByIdAndUpdate(req.params.id, { name, price, quantity, supplierId });
        res.redirect('/products');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Delete product
exports.delete = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.redirect('/products');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};