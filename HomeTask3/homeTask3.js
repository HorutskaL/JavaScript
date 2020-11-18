// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// const dog = {
//     name: 'Mars',
//     breed: 'sheepdog',
//     age: 5,
//     angerLewel: 1,
//     size: 'large'
// };
// - людину
// const person= {
//     name: 'Ivan',
//     surName: 'Ivanov',
//     age: 25,
//     isMarried: false,
//     education: 'high'
// };
// - автомобіль
// const car= {
//     brand: 'KIA',
//     color: 'black',
//     type: 'sedan',
//     price: 1800,
//     isPresent: false,
//     };
// - квартиру
// const flat= {
//     area: 80,
//     countRoom: 3,
//     floor: 8,
//     price: 56000,
//     hasBalcony: true,
//     }; 
// - книгу
// const book= {
//     name: 'Heart of the Wolf',
//     autor: 'Terry Spear',
//     genre: 'fantasy',
//     prize: 6.15,
//     pageCount: 384,
//     };

// -- Створити масив та вивести його в консоль:
// - з 5 собак
// const dogs =[
//     {name: 'Mars', breed: 'sheepdog', age: 5, angerLewel:1, size: 'large'},
//     {name: 'Nika', breed: 'poodle', age: 7, angerLewel:3, size: 'medium'},
//     {name: 'Rex', breed: 'rotweler', age: 2, angerLewel:1, size: 'large'},
//     {name: 'Bony', breed: 'maltese', age: 1, angerLewel:4, size: 'small'},
//     {name: 'Teri', breed: 'labrador', age: 4, angerLewel:2, size: 'bilargeg'}
// ]
// console.log(dogs);
// - 3 5 людей
// const persons= [
//     {name:'Ivan', surName: 'Ivanov', age: 25, isMarried: false, education: 'high'},
//     {name:'Stanislav', surName: 'Vovk', age: 32, isMarried: true, education: 'high'},
//     {name:'Andrii', surName: 'Masnui', age: 22, isMarried: false, education: 'middle'},
//     {name:'Anna', surName: 'Semenova', age: 19, isMarried: false, education: 'miidle'},
//     {name:'Nina', surName: 'Ivanova', age: 24, isMarried: true, education: 'high'},
// ];
// console.log(persons);
// - з 5 автомобілів
// const cars= [
//     {brand:'KIA', color:'black', type: 'sedan', price: 18000, isPresent: true},
//     {brand:'BMV', color:'red', type: 'sport coupe', price: 28500, isPresent: false},
//     {brand:'Ford', color:'silver', type: 'hatchback', price: 18900, isPresent: false},
//     {brand:'Nissan', color:'green', type: 'compact', price: 15000, isPresent: true},
//     {brand:'Jeep', color:'black', type: 'crossover', price: 28000, isPresent: true}
// ]
// console.log(cars);

// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// const house ={
//     type: 'private',
//     style: 'Ampir',
//     floorCount: 5,
//     yard: {isFlowerBed: true, carouselCount: 4 },
//     typeRooms:[
//         {floorNumber: 1, kitchenCount: 1, bathCount: 2,  bedroomCount: 3},
//         {floorNumber: 2, kitchenCount: 2, bathCount: 1,  bedroomCount: 2},
//         {floorNumber: 3, kitchenCount: 1, bathCount: 1,  bedroomCount: 4},
//         {floorNumber: 4, kitchenCount: 2, bathCount: 2,  bedroomCount: 3},
//         {floorNumber: 5, kitchenCount: 0, bathCount: 3,  bedroomCount: 5}
//         ]   
// };
// console.log(house);

// - водій
// const driver = {
// isLisence: true,
// lisenceCategory: {isCategoryA: true, isCategoryB: true, isCategoryC: false},
// yearExperience: 10,
// cars:[
//     {brand: 'Ford', years: 10, type: 'sedan'},
//     {brand: 'nissan', years: 5, type: 'hatchback'},
//     {brand: 'Opel', years: 1, type: 'crossover'}
// ]
// };
// console.log(driver);

// - іграшку
// const toy ={
//     name: 'Teddy',
//     isFavorite: true,
//     hasYears: 5,
//     function: [
//         {state: 'stay', say: 'Hello'},
//         {state: 'sit', say: 'You are my best friend'},
//     ],
//     color: { colorBear: 'white', colorScarf: 'green', colorHat: 'red'},
// };
// console.log(toy);

// - стіл
// const table ={
//     lenght: 120,
//     width: 90,
//     isWood: true,
//     position: [
//         {position: 'normal', countSeats: 4},
//         {position: 'folding', countSeats: 8},
//     ],
//     details: {color: 'wite', style: 'clasic'}
// }
// console.log(table);

// - сумка
// const bag ={
//     brand: 'Reserved',
//     name: 'Ladies` handbag',
//     discount: true,
//     care: {wash: false, ironing: false, dryCleaning: true},
//     type: [
//         {size: 'small', color: 'black', price: 780},
//         {size: 'small', color: 'red', price: 800},
//         {size: 'small', color: 'brown',price: 780},
//         {size: 'big', color: 'brown', price: 880},
//         {size: 'big', color: 'black', price: 850},
//     ]
// };
// console.log(bag);

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// - статус Андрія
// for(const user of users){
//     if(user.name=='andrey')
//     console.log(user.name, user.status);
// };

// - статус Максима
// for(const user of users){
//     if(user.name=='max')
//     console.log(user.name, user.status);
// };


// - ім'я передостаннього об'єкту
// console.log(users[users.length-2].name);

// - ім'я третього об'єкта
// console.log(users[2].name);

// вік Олега
// for(const user of users){
//     if(user.name=='oleg'){
//         console.log(user.age);
//     };
// };

// - вік Олі
// for(const user of users){
//     if(user.name=='olya'){
//         console.log(user.age);
//     };
// };

// вік + ім'я 5го об'єкта
// console.log('age is '+ users[4].age + ' years old,'+' name is ' + users[4].name);

// вік + сатус Анни

