const CustomerRepository = require('../../domain/repositories/CustomerRepository');
const CustomerModel = require('../database/models/CustomerModel');
const Customer = require('../../domain/entities/Customer');

class MongoCustomerRepository extends CustomerRepository {
    async getAll() {
        const customers = await CustomerModel.find();
        console.log('Customers retrieved from MongoDB:', customers);
        return customers.map(c => new Customer(c.toObject()));
    }

    async create(customer) {
        const newCustomer = await CustomerModel.create(customer);
        return new Customer(newCustomer.toObject());
    }
}

module.exports = MongoCustomerRepository;