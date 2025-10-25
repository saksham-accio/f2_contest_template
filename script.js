/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((employee)=>{
  if(employee.profession==="developer")
  {
  console.log(employee);
  }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((employee)=>{
  if(employee.profession==="developer")
  {
  console.log(employee);}
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "Nidhi", age: "25", profession: "intern" };
    arr.push(newEmployee);
    console.log("After adding new data:", arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const filteredArr = arr.filter((employee) => employee.profession !== "admin");
    console.log("After removing admin:", filteredArr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArr = [
      { id: 4, name: "sara", age: "23", profession: "developer" },
      { id: 5, name: "mike", age: "25", profession: "designer" },
      { id: 6, name: "emma", age: "21", profession: "tester" },
    ];

    const combinedArr = arr.concat(newArr);
    console.log("After concatenation:", combinedArr);
}

