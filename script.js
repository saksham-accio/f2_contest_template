/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap(arr) {
  arr.map((emp) => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}

function PrintDeveloperbyForEach(arr) {
  //Write your code here , just console.log
  arr.forEach((emp) => {
    if (emp.profession === "developer") {
      console.log(emp);
    }
  });
}

function addData(arr) {
  //Write your code here, just console.log
  arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
  console.log(arr);
}

function removeAdmin() {
  arr = arr.filter((emp) => emp.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const other = [
    { id: 5, name: "alice", age: "23", profession: "designer" },
    { id: 6, name: "bob", age: "24", profession: "manager" },
    { id: 7, name: "charlie", age: "21", profession: "tester" },
  ];
  const combined = arr.concat(other); // or [...arr, ...other]
  console.log(combined);
}

PrintDeveloperbyMap(arr);
PrintDeveloperbyForEach(arr);
addData(arr);
removeAdmin(arr);
concatenateArray(arr);
