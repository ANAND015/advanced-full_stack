//ArrowFunction

arrow1=()=>{
    console.log("arrow1: Hi")
};

arrow2=()=>{
    var a=10
    console.log(a)
    return a;
};

arrow3=(a,b)=>{
    console.log("arrow3",a+b)
};

arrow4=(a,b)=>{
    console.log("arrow4",a+b)
    return a+b;
};

arrow1()
res=arrow2()
console.log(res)
arrow3(4,6)
arrow4(6,8)
res1=arrow4(6,8)
console.log(res1)