const express = require('express')
const Router = express.Router();

Router.get('/info',(req,res)=>{
    return res.json({code:1})
})

module.exports = Router;