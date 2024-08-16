function greet1() {
    console.log('greet1');
  }
  
  const greet2 = function () {
    console.log('greet2');
  }
  
  const greet3 = () => {
    console.log('greet3');
  }
  
  greet1();
  greet2();
  greet3();
  
  const sum = (num1:number, num2:number): number => num1 + num2;
  
  console.log(sum(1, 2));
  
  const greet4 = (name:String ) => console.log(`Hello ${name}`);
  
  greet4('John')