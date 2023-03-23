import { students, sdata} from './data_39.js';//import輸入

//for sdata

console.log('sdata original', sdata);

sdata.sort( function(a,b){return b-a});//sort:排序;a-b:小到大;b-a:大到小

console.log(`The hightest score: ${sdata[0]}`);
console.log(`The lowest score: ${sdata[sdata.length-1]}`);

//for students

const students2 = students.map((student) => { //const宣告 //map創建一個新數組
   // student.role = 'student';
    return {...student, role: 'student'};//...指原來全部欄位，繼續增新的
});

console.log('students2 original', students2);

students2.sort(function(a,b){return a.score - b.score});
console.log('students2 sorted', students2);

console.log(`The lowest score: ${students2[0].score}`);
console.log(`The hightest score: ${students2[students2.length-1].score}`);


console.log('students', students);
const averageStudents = students.reduce((total, student, index) => {
    console.log('index total', index, total);
    return total + student.score;
},0)/ students.length;//reduce統計
console.log('average', averageStudents);

console.log('sdata sorted', sdata);
const averageSdata = sdata.reduce((total, sdata, index) => {
    console.log('index total', index, total);
    return total + sdata;
},0)/ sdata.length;
console.log('averageSdata', averageSdata);
