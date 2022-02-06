// type Person = {
//   name: string;
//   age: number;
// };

// interface : make more sense when dealing with Object
// interface PersonLoggerFn {
//   (name: string, age: number): string;
// }

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
}

// type : make more sense when dealing with function
type PersonLoggerFn = (name: string, age: number) => string;

export default function play() {
  const name = "Filip";
  const age = 30;

  const person: Person = {
    name: "John",
    age: 32,
  };

  const logPersonInfo: PersonLoggerFn = (
    personName: string,
    personAge: number
  ): string => {
    const info = `Name: ${personName}, age: ${personAge}`;
    console.log(info);
    return info;
  };

  function logPersonInfo2(person: { name: string; age: number }) {
    const info = `Name: ${person.name}, age: ${person.age}`;
    console.log(info);
    return info;
  }

  const log = logPersonInfo(name, age);
  // logPersonInfo2(person);

  // using with "class Person"
  logPersonInfo2(new Person("Edward", 2));
}
