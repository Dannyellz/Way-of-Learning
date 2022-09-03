const user = {
    name: 'Cody',
    surname: 'Bug',
    email: 'I don know',
}
// Определение объекта на пустоту 
const isEmpty = object => {
    for (let prop in object) {
        return false // Если цикл начинает выполняться то пусть возвращает false (так как объект оказался не пустым)
    }
    return true // А если не начал, то все окей и он пуст – true
}

console.log(isEmpty(user))

// Сумма значиний каждого свойства
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

const sumOfSalaries = obj => {
    let sum = 0

    for (let prop in obj) {
        sum = sum + obj[prop]
    }

    return sum
}

console.log(sumOfSalaries(salaries))

// const double = obj => {
//     for (let prop in obj) {
//         if (typeof obj[prop] === 'number') {
//             obj[prop] = obj[prop] * 2 
//         }
//     }
// }

// console.log(double(salaries))

// // const clone = (copy, obj) => {

// //     for (let prop in obj) {
// //         copy[prop] = obj[prop]
// //     }
// //     return copy
// // }
// let copy = {}
// let empty = Object.assign(copy, user)

// //console.log(clone(empty, user))

// let fake = user 
// alert(fake === user)
// console.log(copy)

// It was a mess above 

// Lesson 3  
const normalize = obj => {
    obj.name = obj.name[0].toUpperCase() + obj.name.slice(1).toLowerCase()
    obj.description = obj.description.toLowerCase()
    return obj
}
const lesson = {
    name: 'деструктурИЗАЦИЯ',
    description: 'кАк удИвиТь колек',
  };

console.log(normalize(lesson))

// Lesson 4

const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };

const company3 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company4 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };

const is = (ob1, ob2) => {
    if (ob1.name === ob2.name && ob1.state === ob2.state && ob1.website === ob2.website) {
        return true
    } else {
        return false
    }
}

console.log(is(company3, company4))

// Lesson 5