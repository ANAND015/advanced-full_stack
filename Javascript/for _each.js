//Example 1

// array=[10,20,30]
// array.forEach((element,index)=>{
//     console.log("Element is ",element," and its index is ",index)
// })


// Example 2 

obj1={
    "firstname":"Anand",
    "lastname":"Roman",
    "age":"20"
}
console.log(obj1);
for(key in obj1){
    value=obj1[key]
    console.log(key,":",value)
}