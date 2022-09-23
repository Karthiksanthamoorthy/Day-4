var request=new XMLHttpRequest();
request.open("Get","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    for(var i=0;i<res.length;i++){
        console.log(res[i].name,res[i].region,res[i].subregion,res[i].population);
        console.log(res[i].flag);
        
}
}


//// Stringify ////
Object1 ={
    name:"Karthik",
    age:23
 };
 Object2 ={
    age:23,
    name:"Karthik"
}
 JSON.stringify(Object1)==JSON.stringify(Object2)
const studentstr = JSON.stringify(Object1, Object2);
console.log(studentstr);