//let scor = 3;
//let scor = "33";
/*{variable scor string ko number ma convert krny k liy}
jb form sy data ata ha to hmy ni pta hota k 
number arha h k string arha ha tb hum 
es ka estaml krty hai
 */
//let covertIntoNumuber = Number(scor) ;
//console.log(typeof(covertIntoNumuber));

let scorewithNan = "zubair";
//console.log(typeof scorewithNan);
let variablenaNconvertIntoNmbr = Number(scorewithNan);
console.log(typeof variablenaNconvertIntoNmbr);

/*variablenaNconvertIntoNmbr string ko to number ma convert kr dy ga
lkn jb console log kry gy to hm output es NaN(not a number) ma kry gay*/
console.log(variablenaNconvertIntoNmbr);

// (output jb hm console log ma dykhy gay) string ko nmbr ma convert krny k bad
// "33" => 33
// "33abc" => NaN
// true => 1 & false => 0 

let isLoggedIn = 1;
let booleanLoggedIn = Boolean(isLoggedIn);
console.log(booleanLoggedIn);

// (boolean ma jb nmbr or empty ko convert kry gay to output)
// 1 => true
// 0 => false
// ""(empty string) => false
// "zubair"(string) => true