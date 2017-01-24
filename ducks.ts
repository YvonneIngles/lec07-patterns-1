/**
 * Describe the class:
 * A class that represents a Duck who quacks and swims.
 * Intended to be extends to specific species.
 */

export abstract class Duck {
  public flyBehavior:FlyBehavior = new CanFlyBehavior;

  /**
   * Has the duck makes a sound
   */
  quack() {
    console.log("quack!"); // prints a message
  }

  /**
   * Has the duck swim
   * @param distance how far to swim
   */
  swim(distance:number) {
    console.log("Swims the "+distance+"m duckstyle.") // prints a message
  }

  /**
   * Gets the ducks's description
   * @returns A description of the duck
   */
  abstract display():string;

  /**
   * Make ducks fly
   */
  fly() {
    this.flyBehavior.fly();
  }
}

interface FlyBehavior {
  fly():void;
}

class CanFlyBehavior implements FlyBehavior {
  fly():void {
    console.log("flies way!");
  }
}

class NoFlyBehavior implements FlyBehavior {
  fly():void {}
}

let behavior:FlyBehavior = new NoFlyBehavior();
behavior.fly();



export class RedheadDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new CanFlyBehavior();
  }

  display() {
    return "Looks like a RedHead";
  }
}


export class MallardDuck extends Duck {
  display() {
    return "Looks like a Mallard";
  } 
}


export class TealDuck extends Duck {
  display() {
    return "Looks like a Teal";
  }
}


export class RubberDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new NoFlyBehavior();
  }

  quack() {
    console.log('squeek!')
  }

  display() {
    return "A rubber ducky!";
  } 

  //does nto fly
  fly() {} 
}

export class DecoyDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new NoFlyBehavior();
  }

  quack() {}
  fly() {}
  display() {
    return "Looks like a duck, but isnt";
  }
}