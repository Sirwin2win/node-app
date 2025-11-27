const fs = require('fs')
const path = require('path')
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

// appending to a file using the sync await
async function appending(n) {
    try {
        await prom.appendFile('example.txt',n,'utf8')
    } catch (error) {
        return error.message
    }
}
// console.log(appending("I am being appended to the example.txt"))

// delete a file using the async/ await
async function removing(n) {
    try {
        await prom.unlink(n)
        // await prom.unlink('notNeeded.js')
    } catch (error) {
        return error.message
    }
}
console.log(removing('anotherNotNeeded.js'))

// removing a folder using async/await

async function removingDir() {
    try {
        await prom.rm('win',{force:true, recursive:true})
        /*
1.recursive:true=> This ensures it removes both the folder and its subfolders 
and files
2. force:true=> This makes the fs.rmdir() method to run without error should the 
folder is missing
        */
    } catch (error) {
        return error.message
    }
}
console.log(removingDir())

// renaming a file using the async/await
async function renamingFile(o,n) {
    try {
        await prom.rename(o,n)
    } catch (err) {
        return err.message
    }
}
console.log(renamingFile('new.js','November.js'))
// Moving a file from a source to a destination folder using async/await
async function moving() {
    const oldFile = 'November.js'
    const folding = 'folding'
    const newFolding = path.join(folding,'file.txt')
    try {
        await prom.mkdir(folding,{recursive:true}) // create folder if it doesn't exist
       await prom.rename(oldFile,newFolding)
    } catch (error) {
        return error.message
    }
}
console.log(moving())
