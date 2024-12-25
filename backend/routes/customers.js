const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

//GET: list
router.get('/', async(req,res)=>{
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    } catch (error) {
        res.status(500).json({message:"An error occured", error:error});
    }
});


//GET: get by id of a customer
router.get('/:id', async(req,res)=>{
    try {
        const id = req.params.id;
        const customer = await Customer.findOne({_id:id});
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({message:"An error occured to get by id", error:error});
    }
})

//POST: create a customer
router.post('/', async(req,res)=>{
    try {
        const customer = new Customer(req.body);
        const savedCustomer = customer.save();
        res.status(200).json(savedCustomer);
    } catch (error) {
        res.status(500).json({message: "An error occured during creating a customer", error:error});
    }
})

//UPDATE: update a customer data

router.put('/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const customer = req.body;
        const updatedCustomer = customer.findoneAndUpdate(
            {
                _id:id 
            },
            {
                $set: customer
            },
            {
                new:true 
            }
        );
        res.status(200).json(updatedCustomer);
    } catch (error) {
        res.status(500).json({message: "An error occured during updating a customer", error:error});
    }
});

//DELETE: Delete a customer
router.delete('/:id', async(req,res)=>{
    try {
        const id = req.params.id;
        let deletedCustomer = await Customer.deleteOne({_id:id});
        res.status(200).json(deletedCustomer);
    } catch (error) {
        res.status(500).json({message:"An error occured during deleting a customer", error:error});
    }
});


module.exports = router;