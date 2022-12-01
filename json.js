//How to compare two JSON have the same properties without order?

//var obj1 = { name: "Person 1", age:5 };
//var obj2 = { age:5, name: "Person 1" };

Solution:

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };


var any = (a,b)=>{
    let keys1 = Object.keys(a);
    let keys2 = Object.keys(b);
    let flag = false;

    if(keys1.length == keys2.length)
    for(var key in a){
        if(a[key] == b[key])
        flag = true;
        else{
            flag= false;
            break;
        }
    }
    return flag;
}

console.log(any(obj1,obj2));