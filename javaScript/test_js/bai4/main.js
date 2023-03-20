const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];

let button = document.getElementById('btn');
let checkBox1 = document.getElementsByName('1');
let checkBox2 = document.getElementsByName('2');
let checkBox3 = document.getElementsByName('3');

button.addEventListener('click',function(){

    checkBox1[Math.floor(Math.random()*checkBox1.length)].checked = true;
    checkBox2[Math.floor(Math.random()*checkBox2.length)].checked = true;
    checkBox3[Math.floor(Math.random()*checkBox3.length)].checked = true;

});