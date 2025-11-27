const path = require('path')
/*
1. path.basename()
2. path.join()
3. path.resolve()
4. path.extname()
5. path.parse()
6. path.format()
we could also use __dirname or __filename as helpers
*/
console.log(__filename) // returns the absolute path to the current file
console.log(__dirname) // returns the absolute path to the current folder
const absPath = __filename // absolute current file path being asigned to a variable
const imgPath = `${__dirname}/folding/logo.jpg`// combining the absolute folder path to locate an image
console.log(path.basename(absPath)) // returns the name of the file
console.log(path.basename(imgPath)) // return the name of the image
// using path.basename() to return file or image name without the extension
console.log(path.basename(absPath,'.js'))
console.log(path.basename(imgPath,'.jpg'))
// getting the absolute path of the image using path.join()
const fruits = ["Apple","Banana","Cherry"]
// console.log(fruits.join("/"))
// The path.join() is used to return the absolute filename
console.log(path.join(__dirname,'folding','logo.jpg'))
/*
const oldImgPath =  path.join(__dirname,'folding','logo.jpg')
await fs.unlink(oldImgPath)
*/
// returns the absolute path of the file
console.log(path.resolve('asyncCode2.js'))
// returns the file extension
console.log(path.extname('asyncCode2.js'))
console.log(path.extname(imgPath))

// returns the filename as an object
console.log(path.parse('C:/Users/Sirwin/Desktop/node-app/asyncCode2.js'))
const pathObj = path.parse('C:/Users/Sirwin/Desktop/node-app/asyncCode2.js')
console.log(pathObj.base)
console.log(pathObj.ext)
console.log(pathObj.name)
/*
Getting the image absolute path
const oldImgPath =  path.join(__dirname,'folding','logo.jpg')
// convert oldImgPath to object 
const pathObj = path.parse(oldImgPath)
if(pathObj.ext !=='.jpg'){
return "Image must have a jpg extension"
}
*/

// path.format() combines fragments of file into an absolute filename
console.log(path.format({
    root:'C:/',
     dir: 'C:/Users/Sirwin/Desktop/node-app',
      base: 'asyncCode2.js',
    ext: '.js',
    name: 'asyncCode2'
}))