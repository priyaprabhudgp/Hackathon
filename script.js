
let NonVeg_proteins = ["Chicken", "Turkey", "Beef", "Pork", "Salmon", "Halibut", "Tilapia"]
let NonVeg_protein_levels = [32, 30, 28, 27, 25, 23, 26]

let Veg_proteins = ["Firm Tofu", "Lentils", "Cottage Cheese", "Cooked Green Peas", "Seitan"]
let Veg_protein_levels = [43.5, 17.9, 23.6, 8.6, 17]

let NonVeg_iron = ["Beef","Chicken","Shellfish"]
let NonVeg_iron_levels = [2.2,1.5,2.3]

let Veg_iron = ["Spinach","Legumes","Quinoa"]
let Veg_iron_levels = [0.8,2.1,2.8]

let NonVeg_calcium = ["Anchovy","Crab"]
let NonVeg_calcium_levels = [104,50]//mg

let Veg_calcium = ["Kale","Seeds"]
let Veg_calcium_levels = [125,59]//mg

let NonVeg_vd = ["Egg yolks","Salmon"]
let NonVeg_vd_levels = [37,400]//IU per serving

let Veg_vd = ["Cheese","Mushrooms"]
let Veg_vd_levels = [7,1]//IU per serving

//function secondpage () {
  //let name = document.getElementById("name").value;
  //document.write()
function nonvegc (){
  document.write("Great! Here are some food options with tons of calcium, with the amount of milligrams written alongside!"+"<br/>");
  for (var y = 0; y < NonVeg_calcium.length; y++) {
    document.write(NonVeg_calcium[y] +": "+ NonVeg_calcium_levels[y] + "mg"+"<br/>")}
}

function vegc (){
  document.write("Fantastic! Here are some alternative options, still full of calcium, for you! The amount in milligrams is written alongside."+"<br/>");
  for (var w = 0; w < Veg_calcium.length; w++) {
    document.write(Veg_calcium[w] +": "+ Veg_calcium_levels[w] + "mg"+"<br/>")}
}

function nonvegd (){
  document.write("Cool! Here are a couple of suggestions for you, full of Vitamin D, with the IU per serving!"+"<br/>");
  for (var l = 0; l < NonVeg_vd.length; l++) {
    document.write(NonVeg_vd[l] +": "+ NonVeg_vd_levels[l] + "IU"+"<br/>")}
}
function vegd (){
  document.write("We applaud you! Here are some recommendations for you that are full of Vitamin D, with the IU per serving!"+"<br/>");
  for (var l = 0; l < Veg_vd.length; l++) {
    document.write(Veg_vd[l] +": "+ Veg_vd_levels[l] + "IU"+"<br/>")}
  
}

function nonvegi () {
  document.write("Admirable goal! Here are some non-vegetarian iron-full options for you, with the amount of milligrams of iron!"+"<br/>");
  for (var l = 0; l < NonVeg_iron.length; l++) {
    document.write(NonVeg_iron[l] +": "+ NonVeg_iron_levels[l] + "mg"+"<br/>")}
}

function vegti () {
  document.write("Here are some alternative options to provide you with tons of iron! They are listed with the milligrams per serving."+"<br/>");
  for (var k = 0; k < Veg_iron.length; k++) {
    document.write(Veg_iron[k] +": "+ Veg_iron_levels[k] + "mg"+"<br/>")}
}

function nonveg () {
  document.write("Here are some awesome non-vegetarian, protein-filled food options for you, with the grams of protein per serving!"+ "<br/>");
  for (var i = 0; i < NonVeg_proteins.length; i++) {
      document.write(NonVeg_proteins[i] +": "+ NonVeg_protein_levels[i] + "g"+"<br/>")}
}  

function veg () {
  document.write("That's very cool! Here are some alternative protein-laden options for you!"+"<br/>");
  for (var j = 0; j < Veg_proteins.length; j++) {
      document.write(Veg_proteins[j] +": "+ Veg_protein_levels[j] +"g"+ "<br/>")}
}

function streak (){
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 1;
  }

  document.write("Your streak is "+localStorage.clickcount+" days! Keep up the good work!");
  if (localStorage.clickcount==2){
    document.write("You unlocked the HealthHero badge with a 2-day streak! Keep going to unlock more badges!");
  }
  else if (localStorage.clickcount==5){
    document.write("You unlocked the NutriQuester badge with a 5-day streak! Congratulations!");
  }
  else if (localStorage.clickcount==7){
    document.write("You unlocked the NutriWeek badge with a 1-week streak! Wow, what a feat!");
  }
  else if (localStorage.clickcount==14){
    document.write("Congratulations, you unlocked the HealthHabitHero badge with a 2-week streak! Incredible!");
  }
}
//stuff to do:
document.getElementById('Non Veg Proteins').addEventListener('click', function() { 
  // Define the function for button 1 
  // This function will be executed when button 1 is clicked 
}); 

document.getElementById('Veg Proteins').addEventListener('click', function() { 
  // Define the function for button 1 
  // This function will be executed when button 1 is clicked 
}); 

document.getElementById('Veg Options').addEventListener('click', function() { 
  // Define the function for button 1 
  // This function will be executed when button 1 is clicked 
}); 

document.getElementById('Non-Veg Options').addEventListener('click', function() { 
  // Define the function for button 1 
  // This function will be executed when button 1 is clicked 
}); 