//створити масив та вивести його в консоль:
//- з 5 числових значень
    // let arr_numbers=[1,2,3,4,5];
    // for (let i = 0; i < arr_numbers.length; i++) {
    //     console.log(arr_numbers[i]);
    //     }
//- з 5 стічкових значень
    // let arr_string=['one', 'two','tree','four','five'];
    // for (let i = 0; i < arr_string.length; i++) {
    //     console.log(arr_string[i]);
    //     }
//- з 5 значень стрічкового, числового та булевого типу
    // let arr=[1, 'two',3,'four',true];
    // for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i]);
    //     }

    //-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
    // let arr_null=[];
    // arr_null[0]= 'name';
    // arr_null[1]= 10;
    // arr_null[2]= false;
    // for (let i = 0; i < arr_null.length; i++) {
    //         console.log(arr_null[i]);
    //     }

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
    // for (let i = 0; i < 10; i++) {
    //     document.write('<div>JavaScript</div>'); 
    // }

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
    // for (let i = 0; i < 10; i++) {
    //     document.write(`<div>JavaScript ${i}</div>`); 
    // }

    //- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
    // let i = 0;
    // while (i<20) {
    //     document.write('<h1>JavaScript</h1>');
    //     i++;
    // }

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
    // let i = 0;
    // while (i<20) {
    //     document.write(`<h1>JavaScript ${i}</h1>`);
    //     i++;
    // }

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
    // let arrNumbers = [1, 1.5, 2, 3, 4, 5.67, 6, 6.6, 10, -0.1];
    // for (let i = 0; i < arrNumbers.length; i++) {
    //     console.log(arrNumbers[i]); 
    // }

//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
    // let arrString = ['Jan','Feb','Mar','Apr','May','June', 'Jul','Aug','Sept','Oct'];
    // for (let i = 0; i < arrString.length; i++) {
    //     console.log(arrString[i]); 
    // }

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
    // let arrDif = [true, 1, 'one', false, 2, 'Apr','tree',-2, 'monday','Aug'];
    // for (let i = 0; i < arrDif.length; i++) {
    //     console.log(arrDif[i]); 
    // }

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
    // let arrDif = [true, 1, 'one', false, 2, 'Apr','tree',-2, 'monday','Aug'];
    // for (let i = 0; i < arrDif.length; i++) {
    //     if (typeof(arrDif[i])=="boolean") {
    //        console.log(arrDif[i]);
    //     }
    // }

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
    // let arrDif = [true, 1, 'one', false, 2, 'Apr','tree',-2, 'monday','Aug'];
    //     for (let i = 0; i < arrDif.length; i++) {
    //         if (typeof(arrDif[i])=="number") {
    //            console.log(arrDif[i]);
    //         }
    //     }

//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
    // let arrDif = [true, 1, 'one', false, 2, 'Apr','tree',-2, 'monday','Aug'];
    //     for (let i = 0; i < arrDif.length; i++) {
    //         if (typeof(arrDif[i])=="string") {
    //            console.log(arrDif[i]);
    //         }
    //     }

//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
    // let arrEmpty =[];
    // arrEmpty[0] = 100;
    // arrEmpty[1] = false;
    // arrEmpty[2] = 'autumn';
    // arrEmpty[3] = -1;
    // arrEmpty[4] = 0.0001;
    // arrEmpty[5] = true;
    // arrEmpty[6] = true;
    // arrEmpty[7] = 'winter';
    // arrEmpty[8] = false;
    // arrEmpty[9] = 2;
    // let i=0;
    // while(i<10){
    //     console.log(arrEmpty[i]);
    //     i++;
    // }

//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
    // for (let i = 0; i < 10; i++) {
    //     console.log(i);
    //     document.write(i);
        
    // }

//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
    // for (let i = 0; i < 100; i++) {
    //     console.log(i);
    //     document.write(i);
        
    // }

//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
    // for (let i = 0; i < 100; i+=2) {
    //     console.log(i);
    //     document.write(i);
        
    // }

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
    // for (let i = 0; i < 100; i++) {
    //     if (i%2==0){
    //     console.log(i);
    //     document.write(i);
    //     } 
    // }

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
    // for (let i = 0; i < 100; i++) {
    //         if (i%2!=1){
    //         console.log(i);
    //         document.write(i);
    //         } 
    //     }

//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
    //  for (let i = 0; i < 100; i++) {
    //         if (i%2!=0){
    //         console.log(i);
    //         document.write(i);
    //         } 
    //     }

//Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
    // for (let i = 0; i < 2; i++) {
    //     for (let k = 0; k < 60; k++) {
    //         console.log(i+':'+k);
    //     }
    // }

//Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// for (let i = 0; i <= 2; i++) {
//     for (let k = 0; k < 60; k++) {
//         for (let j = 0; j < 60; j++) {
//             let timeSec=i*3600+k*60+j; //Переводи 2 год 20 хв в секунди
//             if (timeSec<=8400){
//             console.log(i+':'+k+':'+j);
//             }
//         }
//     }
// }

//Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
    // let array = ['a', 'b', 'c'];
    // for (let i = 0; i < 3; i++) {
    //     array.push(i+1);
    // }
    // for (let i = 0; i < array.length; i++) {
    //     console.log(array[i])
    // }

// Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
    // let array = [1, 2, 3];
    // for (let i = 3; i > 0; i--) {
    //     array[i] = i;
    //     console.log(array[i]);
        
    // }

//Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
    // let array = [1, 2, 3];
    // for (let i = 1; i <= 3; i++) {
    //     array.push(i+3);       
    // }
    // for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    // }

// Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
    // let array = [1, 2, 3];
    // for (let i = 1; i <= 3; i++) {
    //     array.unshift(i+3);       
    // }
    // for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    // }

//Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово
    // let array = [ 'a', 'b', 'c'];
    // let word='';
    // for (let i = 0; i < array.length; i++) {
    //     word+=array[i];
    //     }
    // console.log(word);

// Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово
    // let array = [ 'a', 'b', 'c'];
    // let word='';
    // let i=0;
    // while (i<3) {
    //     word+=array[i];
    //     i++;
    //     }
    // console.log(word);

//Дано масив: [ 'a', 'b', 'c']. За допомогою циклу for of зібрати всі букви в слово.
    // let array = [ 'a', 'b', 'c'];
    // let word='';
    // for (let i of array){
    //     word+=i;
    //     }
    // console.log(word);

//- Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
    // let array = ['js', 'css', 'jq'];
    // console.log(array.shift());

// Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
    // let array = ['js', 'css', 'jq'];
    // console.log(array.pop());

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5]
    // let array = [1, 2, 3, 4, 5];
    // let arrayNew = array.slice(3,5);
    // console.log(arrayNew);

// Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2]
    // let array = [1, 2, 3, 4, 5];
    // let arrayNew = array.slice(0,2)
    // console.log(arrayNew);
