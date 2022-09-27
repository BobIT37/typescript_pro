const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping);

const sequence = [1, 1, 2, 3, 5, 8, 13];
console.log(sequence)

const random = ['tree', 795, [0, 1, 2]];
console.log(random)

//finding length array
const shopping1 = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping1.length); 

//accessing and modifying Array
const shopping2 = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
console.log(shopping2[0]);

const shopping3 = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
shopping3[0] = 'tahini';
console.log(shopping3);

// const random1 = ['tree', 795, [0, 1, 2]];
// console.log(random1[2][1])

//finding items in array
const birds = ['Parrot', 'Falcon', 'Owl'];
console.log(birds.indexOf('Owl'));   //  2
console.log(birds.indexOf('Rabbit')); // -1

//add items
//push() - last added

const cities = ['Manchester', 'Liverpool'];
cities.push('Cardiff');
console.log(cities);      // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push('Bradford', 'Brighton');
console.log(cities);

//unshift = add an item to the start of the array
const cities1 = ['Manchester', 'Liverpool'];
cities1.unshift('Edinburgh');
console.log(cities1);

//Removing item
//pop() remove last item
const cities2 = ['Manchester', 'Liverpool'];
cities2.pop();
console.log(cities2);

//shift removes first item
const cities3 = ['Manchester', 'Liverpool'];
cities3.shift();
console.log(cities3); 

// splice() -  if you know the index of an item, you can remove it from the array using splice():

const cities4 = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
const index = cities4.indexOf('Liverpool');
if (index !== -1) {
  cities4.splice(index, 1);
}
console.log(cities4);

/*
In this call to splice(), the first argument says where to start removing items, 
and the second argument says how many 
items should be removed. So you can remove more than one item:
*/

const cities5 = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
const index1 = cities5.indexOf('Liverpool');
if (index1 !== -1) {
  cities5.splice(index1, 2);
}
console.log(cities5);

//Accessing every item

const birds1 = ['Parrot', 'Falcon', 'Owl'];

for (const bird of birds1) {
  console.log(bird);
}

//map()

function double(number: any){
    return number * 2;
}

const numbers =[2,5,6,7,8];

const doubled = numbers.map(double);
console.log(doubled)

//filter()

function isLong(city: any){
    return city.length > 8;
}

const cities6 = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
const longer = cities6.filter(isLong);
console.log(longer); 

function isCity(city: string){
    return city.startsWith("L")
}
const cities7 = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
const longer1 = cities7.filter(isCity);
console.log(longer1);

//converting array to string

const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';

//split convert array
const citiess = data.split(',')
console.log(citiess)

console.log(citiess.length)

//convert string
const commaSeparated = citiess.join(',');
console.log(commaSeparated)