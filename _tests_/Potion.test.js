const Potion = require('../lib/Potion.js');
test('creates a health potion object', () => {
//Let's explore that code a bit. First, note the use of the new keyword. 
//As we mentioned earlier, we'll use this to create new Potion objects.
    const potion = new Potion ('health');
//We want to write our tests in a way that illustrates our object. 
//Here, we're assuming that when we create a new Potion, it will take the string we pass in and assign it to the potion's name.
    expect(potion.name).toBe('health');
//Even though we haven't even written any code for the new potion yet, 
//we can still specify that it should have a name property equal to health, and a value property that is a number of some kind.
    expect(potion.value).toEqual(expect.any(Number));
//The expect.any() method takes a constructor as an argument. Here, we're expecting that the value property is created with a Number() constructor. 
//In this instance, we allow the value to be any number, rather than a number in a range so that the test has more flexibility.
});

test('creates a random potion object', () => {
    const potion = new Potion();
  
    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
  });
//Note that this time, we won't check to see if the potion has the name value of health. 
//If we wanted to, we could have written a test that checks to see if name is health, strength, or agility.