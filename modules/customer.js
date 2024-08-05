require('dotenv').config()
const {v4} = require('uuid')
const {MongoOperations} = require('../services/mongo-operations')
const mongoOperations  = new MongoOperations(process.env.MONGO_CUSTOMER_DB)

const existCustomerName = async (customerName) => {
    mongoOperations.Collection = process.env.MONGO_CUSTOMER_COLLECTION
    try {
        const response = await mongoOperations.find({ filter: { customerName: customerName } })
        return response.length > 0
    } catch (error) {
        throw error
    }
}

const createCustomer = async (customer) => {

    if (await existCustomerName(customer.customerName)) {
        const error = {
            message: `customerName '${customer.customerName}' is not available`,
            type: errorTypes.VALIDATION
        }
        throw error
    }
    const id = v4()
    customer.id = id
    try {
        mongoOperations.Collection = process.env.MONGO_CUSTOMER_COLLECTION
        const response = await mongoOperations.insertItem(customer)
        return customer
    }
    catch (error) {
        throw error
    }
}

module.exports = { createCustomer, existCustomerName };