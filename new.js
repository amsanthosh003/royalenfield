function add(a,b)
{
    return a+b;
}
console.log(add(2,3));

var x= function(a,b)
{
  return a-b;
}
console.log(x(4,2));

(
    function(a,b)
    {
console.log(a+b)
    }

)(5,3);

var x=new Function ("a","b","c","return a+b+c;");
console.log(x(2,3,4));

var x= ['a','b,','c'];
{
    console.log(x.push("d"));
    console.log (x)
}