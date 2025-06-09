class Customer {
    constructor({ id, name, ci, email, password, address, phone }) {
        this.id = id;
        this.name = name;
        this.ci = ci;
        this.email = email;
        this.password = password; // Hash en la lógica de negocio
        this.address = address;
        this.phone = phone;
    }
}

module.exports = Customer;