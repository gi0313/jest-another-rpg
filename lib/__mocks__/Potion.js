// module.exports = function() {
//     this.name = 'health';
//     this.value = 20;
//   };

//ES6 syntax
module.exports = class Potion {
  constructor(name) {
    this.types = ['strength', 'agility', 'health'];
    this.name = name || this.types[Math.floor(Math.random()* this.types.length)];

    if (this.name === 'health') {
      this.value = Math.floor(Math.random()*10 + 30);
    } else {
      this.value = Math.floor(Math.random()*5 + 7);
    }
  }
}