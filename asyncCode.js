const fs = require('fs')
const prom = require('fs').promises
/* These three things make asynchronous javascript possible
1. callback function: A function used as  an arguement to another function. This arguement
function is usually called by the parent function after a particular time or
after a program is done executing
2. promise: has three stages pending,fulfilled, rejected
3. async/await
*/
// Fetching data from file using the callback method
console.log("First line of code")

fs.readFile('example.txt','utf8',(err,data)=>{
    if(err){
        console.log(err.message)
    }
    console.log(`Result : ${data}`)
})
console.log("After File operation")
// Fetching data from file using promise

prom.readFile('example.txt','utf8')
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.log(error.message)
})
console.log("After promise")
// Fetching data from file using async/await
async function getData(){
    try {
        const data = await prom.readFile('example.txt','utf8')
        const data2 = await prom.readFile('example2.txt','utf8')
       console.log({data,data2})
    } catch (error) {
        console.log(error)
    }
}
getData()

// writing to a file using the callback method
prom.writeFile('message.txt',"Hello to our message file",'utf8')

// writing to a file using the async/await
async function writeToJson(){
    try {
        const data = { 
            data: 'External example file',
             data2: 'External example 2 file'
             }
        await prom.writeFile('data.json', JSON.stringify(data,null))
    } catch (error) {
        console.log(error)
    }
}
writeToJson()
