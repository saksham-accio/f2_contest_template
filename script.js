/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((obj)=>{
    if(obj.profession === "developer"){
      console.log(obj.name);
    }
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((obj)=>{
    if(obj.profession === "developer"){
      console.log(obj.name);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  const obj =  {
    id:4,name: "johny", age: "18", profession: "developer" 
  }
  arr.push(obj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.filter((obj)=> obj.profession!=="admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 5, name: "susan", age: "21", profession: "developer" },
    { id: 6, name: "mike", age: "22", profession: "designer" },
  ];
  let result = arr.concat(newArr);
  console.log(result);
}
