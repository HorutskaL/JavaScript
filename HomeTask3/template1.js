// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.

// -- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName 
// або document.getElementsByTagName :
// - отримує текст з параграфа з id "content"
// const textFromContent = document.getElementById('content');
// console.log(textFromContent);

// отримує текст з блоку з id "rules"
// const textFromRules = document.getElementById('rules');
// console.log(textFromRules);

// замініть текст параграфа з id 'content' на будь-який інший
// const textFromContent = document.getElementById('content');
// textFromContent.innerText='New text';
// console.log(textFromContent);

// - замініть текст параграфа з id 'rules' на будь-який інший
// const newTextRules = document.getElementById('rules');
// newTextRules.innerText='Another new text';
// console.log(newTextRules);

// - змініть кожному елементу колір фону на червоний
// let elementID = [
//     document.getElementById('content'),
//     document.getElementById('rules'),
//     ];
// for (const value of elementID) {
//     value.style.backgroundColor='red';
//     value.style.color='blue';
// };
// const fcRules = document.getElementsByClassName('fc_rules')
// for (const fcElement of fcRules){
//     fcElement.style.backgroundColor='red';
//     fcElement.style.color='blue'   //змініть кожному елементу колір тексту на синій
// };

// - отримати весь список класів елемента з id=rules і вивести їх в console.log
// const fcRules = document.getElementsByClassName('fc_rules')
// console.log(fcRules);

// поміняти колір тексту у всіх елементів fc_rules на червоний
// const fcRules = document.getElementsByClassName('fc_rules')
// for (const fcElement of fcRules){
//     fcElement.style.color='red';
// };

// створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , 
// class та тегу
// змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag

// const elementId = document.getElementById('content');
// const innerTextElId = elementId.innerText;
// console.log(innerTextElId);
// elementId.style.height='100px';
// elementId.style.width='300px';

// const elementClassName = document.getElementsByClassName('fc_rules');
// for (const inner of elementClassName){
//     inner.innerText = 'Class text';
//     console.log(inner);
//     inner.style.height = '30px';
//     inner.style.widht = '100px';
// };

// const elementTagName = document.getElementsByTagName('li');
// for (const innerLi of elementTagName){
//     innerLi.innerText = 'Tag text';
//     console.log(innerLi);
//     innerLi.style.height = '50px';
//     innerLi.style.widht = '150px';
// };

// за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// const table = document.createElement('table');
// const row = document.createElement('tr');
// const td1 = document.createElement('td');
// const td2 = document.createElement('td');
// const td3 = document.createElement('td');

// row.appendChild(td1);
// row.appendChild(td2);
// row.appendChild(td3);
// table.appendChild(row);
// document.body.appendChild(table);

// за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// const table = document.createElement('table');
// for (let i = 0; i<10; i++){
// const row = document.createElement('tr');
// for (let j=0; j<3; j++){
//     const td = document.createElement('td');
//     row.appendChild(td);
// }
// table.appendChild(row);
// }
// document.body.appendChild(table);

// за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// const table = document.createElement('table');
// for (let i = 0; i<10; i++){
// const row = document.createElement('tr');
// for (let j=0; j<5; j++){
//     const td = document.createElement('td');
//     row.appendChild(td);
// }
// table.appendChild(row);
// }
// document.body.appendChild(table);

// за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt
// const table = document.createElement('table');
// const m = prompt('input count of rows')
// const n = prompt('input count of column')
// for (let i = 0; i<m; i++){
// const row = document.createElement('tr');
// for (let j=0; j<n; j++){
//     const td = document.createElement('td');
//     row.appendChild(td);
// }
// table.appendChild(row);
// }
// document.body.appendChild(table);

// Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний

// const elementByTagName = document.getElementsByTagName('*');
// for (const tag of elementByTagName){
//     if (tag.getAttribute('class')){
//         console.log(tag);
//     }
// }

// const elementP = document.getElementsByTagName('p');
// for (const name of elementP){
//     name.innerText = 'Hello oktenweb';
//     };

// const elementDiv = document.getElementsByTagName('div');
// for (const tag of elementDiv){
//     tag.style.background = 'red';
//     };
