require('dotenv').config()


const {v4} = require('uuid')
const {MongoOperations} = require('../services/mongo/mongo-operations')
const {errorTypes} = new MongoOperations(process.env.MONGO_CUSTOMER_DB)

