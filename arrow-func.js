const square = (num) => num * num;
console.log(square(5)); 

const people = [{
    name : 'Nick',
    age : 22
},{
    name : 'vikram',
    age : 31
},{
    name : "jen",
    age : 22
}]

const under30 = people.filter((person) => person.age <30);
console.log(under30) 

const na = people.find((person) => person.name.toLowerCase() === 'jen' );
console.log(na);

const age22 = people.find((person) => person.age === 22);
console.log(age22);