const express=require('express');
const {createCustomer } = require('../modules/customer');
const router=express.Router()

router.post('/addCustomer',express.json(),async(req,res)=>{
    try{
        const customer=req.body;
        const newCustomer=await createCustomer(customer) 
        res.status(201).json(newCustomer)
    }
    catch(error){
        console.log({error});
        if(error.type){
            res.status(error.type).send(error.message)
        }
        else{
            res.status(500).send(error.message);
        }
    }
})

module.exports=router



