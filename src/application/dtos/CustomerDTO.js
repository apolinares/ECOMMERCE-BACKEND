class CustomerDTO {
    constructor(customer) {
    this.id = customer._id;
    this.name = customer.name;
    this.ci = customer.ci;
    this.email = customer.email;
    this.address = customer.address;
    this.phone = customer.phone;
    }
}

module.exports = CustomerDTO;
