//Rest operator

function restoperator(a,b,c,...arr){
    console.log(arr)
    combinedarr=[a,b,c,...arr]
    console.log(combinedarr)
}
restoperator("Dinesh","karthik","Rajan","Anand","Ajay","Arun")