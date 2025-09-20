/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(emp => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(emp => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });

}

function addData() {
  //Write your code here, just console.log
  let newEmployee = { id: 4, name: "susan", age: "22", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let filteredArr = arr.filter(emp => emp.profession !== "admin");
  console.log(filteredArr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 4, name: "sam", age: "23", profession: "developer" },
    { id: 5, name: "lisa", age: "21", profession: "designer" },
  ];

  let combined = arr.concat(newArr);
  console.log(combined);
}

