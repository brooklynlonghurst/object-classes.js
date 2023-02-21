const person = {
    first: "Brooklyn",
    last: "Longhurst",
    age: 25,
}

console.log(person.first) // dot notation 
console.log(person['last']) // bracket notation


const meal = {
    appetizer: "chips & salsa",
    entree: "carne asada burrito",
    dessert: "tres leches",
    drink: "horchata",
}

const meal2 = {
    appetizer: "ceviche",
    entree: "loaded nachos",
    dessert: "fried ice cream",
    drink: "cerveza",
}


//destructing 
let {dessert, appetizer, entree, drink} = meal;

console.log(entree + " with " + drink)

let newFav = "Dr P";

meal.drink = newFav;

//rename and destructure 
const {drink: drink2, appetizer: appetizer2, dessert: dessert2, entree: entree2} = meal2;


//for in loop
    //loop over meal 2
    //if the key dessert update the value to be churros and print to console else print value

for(let key in meal2){
    if(key === "dessert"){
        meal2[key] = "churros";
        console.log(meal2[key]);
    }else{
        console.log(key);
    }
}


//add and remove key value pairs 

let teams = {
    teamOne: ['ryan', 'alex', 'wyatt', 'tj'],
    teamTwo: ['henry', 'cole', 'charlie', 'zeke'],
    teamThree: ['porter', 'blake', 'june', 'owen'],
    teamFour: ['brian', 'riley', 'ezra', 'jordan'],
    teamFive: ['grey', 'milo', 'mckay', 'leo']
  }

  teams.teamSix = ["Jared", "Kyle", "Bob", "Jordan"]
  console.log(teams) 

  delete teams.teamFour //remove with 'delete'
  console.log(teams)

  
