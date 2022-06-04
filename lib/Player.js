const Potion = require('../lib/Potion');
const Character = require ('./Character');

class Player extends Character{
//old function Player..
constructor(name = '') {
  //Call parent constructor here:
  super(name);
//When we call super(name), it passes the name argument to the constructor() of the Character class, where name and other properties like health are officially defined. 
//Afterwards, the Player class will add any additional properties like this.inventory to the object.

    this.inventory = [new Potion('health'), new Potion()];
}
  //Inherit prototype methods from Character here:
// Player.prototype = Object.create(Character.prototype);
// Player.prototype.getStats = function
getStats() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility
    };
};  
    
getInventory() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
}

addPotion(potion) {
    this.inventory.push(potion);
};

//Player.prototype.usePotion = function
usePotion(index) {
    const potion = this.getInventory().splice(index, 1)[0];
  //The .splice() method removes items from an array and returns the removed item(s) as a new array. 
  //Thus, two things are happening here: the original inventory array has a single Potion removed at the specified index value 
  //and put into a new "removed items" array, then the Potion at index [0] of this "removed items" array is saved in a potion variable.
    switch (potion.name) {
      case 'agility':
        this.agility += potion.value;
        break;
      case 'health':
        this.health += potion.value;
        break;
      case 'strength':
        this.strength += potion.value;
        break;
    }
};
}

//       // returns an object with various player properties
//   this.getStats = function() {
//     return {
//       potions: this.inventory.length,
//       health: this.health,
//       strength: this.strength,
//       agility: this.agility
//     };
//   };

//   // returns the inventory array or false if empty
//   this.getInventory = function() {
//     if (this.inventory.length) {
//       return this.inventory;
//     }
//     return false;
//   };
  //Great job! To recap, new Player('Dave') created a new player object that had four properties. 
  //The object had a name property equal to 'Dave' and three additional Number properties.
  module.exports = Player;