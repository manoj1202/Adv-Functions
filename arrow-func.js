const square = (num) => num * num;
console.log(square(5)); 

const people = [{
    name : 'Nick',
    age : 24
},{
    name : 'vikram',
    age : 31
},{
    name : "jen",
    age : 22
}]

const under30 = people.filter((person) => person.age <30);
console.log(under30) 

const na = people.find( (person, select) => person.name.toLowerCase() === select.toLowerCase());
console.log(na(people, 'jen'));
