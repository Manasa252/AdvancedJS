const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
console.log(fruits);
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);
fruits.fill("Kiwi");
console.log(fruits);

const even=[2,4,6,8];
const check=(num)=>{
    return num;
}

console.log(even.every(check));
console.log(even.some(check));
console.log(even.findIndex(check));