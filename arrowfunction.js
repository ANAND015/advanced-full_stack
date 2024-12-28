//arrowFunction
//funName=(studentsdept)=>{
//    return studentsdept[0]
//}
//console.log(funName(['AIML','CSE','IT']))

//spread operator 
studentsList=["Anand","Ajay","Dinesh","Dhanush","Arun","Chandru","Gunal"]
newstudent=["Chinna","Vaseem","Adi","Elan"]
combinedstudentsList=[...studentsList,...newstudent]
console.log(combinedstudentsList)