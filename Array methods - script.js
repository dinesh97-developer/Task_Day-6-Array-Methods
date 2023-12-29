// 1. Get all the countries from Asia continent /region using Filter function.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function() {
    //console.log(this.response === request.response);
    var res = JSON.parse(this.response);
    //var res = JSON.parse(request.response)
    console.log(res);
    var asiacountry = res.filter((ele)=> ele.region === "Asia")
    var cname = asiacountry.map((ele) => ele.name.common)
    console.log(cname);
}  

/* // 2. Get all the countries with a population of less than 2 lakhs using Filter function.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function() {
    var res = JSON.parse(this.response);
    console.log(res);
    var popu = res.filter((ele) => ele.population<200000)
    //console.log(popu);
    var cname = popu.map((ele)=> ele.name.common)
    console.log(cname);
}

// 3. Print the following details name, capital, flag, using forEach function.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function() {
    var res = JSON.parse(this.response);
    console.log(res);
    res.forEach(element => {
        console.log(element.name.common);
        console.log(element.capital);
        console.log(element.flag);
    });
}

// 4. Print the total population of countries using reduce function.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function() {
    var res = JSON.parse(this.response);
    console.log(res);
    var totalpopu = res.reduce((acc,cv) => acc+cv.population,0)
    console.log(totalpopu);
}

// 5. Print the country that uses US dollars as currency.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function() {
    var res = JSON.parse(this.response);
    console.log(res);

    for (var i=0; i<res.length;i++)
    {
        var currencies = res[i].currencies;
        for (var code in currencies)
        {
            if (currencies[code].name === "United States dollar") 
                console.log("Country using US dollars:", res[i].name.common);
        }
    }
}*/
