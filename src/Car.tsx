//  the interface
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
  }
  
  // Implement the Car class that implements the Vehicle interface
  class Car implements Vehicle {
    make: string;
    model: string;
    year: number;
  
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start(): void {
      console.log("Car engine started");
    }
  }
  
  // Create an instance of  Car class
  const myCar = new Car("BMW", "F30", 2024);
  
  // Call the start method 
  myCar.start();
  