// const liter = /\bin\b/g;
// const str = "the rain in spain stays mainly in the plain";
// const name = "manoj kumar";
// const phone ="+919848657897"
// const regx=/\+91[\d+]{9}/
let text = "i will run 2km daily and i will buy 41kgs of mangoes";
const regex = /(?<digit>\d+)(?<word>\w+)/g;
// const nameRegex = /(?<firstname>\w+) (?<lastname>\w+)/;
// console.log(liter)
// console.log(liter.exec(str))
// let content;
// while ((content = liter.exec(str) )!= null) {
//  console.log(content.index)
// }
// console.log(regx.test(phone))

// const final= text.replace(regex,(reg,a,b)=>{
//     console.log(a)
    
//     return `${a*10 }${ b.toUpperCase() }`
// })
// console.log(final)

console.log(text.split(regex))