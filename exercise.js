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

///////////////
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
/////////////////
