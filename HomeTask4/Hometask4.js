// - створити функцію яка виводить масив
// const arr = [1,2,3,4,5,6];

// function printArrayt (array) {
//     for (const elementArr of array)
//     console.log(elementArr);
// };
// printArray(arr);

// - створити функцію яка заповнює масив рандомними числами та виводить його. 
// Для виведення використати попвередню функцію.

// function createArray(length){
// let array = [];
//     for (let i =0; i<length; i++){
//     array.push(Math.round(Math.random()*100));
//     };
//     return array;
// };
// printArrayt(createArray(10));


// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function minNumber (one, two, three){
//     let min;
//     if (one <= two && one <= three) min = one;
//     if (two <= one && two <= three) min = two;
//     if (three <= one && three <= two) min = three;
//     console.log(min);
//     return min;
// };
// minNumber(4,2,-2);

// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function maxNumber (one, two, three){
//     one > two? max = one: max = two;
//     max > three? max: max = three; 
//     console.log(max);
//     return max;
// };
// maxNumber(14,9,22);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function maxArguments() {
//     let max = arguments[0];
//     let min = arguments[0];
//     for (const i of arguments) {
//         if (i > max) max = i;
//         if (i < min) min = i;
//     }
//     console.log(max);
//     return min;
// }
// const minElement = maxArguments(1,2,3,4,5,100);
// console.log(minElement);

// - створити функцію яка повертає найбільше число з масиву

// function maxElementFromArray (array) {
//     let max = array[0];
//     for (const i of array){
//         if (i> max) max = i;
//     };
//     return max;
// };
// const arr = [4,5,6,7];
// console.log(maxElementFromArray([23,4,5,6,7]));
// console.log(maxElementFromArray(arr));

// - створити функцію яка повертає найменьше число з масиву
// function minElementFromArray (array) {
//     let min = array[0];
//     for (const i of array){
//         if (i < min) min = i;
//     };
//     return min;
// };
// console.log(minElementFromArray([23,4,5,6,7]));

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// const sumElementFromArray = (array) => {
//     let sum = 0;
//     for (const i of array){
//         sum +=i;
//     };
//     return sum;
// };
// console.log(sumElementFromArray([23,4,5,6,7]));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// const sumElementFromArray = (array) => {
//     let sum = 0;
//     for (const i of array){
//         sum +=i;
//     };
//     return sum/array.length;
// };
// console.log(sumElementFromArray([23,4,5,16,7,11]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// const sumElementFromArray = (array) => array.length;
// console.log(sumElementFromArray(['one',true,5,16,7,11]));

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// const usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false}, 
//     {id: 2, name: 'petya', age: 30, status: true}, 
//     {id: 3, name: 'kolya', age: 29, status: true}, 
//     {id: 4, name: 'olya', age: 28, status: false},];

// const fieldCount = (object) => {
//     let count = 0;
//     for (const item of object) {
//         if (typeof item==='object' && !Array.isArray(item)){
//             for (const element in item){
//                 count++;
//             };
//         };
//         };
//     return count;
// };
// console.log(fieldCount(usersWithId));

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// const returnSum = (arr1, arr2) => {
// let arrSum = [];
// for (let i =0; i<arr1.length; i++){
//     arrSum.push(arr1[i]+arr2[i]);
//     };
//     return arrSum;
// };
// const returnSum1 = returnSum([1,2,3,4],[2,3,4,5])
// console.log(returnSum1);

// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// const changeIndex = (arr, index) => {
//     const array = [...arr];
//     if (index < arr.length-2){
//         let number = array[index];
//         array[index] = array[index+1];
//         array[index+1]=number;
//         };
//     return array;
// };
// const changeIndex1 = changeIndex([1,2,3,4,5],2);
// console.log(changeIndex1);

// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. 
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// const changeElementPosition = (arr) => {
//     const array = [...arr];
//     const arrayNew = [];
//     const arrayNewZero = [];

//     for (let i =0; i < array.length; i++){
//         array[i]>0? arrayNew.push(array[i]) : arrayNewZero.push(array[i]);
//         };
//     return arrayNew.concat(arrayNewZero);
// };
// const arrrayNew1 = changeElementPosition([1,0,6,0,3]);
// console.log(arrrayNew1);
// const arrrayNew2 = changeElementPosition([0,1,2,3,4]);
// console.log(arrrayNew2);
// const arrrayNew3 = changeElementPosition([0,0,1,0]);
// console.log(arrrayNew3);
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// const addDiv = (text = 'Hello owu') => {
//     const newDiv = document.createElement('div');
//     newDiv.innerText = text;
//     document.body.appendChild(newDiv);
// };
// addDiv();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// const addNewElement = (tagName, text) => {
//         const newElement = document.createElement(tagName);
//         newElement.innerText = text;
//         document.body.appendChild(newElement);
//     };
// addNewElement('div', 'Hello owu');
// addNewElement('span', 'Hello owu');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
const cars= [
        {brand:'KIA', color:'black', type: 'sedan', price: 18000, isPresent: true},
        {brand:'BMV', color:'red', type: 'sport coupe', price: 28500, isPresent: false},
        {brand:'Ford', color:'silver', type: 'hatchback', price: 18900, isPresent: false},
        {brand:'Nissan', color:'green', type: 'compact', price: 15000, isPresent: true},
        {brand:'Jeep', color:'black', type: 'crossover', price: 28000, isPresent: true}
    ];

// const carsId = (array, idTag) => {
//     const element = document.getElementById(idTag);
//     const list = document.createElement('ul');
//     for (let i =0; i< array.length; i++){
//         const cars = array[i];
//         const item = document.createElement('li');
//         item.innerText = `${i}, ${cars.brand}, ${cars.type}, ${cars.price}`;
//         list.appendChild(item);
//         };
//     element.appendChild(list)
// };
// carsId(cars, 'id-car');

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. 
// Всі властивості авто в обному блоці
// const carsBlockCreate = (array, tagName) => {
//         for (let i =0; i< array.length; i++){
//             const block = document.createElement(tagName);
//             const cars = array[i];
//             block.innerText = `${cars.brand}, ${cars.type}, ${cars.price}`;
//             document.body.appendChild(block);
//         };
// };
// carsBlockCreate(cars, 'div');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// const carsBlockCreate = (array, tagNameBrand, tagNameType, tagNamePrice) => {
//     for (let i =0; i< array.length; i++){
//         const cars = array[i];
//         const block = document.createElement('div');
//         const blockBrand = document.createElement(tagNameBrand);
//         const blockType = document.createElement(tagNameType);
//         const blockPrice = document.createElement(tagNamePrice);
//         blockBrand.innerText = `${cars.brand}`;
//         blockType.innerText = `${cars.type}`;
//         blockPrice.innerText = `${cars.price}`;
//         block.appendChild(blockBrand);
//         block.appendChild(blockType);
//         block.appendChild(blockPrice);
//         document.body.appendChild(block);
//     };  
// };
// carsBlockCreate(cars, 'div','p','span');

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з 
// відповідними "id" та "user_id", та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
            // let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
            // let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];

//     function concatArray(arrayUsers, arrayCities) {
//     let users = JSON.parse(JSON.stringify(arrayUsers));
//     let cities = JSON.parse(JSON.stringify(arrayCities));
//     for (const city of cities){
//         for (const user of users){      
//             if (city.user_id==user.id){
//                 user.address = city;
//             };
//         };
//     };
//     return users;
// };
// const concatArray1 = concatArray(usersWithId, citiesWithId);
// console.log(concatArray1);

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},

//             ];
// function rulesInBlocks (array) {
//     for (let i =0; i<array.length; i++){
//     const rules = array[i];
//     const block = document.createElement('div');
//         const titleRules = document.createElement('h2');
//         titleRules.innerText = `${rules.title}`;
//         const bodyRules = document.createElement('p');
//         bodyRules.innerText = `${rules.body}`;
//         block.appendChild(titleRules);
//         block.appendChild(bodyRules);
//     document.body.appendChild(block);
//     };
// };
// rulesInBlocks(rules);

// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!
// const stepTwo = (number) => {
//     (number%2==0 && number > 0)? console.log('YES') : console.log('NO');
// };
// stepTwo(0);
// stepTwo(128);

