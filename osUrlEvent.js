const os = require('os')
const url = require('url')
const EventEmitter = require('events')
/*
the os module helps to access the operating system utilities
Example

for(let i in os){
    console.log(i)
    console.log(os[i])
}

console.log(os.arch())
console.log(os.cpus())
console.log(os.networkInterfaces())
console.log(os.release())
console.log(os.version())
let mem = os.totalmem()
console.log(mem/(1024*1024))
console.log(os.freemem())
console.log(os.tmpdir())

The url is used to break down a url into different components

Example

const ur = 'https://example.com:8080/users?username=emerie&id=224&email=emerie@gmail.com#hey'
const address = url.parse(ur,true)// true converts the query into an object
for(let i in address){
    console.log(i)
}
console.log(address.hash)
console.log(address.port)
console.log(address.search)
console.log(address.href)
console.log(address.host)
console.log(address.hostname)
console.log(address.query.username)
console.log(address.query.email)

EventEmitter
element.addEventListener('click',handleClick)
*/

const person =[
    {id:1,name:'Peter Doe'},
    {id:2,name:'Mary Doe'},
    {id:3,name:'Joel Doe'},
]

const myEmitter = new EventEmitter()

myEmitter.on('greet',()=>{
    console.log("Good morning sir")
})

myEmitter.emit('greet')


myEmitter.on('checker',handleCheck)

function handleCheck(){
    console.log('Check today\'s date')
}
myEmitter.emit('checker')

myEmitter.on('square',(n)=>{
    console.log(n**2)
})

myEmitter.emit('square',5)

myEmitter.on('fellow',(id)=>{
    const guy = person.find((i)=>i.id==id)
    console.log(guy.name)
})
myEmitter.emit('fellow',3)




