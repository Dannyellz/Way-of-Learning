import _ from 'lodash';

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

const filepath = '/path/to/index.js';

// Проверка работы lodash
// Разделяем путь на промежуточные директории и файл
const parts = filepath.split('/');
// Извлекаем имя файла
// last извлекает последний элемент из массива
const filename = _.last(parts); 
console.log(parts)
const extention = filename.split('.')
console.log(_.last(extention))

const domain = 'google.com'

const getDomainInfo = string => {
    let divide = string.split('://');
    let scheme = _.first(divide);
    let name = _.last(divide);

    if (!string.includes('://')) {
        scheme = 'http';
    }

    const obj = {
        scheme, name
    }

    return obj
}

console.log(getDomainInfo(domain))

// Lesson 6

const countFruits = (fruits) => {
    const result = {};
  
    for (const name of fruits) {
      // Проверка на существование
      if (result[name] === undefined) {
        result[name] = 1;
      } else {
        result[name] += 1;
      }
    }
  
    return result;
  };

  const bag = [
    'apple', 'banana', 'pear',
    'apricot', 'apple', 'banana',
    'apple', 'orange', 'pear',
  ];

  const countfr = array => {
    let result = {}

    for (let key of array) {
        if (_.has(result, key)) {
            result[key] += 1
        } else {
            result[key] = 1
        }
    }
    return result
  }

  console.log(countfr(bag))

const countWords = string => {
    let lowstr = string.toLowerCase()
    let array = _.words(lowstr)
    let result = {}

    for (let element of array) {
        if (_.has(result, element)) {
            result[element] += 1
        } else {
            result[element] = 1
        }
    }
    return result
}

const text1 = 'one two three two ONE one wow';
const text2 = 'another one sentence with strange Words words';

console.log(countWords(text1))

// Оператор нулевого слияния 
//let value;

// value ?? 'wow'; // 'wow'

// value = null;
// value ?? 'wow'; // 'wow'

// value = true;
// value ?? 'wow'; // true
// for (const name of fruits) {
//   result[name] = (result[name] ?? 0) + 1;
// }

// Lesson 7

const lessonMembers = {
    syntax: 3,
    using: 2,
    foreach: 10,
    operations: 10,
    destructuring: 2,
    array: 2,
  };

const findkeys = (obj, expvalue) => {
    const result = []

    const entries = Object.entries(obj) 
    for (const [key, value] of entries) {
        if (value === expvalue) {
            result.push(key)
        }
    }
    return result
}

console.log(findkeys(lessonMembers, 2))

const data = {
    user: 'ubuntu',
    cores: 4,
    os: 'linux',
  };

const pick = (obj, array) => {
    let result = {}

    // let entries = Object.entries(obj) // [[user, ubantu][cores, 4][os, linux]]
    for (let element of array) {
        if(_.has(obj, element)) {
            result[element] = obj[element]
        }
    }
    return result
}

console.log(pick(data, ['user', 'cores']))

// Lesson 8

const data1 = {
    user: 'ubuntu',
    hosts: {
      0: {
        name: 'web1',
      },
      1: {
        name: 'web2',
        null: 3,
        active: false,
      },
    },
  };

const get = (obj, array) => {
    let result = '2'
    if(Object.prototype.hasOwnProperty.call(obj, 'hosts[0]') === true) {
        return result
    }
    return false
    //result = _.get(obj, array, 'null') // надо найти альтернативу для метода get
}

console.log(get(data1, ['hosts', 1, null]))

// Lesson 9 

const first = {
    name: 'heater',
    state: 'moderating',
  };
   
  const second = {
    name: 'Hexlet',
    state: 'published',
  };

const fill = (obj, list, imp) => {
    let assigned = {}

    if (list.length !== 0) { // Почему-то не работаетб когда идет сравнение list !== []
        for (const element of list) {
            if (_.has(imp, element)) {
                assigned[element] = imp[element]
            }
        }
        return Object.assign(obj, assigned)
    } else {
        return Object.assign(obj, imp)
    }

}

console.log(fill(first, [], second))

// Lesson 10
// Lesson 10

const users = [
    { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
    { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
    { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
    { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
  ];

const getSortedNames = array => {
    let result = []
    for (let item of array) {
        result.push(item.name)
    }
    let finalResult = result.sort()
    return finalResult
}

// const cla = ['Bronn', 'Reigar', 'Eiegon', 'Sansa']

console.log(getSortedNames(users))

// Lesson 11

const make = (receivedName, addInfo) => {
    let add = { state: 'moderating', createdAt: '05.09.22' };

    let nameOfCompany = {name: receivedName}
    let result = {...nameOfCompany, ...add, ...addInfo}

    return result
}

console.log(make('Hexlet', { website: 'hexlet.io', state: 'published' }))