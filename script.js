class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  get makeSound() {
    console.log("The " + this._species + " makes a sound");
  }
}

class Cat extends Animal {
  get purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  get bark() {
    console.log("woof");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
