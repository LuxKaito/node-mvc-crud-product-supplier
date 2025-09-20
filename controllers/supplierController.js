const Supplier = require('../models/Supplier');

// Display all suppliers
exports.index = async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.render('suppliers/index', { suppliers });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Display form to create new supplier
exports.new = (req, res) => {
    res.render('suppliers/new');
};

// Create new supplier
exports.create = async (req, res) => {
    try {
        const { name, address, phone } = req.body;
        const supplier = new Supplier({ name, address, phone });
        await supplier.save();
        res.redirect('/suppliers');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Display specific supplier
exports.show = async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id);
        if (!supplier) {
            return res.status(404).send('Supplier not found');
        }
        res.render('suppliers/show', { supplier });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Display form to edit supplier
exports.edit = async (req, res) => {
    try {
        const supplier = await Supplier.findById(req.params.id);
        if (!supplier) {
            return res.status(404).send('Supplier not found');
        }
        res.render('suppliers/edit', { supplier });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Update supplier
exports.update = async (req, res) => {
    try {
        const { name, address, phone } = req.body;
        await Supplier.findByIdAndUpdate(req.params.id, { name, address, phone });
        res.redirect('/suppliers');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

// Delete supplier
exports.delete = async (req, res) => {
    try {
        await Supplier.findByIdAndDelete(req.params.id);
        res.redirect('/suppliers');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};