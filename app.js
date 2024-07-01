const express =require('express')

const cors = require('cors')

const Invoices_to_customer = require('./routers/IssuingReceiptsToCustomers')

const app = express()

app.get('/',(req,res)=>{
    res.status(200).json({message: 'server is open'})
})
app.use(cors({
    origin:'null'
}))
app.use('/IssuingReceiptsToCustomers',Invoices_to_customer)

module.exports=app

