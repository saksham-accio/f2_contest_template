/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map((el)=>{
    if(el.profession==="developer") console.log(`id : ${el.id}, Name : ${el.name}, Age : ${el.age}, Profession : ${el.profession}`);
  });
  //Write your code here , just console.log
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((el)=>{
    if(el.profession==="developer") console.log(`id : ${el.id}, Name : ${el.name}, Age : ${el.age}, Profession : ${el.profession}`);
  });
}

function addData() {
   let temp = { id: 4, name: "Neel", age: "27", profession: "Engineer" };
   arr.push(temp);
   arr.forEach((el)=>{
    console.log(`id : ${el.id}, Name : ${el.name}, Age : ${el.age}, Profession : ${el.profession}`);
  });
  //Write your code here, just console.log
}

function removeAdmin() {
  arr=arr.filter((el)=> el.profession!=="admin");
  //Write your code here, just console.log
  arr.forEach((el)=>{
    console.log(`id : ${el.id}, Name : ${el.name}, Age : ${el.age}, Profession : ${el.profession}`);
  });
}

function concatenateArray() {
  let arr1 = [
  { id: 5, name: "Badru", age: "21", profession: "developer" },
  { id: 6, name: "Doza", age: "22", profession: "hr" },
  { id: 7, name: "Ansari", age: "23", profession: "admin" },
];
  //Write your code here, just console.log
  arr=arr.concat(arr1);
  arr.forEach((el)=>{
    console.log(`id : ${el.id}, Name : ${el.name}, Age : ${el.age}, Profession : ${el.profession}`);
  });
}
