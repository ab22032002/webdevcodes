console.log("this is the 53rd one");
 jan= "this is ridiculouis ";
console.log( jan +"what can i do !")
x = "thanu";
x2 ="somu";
x1="naru";
function greet(x,greetText){
    console.log(greetText+ " " + x);
    console.log(x+ " is a good boy");
}
greetText ="Good Morning";
greet(x,greetText);
greet(x1,greetText);
greet(x2,greetText);
function greet2(x,greetText2 ="greetings from vs code"){
    console.log(greetText2 + " " + x);
    console.log(x+ " is a good boy");
}
greet2(x,greetText);// this will print as general 
greet2(x1);// uses the default ones 
greet2(x2);

console.log("now the function returning the value");
function sum(s,t,u)
{
    d = s+t+u;
    return d;
}
 returnval = sum(13,23,22);
console.log(returnval);

