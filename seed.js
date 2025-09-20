require('dotenv').config();
const mongoose = require('mongoose');
const Supplier = require('./models/Supplier');
const Product = require('./models/Product');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

const seedData = async () => {
    try {
        // Clear existing data
        await Supplier.deleteMany({});
        await Product.deleteMany({});

        // Create sample suppliers
        const suppliers = await Supplier.create([
            {
                name: 'ABC Company',
                address: '123 Main Street, Ho Chi Minh City',
                phone: '0901234567'
            },
            {
                name: 'XYZ Corporation',
                address: '456 Nguyen Hue Boulevard, Ho Chi Minh City',
                phone: '0902345678'
            },
            {
                name: 'Tech Solutions Ltd',
                address: '789 Le Loi Street, Ho Chi Minh City',
                phone: '0903456789'
            }
        ]);

        console.log('Suppliers created:', suppliers.length);

        // Create sample products
        const products = await Product.create([
            {
                name: 'Laptop Dell Inspiron',
                price: 899.99,
                quantity: 50,
                supplierId: suppliers[0]._id
            },
            {
                name: 'iPhone 14 Pro',
                price: 1099.99,
                quantity: 25,
                supplierId: suppliers[1]._id
            },
            {
                name: 'Samsung Galaxy S23',
                price: 999.99,
                quantity: 30,
                supplierId: suppliers[2]._id
            },
            {
                name: 'MacBook Pro M2',
                price: 1999.99,
                quantity: 15,
                supplierId: suppliers[0]._id
            }
        ]);

        console.log('Products created:', products.length);
        console.log('Sample data seeded successfully!');
        
        process.exit(0);
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedData();