
require ("dotenv").config();
const Stripe=require("stripe")('sk_test_51MhJyrHGhBMnhgb7FtxUb15N5LpAZNeSjwea4mtD5Wqk5EGciTNcipDEBxhA6sgC0zobXs99fMPCjBOe3FsEczYV00hnz85S5G');
const express=require("express");
const router=express.Router();

router.post("/",async (req,res)=>{
    const {amount}=req.body;
    console.log(amount)
try {
    const paymentIntent=await Stripe.paymentIntent.create({
        amount,
        currency:"usd"
    })
    console.log(paymentIntent.client_secret);
    res.status(200).send(paymentIntent.client_secret);

} catch (error) {
    res.status(500).json({message:error.message})
}})

module.exports=router;