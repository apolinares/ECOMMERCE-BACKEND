const CreateCustomer = require('../../application/useCases/CreateCustomer');
const CustomerDTO = require('../../application/dtos/CustomerDTO');

class CustomerController {
    constructor(customerRepository) {
        this.createCustomer = new CreateCustomer(customerRepository);
    }

    async create(req, res) {
    try {
        console.log('>>> Request body:', req.body);
        const customer = await this.createCustomer.execute(req.body);
        res.status(201).json(new CustomerDTO(customer));
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    async getAll(req, res) {
    try {
        const customers = await this.customerRepository.getAll();
        res.status(200).json(customers);
        } catch (err) {
            res.status(500).json({ message: 'Error retrieving customers' });
        }
    }

}

module.exports = CustomerController;