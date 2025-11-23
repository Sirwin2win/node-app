const express = require('express')
const dotenv = require('dotenv').config()
/*
we'll install express, dotenv, nodemon
express is a node js library for generating apis
dotenv is for accessing environment variables
nodemon(node monitor) is for watching for changes in our app and then causing a refresh
*/

const app = express()


app.use(express.json())

const data = [
    {id:1, name:'Peter Doe', age:20},
    {id:2, name:'Mary Doe', age:22},
    {id:3, name:'Matthew Doe', age:24},
]


app.get('/',(req,res)=>{
    res.send('Hello World!')
})

// Fetch all
app.get('/products',(req,res)=>{
   
    res.send(data)
})

// Fetch one
app.get('/products/:id',(req,res)=>{
    const id = req.params.id
    try {
        const product = data.find(v=> v.id == id)
        if(product){

            res.send(product)
        }else{
            res.send("Product not found")
        }
    } catch (error) {
        res.send(error.message)
    }
})
// Adding more products
app.post('/products',(req,res)=>{
    const id = data.length+1
    const newData = {
        id:id,
        name:req.body.name,
        age:req.body.age
    }
    data.push(newData)
    res.send(data)
})
// Update products
app.put('/products/:id',(req,res)=>{
    const id = req.params.id
    const product = data.find(v=> v.id == id)
   try {
     if(product){
        product.name = req.body.name;
        product.age = req.body.age

        res.send(data)
    }else{
        res.send(`Product with id: ${id} not found`)
    }
   } catch (error) {
    
   }
})

// Delete
app.delete('/products/:id',(req,res)=>{
    const {id} = req.params
    const prod = data.filter(v=> v.id != id)
    res.send(prod)
})
const port = process.env.PORT || 8000

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
    // console.log(`Server running on http://localhost:${port}`)
})

