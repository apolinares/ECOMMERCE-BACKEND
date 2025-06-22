const { ObjectId } = require('mongodb');

class MongoCuponRepository {
    /**
     * @param {import('mongodb').Collection} collection
     */
    constructor(collection) {
        this.collection = collection;
    }

    async createCupon(cuponData) {
        const result = await this.collection.insertOne(cuponData);
        return { ...cuponData, _id: result.insertedId };
    }

    async getCuponById(id) {
        return await this.collection.findOne({ _id: new ObjectId(id) });
    }

    async getCuponByCode(code) {
        return await this.collection.findOne({ code });
    }

    async updateCupon(id, updateData) {
        const result = await this.collection.findOneAndUpdate(
            { _id: new ObjectId(id) },
            { $set: updateData },
            { returnDocument: 'after' }
        );
        return result.value;
    }

    async deleteCupon(id) {
        const result = await this.collection.deleteOne({ _id: new ObjectId(id) });
        return result.deletedCount > 0;
    }

    async listCupones(filter = {}, options = {}) {
        return await this.collection.find(filter, options).toArray();
    }
}

module.exports = MongoCuponRepository;