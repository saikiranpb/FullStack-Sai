// const shape = {
//     radius: 10,
//     diameter() {
//       return this.radius * 2;
//     },
//    perimeter: (radius) => 2 * Math.PI * radius
//   };
  
//   console.log(shape.diameter());
//   console.log(shape.perimeter());
//   console.log(+false)



// function bark() {
//     console.log('Woof!');
//   }
  
//   bark.animal = 'dog';



function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  const member = new Person('Lydia', 'Hallie');
  Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
  
  console.log(member.getFullName());