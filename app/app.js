/* global prompt:true */

var prompt = require('sync-prompt').prompt;

var dogs = [];
var cats = [];
var goats = [];
var people = [];

var person1 = {name: 'bob', age:10, pets:[]};
var person2 = {name: 'sam', age:5, pets:[]};
var person3 = {name: 'jill', age:7, pets:[]};

people.push(person1, person2, person3);

var animalID = prompt('(d)og, (c)at, (g)oat, or (q)uit: ');
while(animalID !== 'q'){
  switch(animalID){
    case 'd':
      var dog = {};
      dog.name = prompt('What is the dog\'s name? ');
      dog.age = prompt('What is the dog\'s age? ');
      dog.breed = prompt('What is the dog\'s breed? ');
      dogs.push(dog);
      break;
    case 'c':
      var cat = {};
      cat.name = prompt('What is the cat\'s name? ');
      cat.toy = prompt('What is the cats\'s favorite toy? ');
      cat.annoying = prompt('How annoying is the cat? ');
      cats.push(cat);
      break;
    case 'g':
      var goat = {};
      goat.name = prompt('What the name of the goat ');
      goat.mood = prompt('What mood is the goat in? ');
      goat.color = prompt('What color is the goat? ');
      goats.push(goat);
      break;
  }
  animalID = prompt('(d)og, (c)at, (g)oat, or (q)uit: ');
}

var option = prompt('(b)ob, (s)am, or (j)ill or (q)');

while(option !== 'q'){
  //someone typed a j --- for jill
  //find that person in the array of people
  //and console.log it out
  for(var i = 0; i < people.length; i++){
    if( people[i].name[0] === option){
      var client = people[i];
      break;
    }
  }
  console.log('Client: ', client);

  var choice = prompt('What type of pet? (d)og, (c)at, (g)oat ');
    switch(choice){
      case 'd':
        console.log('Dogs:', dogs);
        break;
      case 'c':
        console.log('Cats:', cats);
        break;
      case 'g':
        console.log('Goats:', goats);
        break;
    }
  var name = prompt('What is the name of the animal you want to adopt? ');
    switch(choice){
      case 'd':
        for(var i = 0; i < dogs.length; i++){
          if( dogs[i].name === name){
            var adopted = dogs[i];
            var index = i
            console.log(adopted);
          }
        }
      break;
      case 'c':
        for(var i = 0; i < cats.length; i++){
          if( cats[i].name === name){
            var adopted = cats[i];
            var index = i
            console.log(adopted);
          }
        }
      break;
      case 'g':
        for(var i = 0; i < goats.length; i++){
          if( goats[i].name === name){
            var adopted = goats[i];
            var index = i
            console.log(adopted);
            break;
          }
        }
      }
  // use the above switch to set 'animal' = to whatever choice they made
  // only one for loop is needed
  // loop through animals
  // set animal = to whatever name they input
  //
  //
  //then do this:
  //
  
  // animals.splice(index, 1)
  // client.pets.push(animal)
  //
  //
  //see chyld's code on github
  option = prompt('(b)ob, (s)am, or (j)ill or (q)');
}



console.log('Dogs: ', dogs);
console.log('Cats: ', cats);
console.log('Goats: ', goats);
