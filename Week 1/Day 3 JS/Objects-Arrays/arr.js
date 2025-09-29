// // // // //////////////////      Array  Functions     ///////////////////////
// // // // let years = []
// // // // years.push(2001)
// // // // years.push(2005)
// // // // years.push(2004)
// // // // years.push(2002)

// // // // // years[10] = 2025

// // // // // years.length = 5

// // // // // console.log(years)
// // // // // years.reverse()
// // // // // console.log(years)

// // // // ///////////////// Some functions treat empty slots has undefined    //////////////////

// // // // // const new_years = years.toReversed()
// // // // // console.log(new_years)

// // // // // const changeYears = years.map(year=> year + 1)
// // // // // console.log(changeYears)

// // // // console.log(years)

// // // // //////////////////////////////      Filter      /////////////////////////////

// // // // // const evenYears = years.filter(year=> (
// // // // //     year % 2 == 0)
// // // // // )

// // // // // console.log(evenYears)


// // // // ////////////////////////////        Reduce      ///////////////////////////////

// // // // // const sum = years.reduce((accumulator, currentValue) => accumulator + currentValue)

// // // // // let avg = sum / years.length

// // // // // console.log(avg)
// // // // // console.log(sum)

// // // // // years.forEach((year => console.log(year)))


// // // // // console.log(years.find(year => year === 2001))
// // // // // console.log(years.find(year => year === 20010))

// // // // // years.forEach((year) => {
// // // // //     console.log(year === 2002)
// // // // // })
// // // // // console.log()

// // // ///////////////////////     Destructuring and Spread Operator

// // // // let a, b, rest 
// // // // [a,b, ...rest] = [10, 20,32,123,412,45,56,75];

// // // // console.log(a)
// // // // console.log(b)

// // // // console.log(rest)

// // // const arr1 = [1, 2]
// // // const arr2 = [3, 4]

// // // const combinedArr = [...arr1, ...arr2]
// // // console.log(combinedArr)


// // // function sum (a,b,c) {
// // //     return a + b + c
// // // }

// // // const num = [1,2,3]
// // // console.log(sum(...num))

// // ////////////////////////////        Deep Copy & Shallow Copy

// const original = {
//     name: "Umair",
//     address: {
//         city: "QWERTY",
//         Address: 12345,
//     }
// }

// // // const shallowCopy = {...original}
// // // console.log(shallowCopy)

// // // shallowCopy.name = "ALI";

// // // console.log(shallowCopy.name)
// // // console.log(original.name)

// // // shallowCopy.address.city = "Mastung"

// // // console.log(original.address.city)

// // // Hence spread operator is used for shallow copy

// // ///////    Now using Object.assign()

// // const copy = Object.assign({},original)
// // console.log(copy)

// // copy.address.city = "Quetta"

// // console.log(original.address.city)

// // ///     Hence Object.assign() works similiar for shallow Copying like spread operator


// // // Now Using "structuredClone"

// const deepCopy = structuredClone(original)

// deepCopy.address.city = "London"

// console.log(original)
// console.log("=====================")
// console.log(deepCopy)