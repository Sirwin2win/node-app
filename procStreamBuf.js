const fs = require('fs')
const {Transform} = require('stream')
const zlib = require('zlib')
process.argv[2] = 'demo'
process.argv[3] = 'testing'

// console.log(process.argv)
// console.log(process.env)
// Stream
/*
This is a collection of data which may not come all at once but in chunks
1. createReadStream
2. createWriteStream
3. transform: This has a combination of both read and write, as well as update
*/
// Reading a stream
const read = fs.createReadStream('example.txt',(err,chunk)=>{
    if(err){
        console.log(err)
    }else{
        console.log(chunk)
    }
})
// for(let i in read){
//     console.log(i)
// }
// read.on('data',(err,chunk)=>{
//     if(err){
//         console.log(err.message)
//     }else{
//         console.log("Read successfully")
//     }
// })
const writing = fs.createWriteStream('input.txt')
read.pipe(writing)

// Buffer
/*
Buffer is used to transfer binary data easily.
There are different ways of using buffer
1. Buffer.alloc()
2. Buffer.allocUnsafe()
3. Buffer.from(): This creates buffer from different sources e.g string, array etc
*/
// Creating using the Buffer.alloc()
const buf1 = Buffer.alloc(12)
console.log(buf1)
buf1.write('Hello world!')
console.log(buf1)
// console.log(buf1[0])
// console.log(buf1[1])
console.log(buf1.toString('utf8',0,3))
// creating a buffer using the unsafe
const buf2 = Buffer.allocUnsafe(15)
buf1.fill(0)
buf2.write("Hello Node")
console.log(buf2.toString())

// Creating buffer using the from() method
const buf3 = Buffer.from('Nice Day')
console.log(buf3.toString())
// Moving Image
const readfile = fs.readFileSync('logo.jpg')
// console.log(readfile)
fs.writeFile('Godwin.png',readfile,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("File written successfully!")
    }
})

const transformData = new Transform({
    transform(chunk,encoding,callback){
        const processed = chunk.toString().toUpperCase()
        this.push(Buffer.from(processed))
        // console.log(processed)
        callback()
    }
})

const inp = fs.createReadStream('input.txt','utf8')
const out = fs.createWriteStream('output.txt')

inp.pipe(transformData).pipe(out)
// Zipping of file using the zlib module
fs.createReadStream('input.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('locked.txt.gz'))
.on('finish',()=>{
    console.log("Success!")
})
