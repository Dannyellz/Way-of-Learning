import _ from 'lodash';

const first = {
    name: 'heater',
    state: 'moderating',
  };
   
  const second = {
    name: 'Hexlet',
    state: 'published',
  };

const fill = (obj, array, data) => {
    let assigned = {}
    let result

    if (array === []) {
        result = 12
    } else {
        result = 20
    }

    return result
}

const check = []
console.log(fill(first, check, second))

const user = { company: { name: 'Hexlet' } };
const copyOfUser = _.cloneDeep(user)
//const copyOfUser = Object.assign({}, user)

// console.log(copyOfUser)

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

// new exercise

// const company = make('Hexlet');
// {
//   name: 'Hexlet',
//   state: 'moderating',
//   createdAt: <тут текущая дата>
// }

const make = (receivedName, addInfo) => {
    let add = { state: 'moderating', createdAt: '05.09.22' };

    let nameOfCompany = {name: receivedName}
    let result = {...nameOfCompany, ...add, ...addInfo}

    return result
}

console.log(make('Hexlet', { website: 'hexlet.io', state: 'published' }))