// Use the rest countries API url -> https://restcountries.com/v3.1/all and display all the country flags in console


var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all", true);
request.send();
request.onload=function(){

const jsonData = JSON.parse(request.responseText);
console.log(jsonData);

for(var country of jsonData){
    const { flag } = country;
    console.log(flag);
    }
}

//Use the same rest countries and print all countries name, region, sub region and population

var request2 = new XMLHttpRequest();

request2.open("GET","https://restcountries.com/v3.1/all", true);
request2.send();
request2.onload=function(){

const jsonData = JSON.parse(request2.responseText);
console.log(jsonData);

for(var country of jsonData){
    const { flag, name, region, subregion, population} = country;
    console.log( `${flag} is the flag for ${name.common} region: ${region} (sub-region : ${subregion}) where the population is ${population}`);
    }

}