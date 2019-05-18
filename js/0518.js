function a(){
  for(let i = 0;i<5; i++){
    console.log(i)
  }
}

class Person {
  constructor(name,age) {
    this.name = name;
    this.age = age;
  }
  sayHello(){
    console.log(`hello,${this.name},i am ${this.age} year old`);
  }
}
