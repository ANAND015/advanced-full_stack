async function funName()
{
    setTimeout(()=>{
        console.log("KEC FunName")
    },5000) ;                                                      
}

arrowFunName=async()=>{
    setTimeout(()=>{
        console.log("KEC")
    },4000)

}
funName()
arrowFunName()
