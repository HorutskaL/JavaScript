// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. 
// (Т.е поле name  должно присутствовать только 1 раз в одном объекте )
const book ={
    title: 'War and Peace',
    autor: 'Leo Tolstoy',
    pageCount: 1024 
};
const cartoon ={
    name: 'Futurama',
    seasonCount: 10,
    company: '20th Centuri Fox Television',
    format: 'animation'
};
const sity ={
    population: 120450,
    streetCount: 450,
    hasRiver: true,
    foundedBy: 'Danylo Halytsky'
};
const apple ={
    color: 'green',
    weight: 150,
    sort: 'Gold',
    country: 'Ukraine'
};
const phone = {
    brand: 'Sumsung',
    year: 2020,
    cameraCount: 3,
    isGuaranty: true
};

// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
const store ={
    type: 'Speciality store',
    sectionCount: 3,
    brandName: ['Sony', 'Panasonic','LG'],
    product:{countPhoneModel: 1249, countTvModel :348},
};

const game ={
    genre: ['shooter', 'action', 'strategy','simulation'],
    isOnlineOnly: true,
    level:{speedCount: 4, complicationCount: 2 }
};

const movie = {
    countSeries: 1,
    director: 'Wolfgang Petersen',
    starring: ['Brad Pitt', 'Eric Bana', 'Orlando Bloom'],
    income: {budget: 175, boxOffice: 497.4}
};

const man = {
    surname: 'Ivanov',
    profession: 'developer',
    skills: ['SQL', 'JS', 'C#'],
    family: {wife: 'Nadya', son: 'Petro'}
};

const coat ={
    model: 'oversize',
    isAvailable: true,
    color: {lenght: 'short', color: 'red'},
    size: ['S', 'M', 'L'],
}

// При помощи for in вывести все ключи всех объектов из задания 1 и 2
// for (let key in book){
//     console.log(key);
// };
// for (let key in cartoon){
//     console.log(key);
// };
// for (let key in city){
//     console.log(key);
// };
// for (let key in apple){
//     console.log(key);
// };
// for (let key in phone){
//     console.log(key);
// };
// for (let key in store){
//     console.log(key);
// };
// for (let key in game){
//     console.log(key);
// };
// for (let key in movie){
//     console.log(key);
// };
// for (let key in man){
//     console.log(key);
// };
// for (let key in coat){
//     console.log(key);
// };

// При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2
// let keyBook = Object.keys(book);
// console.log(keyBook);

// let keyCartoon = Object.keys(cartoon);
// console.log(keyCartoon);

// let keyCity = Object.keys(city);
// console.log(keyCity);

// let keyApple = Object.keys(apple);
// console.log(keyApple);

// let keyPhone = Object.keys(phone);
// console.log(keyPhone);

// let keyStore = Object.keys(store);
// console.log(keyStore);

// let keyGame = Object.keys(game);
// console.log(keyGame);

// let keyMovie = Object.keys(movie);
// console.log(keyMovie);

// let keyMan = Object.keys(man);
// console.log(keyMan);

// let keyCoat = Object.keys(coat);
// console.log(keyCoat);

// Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет.
//  (Значаения полей могу быть выдуманными)
const cars =[
    {model: 'Nissan', year: 2005, power: 210, color: 'black'},
    {model: 'Ford', year: 2015, power: 310, color: 'blue'},
    {model: 'Opel', year: 2018, power: 335, color: 'silver'},
    {model: 'Susuki', year: 2012, power: 230, color: 'black'},
    {model: 'KIA', year: 2003, power: 285, color: 'black'},
    {model: 'Volkswagen', year: 2017, power: 295, color: 'brown'},
    {model: 'Subaru', year: 2013, power: 305, color: 'red'},
    {model: 'Jeep', year: 2010, power: 385, color: 'black'},
    {model: 'Nissan', year: 2019, power: 380, color: 'red'},
];
// Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. 
// (Значаения полей могу быть выдуманными)
const sities =[
    {name: 'Milan', population: 1500000, country: 'Italy', region: 'west' },
    {name: 'London', population: 3800000, country: 'UK', region: 'west' },
    {name: 'Paris', population: 2152000, country: 'France', region: 'east' },
    {name: 'Berlin', population: 3387000, country: 'Germany', region: 'west' }
]
// Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. 
// Водитель является отдельным объектом с полями имя, возраст, пол, стаж.
const carsNew =[
    {model: 'Nissan', year: 2005, power: 210, color: 'black', driver: {name: 'Ivan', age: 35, sex: 'male', experince: 15}},
    {model: 'Ford', year: 2015, power: 310, color: 'blue', driver: {name: 'Petro', age: 26, sex: 'male', experince: 10}},
    {model: 'Opel', year: 2018, power: 335, color: 'silver', driver: {name: 'Taras', age: 21, sex: 'male', experince: 2}},
    {model: 'Susuki', year: 2012, power: 230, color: 'black', driver: {name: 'Max', age: 45, sex: 'male', experince: 25}},
    {model: 'KIA', year: 2003, power: 285, color: 'black', driver: {name: 'Mark', age: 31, sex: 'male', experince: 14}},
    {model: 'Volkswagen', year: 2017, power: 295, color: 'brown', driver: {name: 'Semen', age: 40, sex: 'male', experince: 18}},
    {model: 'Subaru', year: 2013, power: 305, color: 'red', driver: {name: 'Ira', age: 19, sex: 'female', experince: 1}},
    {model: 'Jeep', year: 2010, power: 385, color: 'black', driver: {name: 'Marta', age: 25, sex: 'female', experince: 4}},
    {model: 'Nissan', year: 2019, power: 380, color: 'red', driver: {name: 'Anna', age: 41, sex: 'female', experince: 20}},
];

// проитерировать каждый массив из задания 5,6,7 при помощи while.
// let index =0;
// while (index<cars.length){
//     console.log(cars[index]);
//     index++;
// };
// console.log('--------------------------');
// let i=0;
// while (i<sities.length){
//     console.log(sities[i]);
//     i++;
// };
// console.log('--------------------------');
// let k=0;
// while (k<carsNew.length){
//     console.log(carsNew[k]);
//     k++;
// };

// проитерировать каждый массив из задания 5,6,7 при помощи for
// for(let i=0; i<cars.length;i++){
//     console.log(cars[i]);
// };
// console.log('--------------------------');
// for(let i=0; i<carsNew.length;i++){
//     console.log(carsNew[i]);
// };
// console.log('--------------------------');
// for(let i=0; i<sities.length;i++){
//     console.log(sities[i]);
// };

// проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// for(const index of cars){
//     console.log(index);
// };
// console.log('--------------------------');
// for(const index of carsNew){
//     console.log(index);
// };
// console.log('--------------------------');
// for(const index of sities){
//     console.log(index);
// };

// взять объекты из задания 1 и превратить каждый в json.

// const bookJS = JSON.stringify(book);
// console.log(bookJS);
// const cartoonJS = JSON.stringify(cartoon);
// console.log(cartoonJS);
// const sityJS = JSON.stringify(sity);
// console.log(sityJS);
// const appleJS = JSON.stringify(apple);
// console.log(appleJS);
// const phoneJS = JSON.stringify(phone);
// console.log(phoneJS);

// взять json из задания 11 и превратить их обратно в объекты.
// const bookParse = JSON.parse(bookJS);
// console.log(bookParse);
// const cartoonParse = JSON.parse(cartoonJS);
// console.log(cartoonParse);
// const sityParse = JSON.parse(sityJS);
// console.log(sityParse);
// const appleParse = JSON.parse(appleJS);
// console.log(appleParse);
// const phoneParse = JSON.parse(phoneJS);
// console.log(phoneParse);

// взять массив из задания 5,в цикле перебрать его объекты превратив их в json 
// for(const idex of cars){
//     console.log(JSON.stringify(idex));
// };

// взять массив из задания 6,в цикле перебрать его объекты превратив их в json
// for(const idex of sities){
//     console.log(JSON.stringify(idex));
// };
// взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.

// for(const idex of carsNew){
// let carsNewJS = JSON.parse(JSON.stringify(idex));
// console.log(carsNewJS);
// };

// Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является 
// массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// const users =[
//     {name: 'Ivan', age: 24, skills: ['SQL', 'java']},
//     {name: 'Anna', age: 34, skills: ['SQL', 'C++']},
//     {name: 'Ivan', age: 24, skills: ['Java Script', 'Pyton']},
//     {name: 'Ivan', age: 24, skills: ['C#', 'java']},
//     {name: 'Ivan', age: 24, skills: ['SQL', 'Ruby']}
// ];
// for (let index=0; index < users.length; index++){
//     console.log(users[index]);
//     console.log(users[index].skills);

// ;}

// Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое 
// является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его
//  массив skills. Скопировать все skills всех пользователей в отедльный массив
// let skillsArr =[];
// for (let index=0; index < users.length; index++){
//     console.log(users[index]);
//     skillsArr[index] = users[index].skills;
// ;}
// console.log(skillsArr);

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
// let users = [
//     {name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, 
//     {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, 
//     {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, 
//     {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, 
//     {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];

//     for(let i=0; i<users.length; i++){
//     console.log(users[i]);
//     for(let j=0; j < users[i].skills.length; j++){
//         console.log(users[i].skills[j]);
//     };
// };

// За допомоги циклу проітерувати  масив users, 
// записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for(let i=0; i<users.length; i++){
//     let htmlDiv = document.createElement('div');
//     htmlDiv.innerText= `${users[i].name} ${users[i].age} ${users[i].skills}`;
//     htmlDiv.style.background='red';
//     document.body.appendChild(htmlDiv);
// };

// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги 
// document.createElement, розділивши всі властивості по своїм блокам (div>div*4)


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги 
// document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком,
//  з блоками для кожної властивості

// for(let i=0; i<users.length; i++){
//         // console.log(users[i]);
//         let htmlDiv = document.createElement('div');
//         for(const n in htmlDiv){
//         n.innerText= `${users[i].name} ${users[i].age} ${users[i].skills}`;
//     //    n.style.background='red';
//     }
//         document.body.appendChild(htmlDiv);
//     };


// for (const user of users) {
//         let outerDIV = document.createElement('div');

//     for (const userKey in user) {
//         let innerDiv = document.createElement('div');
//         innerDiv.innerText = `${user[userKey]}`;
//         innerDiv.style.margin = '5px';
//         innerDiv.style.background = '#ffefd5';
//         innerDiv.classList.add(userKey);
//         outerDIV.appendChild(innerDiv);
//            };
//     document.body.appendChild(outerDIV);
// };

// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги 
// document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, 
// з блоками для кожної властивості

            			// let users = [{
            			// 	name: 'vasya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
            			// }, {
            			// 	name: 'petya',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
            			// }, {
            			// 	name: 'kolya',
            			// 	age: 29,
            			// 	status: true,
            			// 	address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
            			// }, {
            			// 	name: 'olya',
            			// 	age: 28,
            			// 	status: false,
            			// 	address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
            			// }, {
            			// 	name: 'max',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
            			// }, {
            			// 	name: 'anya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
            			// }, {
            			// 	name: 'oleg',
            			// 	age: 28,
            			// 	status: false,
            			// 	address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
            			// }, {
            			// 	name: 'andrey',
            			// 	age: 29,
            			// 	status: true,
            			// 	address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
            			// }, {
            			// 	name: 'masha',
            			// 	age: 30,
            			// 	status: true,
            			// 	address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
            			// }, {
            			// 	name: 'olya',
            			// 	age: 31,
            			// 	status: false,
            			// 	address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
            			// }, {
            			// 	name: 'max',
            			// 	age: 31,
            			// 	status: true,
            			// 	address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
                        // }];
//За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги 
// document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком,
//  з блоками для кожної властивості

// for (let i =0; i<users.length; i++) {
//     const user = users[i];
//     const nameDiv = document.createElement('div');
//     const ageDiv = document.createElement('div');
//     const statusDiv = document.createElement('div');
//     const addressDiv = document.createElement('div');
//     nameDiv.innerText = `${user.name}`;
//     ageDiv.innerText = `${user.age}`;
//     statusDiv.innerText = `${user.status}`;
    
//     const outerDIV = document.createElement('div');
//         for (const userAddress in user['address']) {
//         const addressDetDiv = document.createElement('div');
//         addressDetDiv.innerText=`${user.address[userAddress]}`;
//         addressDiv.appendChild(addressDetDiv);
//         console.log(user.address[userAddress]);
//         };
    
//     outerDIV.appendChild(nameDiv);
//     outerDIV.appendChild(ageDiv);
//     outerDIV.appendChild(ageDiv);
//     outerDIV.appendChild(addressDiv);
//     outerDIV.appendChild(statusDiv);
//     document.body.appendChild(outerDIV);
// };



// Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    // let usersWithId = [
    //     {id: 1, name: 'vasya', age: 31, status: false}, 
    //     {id: 2, name: 'petya', age: 30, status: true}, 
    //     {id: 3, name: 'kolya', age: 29, status: true}, 
    //     {id: 4, name: 'olya', age: 28, status: false},];
    // let citiesWithId = [
    //     {user_id: 3, country: 'USA', city: 'Portland'}, 
    //     {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, 
    //     {user_id: 2, country: 'Poland', city: 'Krakow'}, 
    //     {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .

// for (const user of usersWithId){
//     for (const city of citiesWithId){
//         if (user.id===city.user_id){
//             user.address = city;
//         };
//     }; 
// };
// console.log(usersWithId);



