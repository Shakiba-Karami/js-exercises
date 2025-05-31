///////////sum of divisible by 3
const sum3 = (input) => {
    let result = 0
    for (let i=0 ; i <= input; i++ ) {
    if (!(i%3)) { 
        result += i 
    }
    }
    return result
}
console.log (sum3(6))
////////////////
const people = [
  { name: "Alice", age: 25, job: "Engineer" },
  { name: "Bob", age: 32, job: "Designer" },
  { name: "Charlie", age: 29, job: "Teacher" },
  { name: "Diana", age: 24, job: "Developer" },
  { name: "Ethan", age: 35, job: "Manager" },
  { name: "Fiona", age: 28, job: "Engineer" },
  { name: "George", age: 41, job: "CEO" },
  { name: "Hannah", age: 30, job: "Marketing" },
  { name: "Ian", age: 27, job: "Developer" },
  { name: "Jasmine", age: 33, job: "HR" }
];
console.log(people[1].age)

// log the names of each item & jobs of each

for (let i = 0; i < people.length ; i++ ) {
    console.log(people[i].name)
}

const name_log = () => {
    let result =[]
    people.forEach((item) => {
        result.push(item.name)
    })
    return result
}
console.log(name_log())

people.forEach((person) => {
    console.log(person.name)
})
people.forEach((person_job) => {
    console.log(person_job.job)
})
// make an array of the people whose job is engineer
const engineers = []
people.forEach((person) => {
    if (person.job === 'Engineer') {
        engineers.push(person)
    }
})
console.log(engineers)
// make an array of the people whose job is Developer
const developers = people.filter ((person_job) => {
    return person_job.job === "Developer"
})
console.log(developers)
// Add a new key 'is old' with the values true (if age>30) or false (if age <=30)
const old_or_not = people.map ((person) => {
    if (person.age > 30) {
        return  person.name + ' is old : true' 
    }
    return  person.name + ' is old : false' 
})
console.log(old_or_not)

const p2 = people.map ((person) => {
    const is_old = person.age > 30
    return {
        name: person.name,
        is_old: is_old
    }
})
console.log(p2)

const p3 = people.map ((person) => {
    return {
        name: person.name,
        age: person.age,
        job: person.job,
        is_old: person.age > 30
    }
})
console.log(p3)
//////////////////
const numbers = [7, 14, 3, 14, 0, 19, 6, 20, 2, 8, 14, 3, 5, 11, 7, 18, 9, 6, 13, 1]

const doubled = numbers.map((number) => {
    return number * 2
})
console.log(doubled)

const divisible_by2 = numbers.filter((number) => {
    return !(number % 2)
})
console.log(divisible_by2)
// sum of greater than 10
let sum = 0
const greaterThan10 = numbers.filter((number) => {
       return number >= 10
})
console.log(greaterThan10)
greaterThan10.forEach((number) => {
    sum += number
}
)
console.log(sum)

let sumOfGreaterThan10 = 0
numbers.forEach((number) => {
    if (number >= 10) {
        sumOfGreaterThan10 += number
    }
}
)
console.log(sumOfGreaterThan10)
/////////////////

const company = {
    name: "TechCorp",
    departments: {
        dev: {employees: 15, budget: 100000},
        hr: {employees: 3, budget: 50000},
    }
};
//a) Access the HR budget
console.log(company.departments.hr.budget)
//b) Add new department "marketing" with .employees = 5
company.departments.marketing = {
    employees: 5,
}
console.log(company.departments)
//c)calculate total employees using Object.values
let employees_count = 0
Object.values(company.departments).forEach((dep)=> {
    employees_count = dep.employees + employees_count
})
console.log(employees_count)

let employees_count2 = Object.values(company.departments).reduce((acc, cur) => 
    acc + cur.employees ,0)
console.log(employees_count2)

///////////////array from object by entries and vice versa by fromEntries;
const myArray = [
    ["name", "John"],
    ["lastname", "Doe"],
    ["age", 43],
    ["diagnosis", "CF"]
]
const objFromArray = Object.fromEntries(myArray)
console.log(objFromArray)
const arrFromobj = Object.entries(objFromArray)
console.log(arrFromobj)
///sum of ages:
const people2 = {
    ali: 23,
    jay: 31,
    reza: 32
}
let ageAverage2 = 0 
const sum2 = Object.values(people2)
console.log(sum2)
ageAverage2 = sum2.reduce((acc, cur) => acc + cur, 0)/sum2.length
console.log(ageAverage2)
 
///length of a string
console.log(objFromArray.name.length)
///////////// check number of characters in a name
console.log('shakiba'.split('').length) 
//// 
const peopleAsString = 'Shakiba,Pedram,Maryam' 

const PeopleAsObject = Object.fromEntries(peopleAsString.split(',').map((item) => {
  return [item.toLowerCase(), item.length]  
}))

console.log(PeopleAsObject)

/////////////////////////
const students = [
  {
    name: "Alice",
    courses: {
      math: 18,
      english: 14,
      history: 12,
    },
  },
  {
    name: "Bob",
    courses: {
      math: 10,
      chemistry: 16,
      physics: 19,
    },
  },
  {
    name: "Charlie",
    courses: {
      biology: 13,
      english: 17,
      math: 15,
    },
  },
  {
    name: "Diana",
    courses: {
      art: 20,
      music: 18,
      english: 16,
    },
  },
  {
    name: "Ethan",
    courses: {
      geography: 11,
      history: 14,
      math: 9,
    },
  },
    {
    name: "Ali",

  },
];

//Average Score of a student
const getPersonAverage = (personName) => { 
    const student = students.find((person) => {
    return person.name === personName
    })
    if (!student) {
        return 0
    }
    const coursesScores = Object.values(student.courses || {})
     if (!coursesScores.length) {
        return 'No course'
    }
    const averageScore = coursesScores.reduce((acc, cur) => acc + cur, 0)/coursesScores.length
    return averageScore
}
console.log(getPersonAverage('Ali'))

/// If a student has a course

const studentHasCourse = (personName, courseName) => {
    const student = students.find((person) => {
        return person.name === personName
    })
    console.log(student)
    if (!student) {
        return 'No such student'
    }
    // const course = students.some((item) => {
    //     return item.courses === courseName
    //     // This checks if the whole courses object equals the string 'history' → it will never be true.
    // })
    return Object.keys(student.courses).some((item) => {
        return item === courseName
    })
}
console.log(studentHasCourse('Ethan', 'math'))

// Average score of a course in all students




