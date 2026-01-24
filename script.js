/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
    employees.map((emp) => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  employees.forEach((emp) => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = {
    id: 4,
    name: "susan",
    age: "20",
    profession: "intern"
  };

  employees.push(newEmployee);
  console.log(employees);
}

function removeAdmin() {
  //Write your code here, just console.log
  const filteredEmployees = employees.filter(
    (emp) => emp.profession !== "admin"
  );

  console.log(filteredEmployees);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArray = [
    { id: 5, name: "alex", age: "22", profession: "tester" },
    { id: 6, name: "emma", age: "23", profession: "designer" },
    { id: 7, name: "ryan", age: "21", profession: "manager" }
  ];

  const combinedArray = employees.concat(newArray);
  console.log(combinedArray);
}
