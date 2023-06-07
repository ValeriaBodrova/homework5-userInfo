let birthDate = parseInt(prompt("Enter a year of your birth with 4-digit number"));

let city = prompt(" Enter a city you live in");

let sport = prompt("What is your favourite sport type?");

if (birthDate > 0){
var age = 2023 - birthDate;
} else {
    alert("too bad you didn't want to enter your year of birth");
}

if ( city !== "Kyiv" && city !== "Washington" && city !== "London"){
    var city1 = `You live in ${city}`;
} else if (city === "Kyiv") {
    var city1 = "You live in the capital of Ukraine";
} else if (city === "Washington"){
    var city1 = "You live in the capital of USA";
} else if (city === "London"){
    var city1 = "You live in the capital of England";
} else{
    alert("too bad you didn't want to enter your city");
}

if (sport === "boxing"){
var sport1 = "Cool! You want to be like Vitaliy Klychko!";
} else if( sport === "swimming"){
var sport1 = "Cool! You want to be like Mykhaylo Romanchuk!";
} else if (sport === "equestrian sport"){
var sport1 = "Cool! You want to be like Redko Radion!"
} else if(sport === null){
    alert("too bad you didn't want to enter your favourite type of sport");
}


alert(`
Your age: ${age} 
${city1} 
${sport1}`)
