/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((person) => {
    if (person.profession === "developer") {
      console.log(person);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((person) => {
    if (person.profession === "developer") {
      console.log(person);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  // {id:4,name:"susan",age:"20",profession:"intern"}
  arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((person) => person.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 5, name: "mike", age: "22", profession: "developer" },
    { id: 6, name: "lisa", age: "21", profession: "designer" },
    { id: 7, name: "tom", age: "23", profession: "manager" },
  ];
  let concatenatedArr = arr.concat(newArr);
  console.log(concatenatedArr);
}
