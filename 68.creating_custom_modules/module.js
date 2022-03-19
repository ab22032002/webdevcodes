console.log("this is module.js ");
function average (arr)
{   
    let  sum =0 ;
    arr.forEach(element => {
        sum+=element;
    });
    return sum /arr.length;
}
// allowing others to access this function when someone exports it 
module.exports= {
    avg:average,
    name:"rahul",
    clg:"college",
    vlg:"village"
};