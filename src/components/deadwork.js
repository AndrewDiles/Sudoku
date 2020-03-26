// // import React from 'react';

//   //  Abstract Functions

//   const isUnknown = (element) => element === 'unknown';
//   const isTrue = (element) => element === true;
//   function duplicate (array) {
//     let newArray  = [];
//     array.forEach((arr1)=>{
//       let innerArray = [];
//       arr1.forEach((value)=>{
//         innerArray.push(value);
//       })
//       newArray.push(innerArray);
//     })
//     return newArray;
//   };
//   function testArrayEquivalences (arr1, arr2) {
//     let result = true;
//     arr1.forEach((arr1Arr, index1)=>{
//       arr1Arr.forEach((arr1ArrVal, index2)=>{
//         // console.log(arr2[index1][index2], arr1ArrVal, arr2[index1][index2] != arr1ArrVal);
//         if (arr2[index1][index2] != arr1ArrVal) {result = false;}
//       })
//     })
//     return result;
//   };

//   //  Initiation of Puzzle

//   function generateIntialCellsArray () {
//     let temp = [];
//     for (let r=1; r<10; r++) {
//       for (let c=1; c<10; c++) {
//         let block = 0;
//         if (r<=3 && c<=3)                     {block = 1;}
//         else if (r<=3 && c>3 && c<=6)         {block = 2;}
//         else if (r<=3 && c>6)                 {block = 3;}
//         else if (r>3 && r<=6 && c<=3)         {block = 4;}
//         else if (r>3 && r<=6 && c>3 && c<=6)  {block = 5;}
//         else if (r>3 && r<=6 && c>6)          {block = 6;}
//         else if (r>6 && c<=3)                 {block = 7;}
//         else if (r>6 && c>3 && c<=6)          {block = 8;}
//         else if (r>6 && c>6)                  {block = 9;}
//         temp.push([`r${r}c${c}`, 'unknown', 'unknown', 'unknown','unknown', 'unknown', 'unknown','unknown', 'unknown', 'unknown', null, block]);
//       }
//     }
//     return temp;
//   };

//   function setArrayForGivens (setfunctionOngoing, cells, setCells) {
//     setfunctionOngoing(true);
//     cells.forEach((cell)=> {
//       if (cell[10] != null) {
//         for (let i=1; i<10; i++) {
//           i === cell[10] ? cell[i] = true : cell[i] = false;
//         }
//       }
//     })
//     setCells([
//       ...cells,
//     ]
//     )
//     setfunctionOngoing(false);
//   }

//   function confirmInputs (setfunctionOngoing, setCells, cells, setInputted, setNoContradiction) {
//     setfunctionOngoing(true);
//     // console.log('cells pre function', cells);
//     for (let r=1; r<10; r++) {
//       for (let c=1; c<10; c++) {
//         let temp = document.getElementById(`r${r}c${c}`).value;
//         if (temp.length === 1 && temp>0 && temp <10) {
//           let arrayindex = c + 9*(r-1) -1;
//           cells[arrayindex][10] = temp;
//         }
//         setCells([
//           ...cells,
//           // cells[arrayindex][10] = temp
//           // `r${i}c${j}[10]`: {temp}
//         ]
//         )
//         // console.log(`updated r${r}c${c} `);
//       }
//     }
//     setInputted(true);
//     // console.log('81', cells[81]);
//     // console.log('cells post function', cells);
//     // console.log(document.getElementById('r2c2').value);
//     setfunctionOngoing(false);
//     setArrayForGivens(setfunctionOngoing, cells, setCells);
//     refreshNulls(setfunctionOngoing, cells, setCells);
//     testContradiction(setfunctionOngoing, cells, setNoContradiction);
//   };

//   function testEasy (setCells, cells, setInputted, setfunctionOngoing, setNoContradiction) {
//     cells[0][10] = 5;
//     cells[3][10] = 1;
//     cells[6][10] = 7;
//     cells[10][10] = 2;
//     cells[14][10] = 7;
//     cells[15][10] = 1;
//     cells[18][10] = 3;
//     cells[20][10] = 1;
//     cells[21][10] = 4;
//     cells[24][10] = 8;
//     cells[25][10] = 5;
//     cells[26][10] = 2
//     cells[27][10] = 6;
//     cells[28][10] = 1;
//     cells[30][10] = 5;
//     cells[31][10] = 7;
//     cells[32][10] = 2;
//     cells[33][10] = 4;
//     cells[35][10] = 8;
//     cells[38][10] = 2;
//     cells[39][10] = 9;
//     cells[40][10] = 6;
//     cells[46][10] = 4;
//     cells[49][10] = 3;
//     cells[51][10] = 6;
//     cells[52][10] = 2;
//     cells[53][10] = 7;
//     cells[54][10] = 4;
//     cells[55][10] = 5;
//     cells[56][10] = 9;
//     cells[58][10] = 8;
//     cells[61][10] = 7;
//     cells[63][10] = 1;
//     cells[64][10] = 3;
//     cells[69][10] = 9;
//     cells[70][10] = 8;
//     cells[71][10] = 6;
//     cells[72][10] = 2;
//     cells[76][10] = 1;
//     cells[79][10] = 4;
//     cells[80][10] = 3;
//     setCells([
//       ...cells,
//     ]
//     )
//     setInputted(true);
//     setArrayForGivens(setfunctionOngoing, cells, setCells);
//     refreshNulls(setfunctionOngoing, cells, setCells);
//     testContradiction(setfunctionOngoing, cells, setNoContradiction);
//   };

//   function testMedium (setCells, cells, setInputted, setfunctionOngoing, setNoContradiction) {
//     cells[1][10] = 4;
//     cells[2][10] = 1;
//     cells[5][10] = 8;
//     cells[9][10] = 3;
//     cells[11][10] = 6;
//     cells[12][10] = 2;
//     cells[13][10] = 4;
//     cells[14][10] = 9;
//     cells[16][10] = 8;
//     cells[25][10] = 7;
//     cells[30][10] = 4;
//     cells[31][10] = 7;
//     cells[33][10] = 2;
//     cells[34][10] = 1;
//     cells[36][10] = 7;
//     cells[39][10] = 3;
//     cells[42][10] = 4;
//     cells[44][10] = 6;
//     cells[46][10] = 2;
//     cells[52][10] = 5;
//     cells[53][10] = 3;
//     cells[56][10] = 7;
//     cells[58][10] = 9;
//     cells[60][10] = 5;
//     cells[65][10] = 3;
//     cells[67][10] = 2;
//     cells[73][10] = 5;
//     cells[74][10] = 4;
//     cells[76][10] = 6;
//     cells[77][10] = 3;
//     setCells([
//       ...cells,
//     ]
//     )
//     setInputted(true);
//     setArrayForGivens(setfunctionOngoing, cells, setCells);
//     refreshNulls(setfunctionOngoing, cells, setCells);
//     testContradiction(setfunctionOngoing, cells, setNoContradiction);
//   };

//   function testHard (setCells, cells, setInputted, setfunctionOngoing, setNoContradiction) {
//     cells[1][10] = 6;
//     cells[4][10] = 1;
//     cells[6][10] = 4;
//     cells[11][10] = 3;
//     cells[14][10] = 2;
//     cells[18][10] = 5;
//     cells[19][10] = 8;
//     cells[20][10] = 1;
//     cells[21][10] = 6;
//     cells[27][10] = 9;
//     cells[29][10] = 2;
//     cells[38][10] = 6;
//     cells[39][10] = 9;
//     cells[41][10] = 7;
//     cells[42][10] = 8;
//     cells[51][10] = 6;
//     cells[53][10] = 1;
//     cells[59][10] = 6;
//     cells[60][10] = 7;
//     cells[61][10] = 5;
//     cells[62][10] = 4;
//     cells[66][10] = 2;
//     cells[69][10] = 1;
//     cells[74][10] = 4;
//     cells[76][10] = 9;
//     cells[79][10] = 3;
//     setCells([
//       ...cells,
//     ]
//     )
//     setInputted(true);
//     setArrayForGivens(setfunctionOngoing, cells, setCells);
//     refreshNulls(setfunctionOngoing, cells, setCells);
//     testContradiction(setfunctionOngoing, cells, setNoContradiction);
//   };

//   function testVeryHard (setCells, cells, setInputted, setfunctionOngoing, setNoContradiction) {
//     cells[0][10] = 7;
//     cells[2][10] = 2;
//     cells[4][10] = 4;
//     cells[5][10] = 3;
//     cells[10][10] = 6;
//     cells[15][10] = 3;
//     cells[18][10] = 3;
//     cells[21][10] = 1;
//     cells[29][10] = 1;
//     cells[30][10] = 8;
//     cells[31][10] = 3;
//     cells[33][10] = 9;
//     cells[35][10] = 7;
//     cells[36][10] = 4;
//     cells[39][10] = 7;
//     cells[41][10] = 6;
//     cells[44][10] = 2;
//     cells[45][10] = 5;
//     cells[47][10] = 7;
//     cells[49][10] = 1;
//     cells[50][10] = 9;
//     cells[51][10] = 6;
//     cells[59][10] = 2;
//     cells[62][10] = 9;
//     cells[65][10] = 4;
//     cells[70][10] = 1;
//     cells[75][10] = 3;
//     cells[76][10] = 9;
//     cells[78][10] = 4;
//     cells[80][10] = 5;
//     setCells([
//       ...cells,
//     ]
//     )
//     setInputted(true);
//     setArrayForGivens(setfunctionOngoing, cells, setCells);
//     refreshNulls(setfunctionOngoing, cells, setCells);
//     testContradiction(setfunctionOngoing, cells, setNoContradiction);
//   };

//   function testChallenge (setCells, cells, setInputted, setfunctionOngoing, setNoContradiction) {
//     cells[2][10] = 2;
//     cells[8][10] = 6;
//     cells[10][10] = 4;
//     cells[11][10] = 5;
//     cells[14][10] = 9;
//     cells[19][10] = 1;
//     cells[21][10] = 2;
//     cells[22][10] = 8;
//     cells[26][10] = 3;
//     cells[27][10] = 6;
//     cells[34][10] = 7;
//     cells[39][10] = 5;
//     cells[40][10] = 6;
//     cells[41][10] = 7;
//     cells[46][10] = 5;
//     cells[53][10] = 8;
//     cells[54][10] = 7;
//     cells[58][10] = 5;
//     cells[59][10] = 2;
//     cells[61][10] = 4;
//     cells[66][10] = 3;
//     cells[69][10] = 8;
//     cells[70][10] = 2;
//     cells[72][10] = 4;
//     cells[78][10] = 5;
//     setCells([
//       ...cells,
//     ]
//     )
//     setInputted(true);
//     setArrayForGivens(setfunctionOngoing, cells, setCells);
//     refreshNulls(setfunctionOngoing, cells, setCells);
//     testContradiction(setfunctionOngoing, cells, setNoContradiction);
//   };

//   function resetEverything (setHasChanged, setfunctionOngoing, setCells, setInputted, setLastTested, setNoContradiction) {
//     setHasChanged(true);
//     setfunctionOngoing(true);
//     setCells(generateIntialCellsArray());
//     setInputted(false);
//     setLastTested(false);
//     setNoContradiction(true);
//     setfunctionOngoing(false);
//   };

//   //  Base Solving Functions

//   function refreshNulls (setfunctionOngoing, cells, setCells) {
//     setfunctionOngoing(true);
//     cells.forEach((cellOut) => {
//       // console.log('does it have a number?: ',cellOut[10]);
//       // console.log(cellOut[10] != null);
//       if (cellOut[10] != null) {
//         let row = cellOut[0][1];
//         let col = cellOut[0][3];
//         let block = cellOut[11];
//         let val = cellOut[10];
//         cells.forEach((cellIn) => {
//           if (cellIn[10] === null && (cellIn[0][1] === row || cellIn[0][3] === col || cellIn[11] === block)) {
//             cellIn[val] = false;
//           }
//         })
//       }
//     })
//     setCells([
//       ...cells,
//     ]
//     )
//     // console.log(cells);
//     setfunctionOngoing(false);
//   };

//   function addKnowns (setfunctionOngoing, cells, setCells, setLastTested, setNoContradiction, setSolved) {
//     setfunctionOngoing(true);
//     cells.forEach((cell)=> {
//       if (cell[10] === null) {
//         if (cell.findIndex(isTrue) > 0) {
//           cell[10] = cell.findIndex(isTrue);
//           for (let i=1; i<10; i++) {
//             i === cell[10] ? cell[i] = true : cell[i] = false;
//           }
//         }
//       }
//     })
//     setCells([
//       ...cells,
//     ]
//     )
//     setfunctionOngoing(false);
//     setLastTested(false);
//     refreshNulls(setfunctionOngoing, cells, setCells);
//     testContradiction(setfunctionOngoing, cells, setNoContradiction);
//     setSolved(testIsSolved(setfunctionOngoing, cells, setNoContradiction));
//   }

//   function testContradiction (setfunctionOngoing, cells, setNoContradiction) {
//     setfunctionOngoing(true);
//     let countradictionFound = false
//     cells.forEach((cellOut)=> { 
//       if (cellOut[10] != null) {
//         cells.forEach((cellIn)=>{
//           if (cellIn[0] != cellOut[0] && cellIn[10] === cellOut[10] && (cellIn[0][1] === cellOut[0][1] || cellIn[0][3] === cellOut[0][3] || cellIn[11] === cellOut[11])){
//             setNoContradiction(false);
//             countradictionFound = true;
//             console.log(`Contradiction between: ${cellOut[0]} and ${cellIn[0]}`)
//           }
//         })
//       }
//     })
//     if (!countradictionFound) {
//       setNoContradiction(true);
//       setfunctionOngoing(false);
//       return true;
//     }
//     else {
//       setfunctionOngoing(false);
//       return false;
//     }
//   }

//   function testIsSolved (setfunctionOngoing, cells, setNoContradiction) {    
//     let count = 0;
//     let solved = false;
//     cells.forEach((cell)=> {
//       if (cell[10] != null) count ++
//     })
//     count === 81 ? solved = true : solved = false;
//     if (!testContradiction(setfunctionOngoing, cells, setNoContradiction)) {
//       solved = false;
//       console.log('There is a contradiction.');
//     }
//     if (solved) console.log('A solution has been found!');
//     return solved;
//   }

//   //  Level 1 Tests

//   function testForKnowns (setLastTested, setfunctionOngoing, setHasChanged, cells, setCells) {
//     setLastTested(true);
//     setfunctionOngoing(true);
//     setHasChanged(false);
//     let originalArray = duplicate(cells);
//     // console.log(cells);
//     cells.forEach((cell) => {
//       // console.log(cell[10], 'is not a null?: ', cell[10] != null)
//       // console.log(cell);
//       if (cell[10] === null) {
//         let unknownCounter = 0;
//         for (let i=1; i<10; i++) {
//           // console.log('cell[i] is: ', cell[i], ' is this unknown?', cell[i] === "unknown")
//           if (cell[i] === "unknown") {
//             unknownCounter++;
//           }
//         }
//         // console.log(unknownCounter);
//         if (unknownCounter < 2) {
//           cell[cell.findIndex(isUnknown)] = true;
//         }
//       }
//     })
//     setCells([
//       ...cells,
//     ]
//     )
//     testArrayEquivalences(cells, originalArray) ? setHasChanged(false) : setHasChanged(true);
//     setfunctionOngoing(false);
//     refreshNulls(setfunctionOngoing, cells, setCells);
//   };

//   function testRows (setLastTested, setfunctionOngoing, setHasChanged, cells, setCells) {
//     setLastTested(true);
//     setfunctionOngoing(true);
//     setHasChanged(false);
//     let originalArray = duplicate(cells);
//     for (let r=1; r<10; r++){
//       for (let num=1; num<10; num++){
//         let count = 0;
//         let holder = null;
//         // for (let i=1; i<10; i++){
//           cells.forEach((cell, index) => {
//             // console.log(cell[0][1]);
//             if (cell[0][1]==r && cell[10] == num) {
//               count -= -20;
//               return;
//             }
//             else if (cell[0][1]==r && (cell[num] === false || cell[10] != null)) {
//               count ++;
//             }
//             else if (cell[0][1]==r && cell[num] === 'unknown') {
//               holder = index;
//             }
//           })
//         // }
//         // console.log(`count for row ${r}, #${num} is: ${count}`);
//         if (count === 8) {
//           cells[holder][num] = true;
//         }
//       }
//     }
//     setCells([
//       ...cells,
//     ]
//     )
//     // console.log('cells: ', cells, 'original: ', originalArray, cells === originalArray);
//     testArrayEquivalences(cells, originalArray) ? setHasChanged(false) : setHasChanged(true);
//     setfunctionOngoing(false);
//     refreshNulls(setfunctionOngoing, cells, setCells);
//   };

//   function testCols (setLastTested, setfunctionOngoing, setHasChanged, cells, setCells) {
//     setLastTested(true);
//     setfunctionOngoing(true);
//     setHasChanged(false);
//     let originalArray = duplicate(cells);
//     for (let c=1; c<10; c++){
//       for (let num=1; num<10; num++){
//         let count = 0;
//         let holder = null;
//           cells.forEach((cell, index) => {
//             if (cell[0][3]==c && cell[10] == num) {
//               count -= -20;
//               return;
//             }
//             else if (cell[0][3]==c && (cell[num] === false || cell[10] != null)) {
//               count ++;
//             }
//             else if (cell[0][3]==c && cell[num] === 'unknown') {
//               holder = index;
//             }
//           })
//         // }
//         if (count === 8) {
//           cells[holder][num] = true;
//         }
//       }
//     }
//     setCells([
//       ...cells,
//     ]
//     )
//     testArrayEquivalences(cells, originalArray) ? setHasChanged(false) : setHasChanged(true);
//     setfunctionOngoing(false);
//     refreshNulls(setfunctionOngoing, cells, setCells);
//   };

//   function testBlocks (setLastTested, setfunctionOngoing, setHasChanged, cells, setCells) {
//     setLastTested(true);
//     setfunctionOngoing(true);
//     setHasChanged(false);
//     let originalArray = duplicate(cells);
//     for (let b=1; b<10; b++){
//       for (let num=1; num<10; num++){
//         let count = 0;
//         let holder = null;
//           cells.forEach((cell, index) => {
//             if (cell[11]==b && cell[10] == num) {
//               count -= -20;
//               return;
//             }
//             else if (cell[11]==b && (cell[num] === false || cell[10] != null)) {
//               count ++;
//             }
//             else if (cell[11]==b && cell[num] === 'unknown') {
//               holder = index;
//             }
//           })
//         // }
//         if (count === 8) {
//           cells[holder][num] = true;
//         }
//       }
//     }
//     setCells([
//       ...cells,
//     ]
//     )
//     testArrayEquivalences(cells, originalArray) ? setHasChanged(false) : setHasChanged(true);
//     setfunctionOngoing(false);
//     refreshNulls(setfunctionOngoing, cells, setCells);
//   };

//   // Level 2 Tests

//   function testLinkedPairs (setLastTested, setfunctionOngoing, setHasChanged, cells, setCells) {
//     setLastTested(true);
//     setfunctionOngoing(true);
//     setHasChanged(false);
//     let originalArray = duplicate(cells);
//     let matchArray = [];
//       cells.forEach((cell1) => {
//         if (cell1[10] != null) {return;}
//         else {
//           let count1 = 0;
//           let row1 = 0;
//           let col1 = 0;
//           let block1 = 0;
//           let num1 = 0;
//           let num2 = 0;
//           let exact1 = '';
//           for (let i = 1; i<10; i++) {
//             if (cell1[i] === 'unknown' && count1 === 0) {
//               count1 ++;
//               num1 = i;
//             }
//             else if (cell1[i] === 'unknown' && count1 === 1) {
//               count1 ++;
//               num2 = i;
//             }
//             else if (cell1[i] === 'unknown' && count1 >= 2) {
//               i += 10;
//             }
//             if (i === 9 && count1 === 2){
//               row1 = cell1[0][1];
//               col1 = cell1[0][3];
//               block1 = cell1[11];
//               exact1 = cell1[0];
//               let count2 = 0;
//               let row2 = 0;
//               let col2 = 0;
//               let block2 = 0;
//               let matches = 0;
//               let exact2 = '';
//               cells.forEach((cell2) => {
//                 if (cell2[10] != null || cell2[0] === exact1) {return;}
//                 if (!(cell2[0][1] === row1 || cell2[0][3] === col1 || cell2[11] === block1)) {return;}
//                 else {
//                   for (let j = 1; j<10; j++) {
//                     if (j === num1 || j == num2) {
//                       if (cell2[j] === 'unknown') {count2++}
//                       else {j += 10; count2 += 10; return;}
//                     }
//                     else if (cell2[j] === 'unknown') {j += 10; count2 += 10; return;}
//                     if (count2 === 2 && j === 9) {
//                       row2 = cell2[0][1];
//                       col2 = cell2[0][3];
//                       block2 = cell2[11];
//                       exact2 = cell2[0];
//                       matches +=1;
//                     }
//                   }
//                 }
//               })
//               let alreadyDone = false;
//               matchArray.forEach((pastMatch)=>{
//                 // console.log(pastMatch[0], pastMatch[1], exact1, exact2);
//                 if ((pastMatch[0] === exact1 || pastMatch[0] === exact2) && (pastMatch[1] === exact1 || pastMatch[1] === exact2)) {
//                   alreadyDone = true;
//                 }
//               })
//               if (matches === 1 && alreadyDone === false) {
//                 console.log(`Match between: ${exact1} and ${exact2}`);
//                 let matchElement = [exact1, exact2];
//                 matchArray.push(matchElement);
//                 if (row1 === row2) { 
//                   // make evert cell in this row's num1 and num2 = false
//                   cells.forEach((cell)=> {
//                     if (cell[10] != null || cell[0] === exact1 || cell[0] === exact2) {return;}
//                     else if (cell[0][1] === row1) {
//                       for (let n = 1; n<10; n++){
//                         if (n === num1 || n === num2) {cell[n] = false;}
//                       }
//                     }
//                   })
//                 }
//                 if (col1 === col2) {
//                   // make evert cell in this col's num1 and num2 = false
//                   cells.forEach((cell)=> {
//                     if (cell[10] != null || cell[0] === exact1 || cell[0] === exact2) {return;}
//                     else if (cell[0][3] === col1) {
//                       for (let n = 1; n<10; n++){
//                         if (n === num1 || n === num2) {cell[n] = false;}
//                       }
//                     }
//                   })
//                 }
//                 if (block1 === block2) {
//                   // make evert cell in this col's num1 and num2 = false
//                   cells.forEach((cell)=> {
//                     if (cell[10] != null || cell[0] === exact1 || cell[0] === exact2) {return;}
//                     else if (cell[11] === block1) {
//                       for (let n = 1; n<10; n++){
//                         if (n === num1 || n === num2) {cell[n] = false;}
//                       }
//                     }
//                   })
//                 }
//               }
//             }
//           }
//         }
//       })
//     setCells([
//       ...cells,
//     ]
//     )
//     testArrayEquivalences(cells, originalArray) ? setHasChanged(false) : setHasChanged(true);
//     setfunctionOngoing(false);
//     refreshNulls(setfunctionOngoing, cells, setCells);
//   };

//   // Level 3 Test

//   function bruteForce (setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved) {

//     let success = false;
//     let originalCellsArray = [];
//     originalCellsArray.push(duplicate(cells));
//     let guessArray = [];
//     let foundNewInfo = false;
//     let doneWithCell = false;
//     let doneGuessingingInside = false;
//     let num = '';
//     let guess = '';
//     let foundSolution = false;
//     let solution = [];
//     let correctGuess = 0;

//     while (!foundNewInfo) { // Global test.  If this is done you either solved it, or gained one number
//       // cells.forEach((cell) => {
//       for (let i = 0; i < cells.length; i++) {
//         // console.log('begin testing', cells[i][0]);
//         if (cells[i][10] != null) doneWithCell = true;
//         while (!doneWithCell){
//           // console.log('not yet done with', cells[i][0]);
//           if (cells[i][10] === null) {
//             // console.log(cells[i][0], 'is unknown, so there are some guesses to do:');
//             while(!doneGuessingingInside){
//               num = cells[i].findIndex(isUnknown);  // problem: this will only find the first number that is unknown
//               console.log('testing number: ', num, 'of ', cells[i][0]);
//               if (num>0){
//                 guess = cells[i][0]+num;
//                 if (guessArray.find(element => element === guess) === undefined) {
//                   guessArray.push(guess);
//                   doneGuessingingInside = true;
//                 }
//               }
//               // else if (num<0) {
//               //   doneGuessingingInside = true;  // fail safe
//               //   // return;
//               // }
//               // else doneGuessingingInside = true;
//             }
//             // console.log('escaped the inner loop');
//             if (num>0) {
//               doneGuessingingInside = false;
//               cells[i][10] = num;
//               console.log('solve value: ',solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved));
//               if (solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved) === true){  //returns true if solved, false if not
//                 doneWithCell = true;
//                 foundNewInfo = true;
//                 success = true;
//                 foundSolution = true;
//                 i = cells.length-1;
//                 solution = duplicate(cells);
//                 correctGuess = guessArray[guessArray.length-1];
//                 // console.log('dingding');
//               }
//               else {
//                 solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
//                 // console.log('testContra:', testContradiction(setfunctionOngoing, cells, setNoContradiction));
//                 if (!testContradiction(setfunctionOngoing, cells, setNoContradiction)) {  // contradiction found, cell[10] is not num
//                   console.log('A contradiction was found');
//                   guess = guess.substring(0, guess.length -1);
//                   let r = parseInt(guess[1]);
//                   let c = parseInt(guess[3]);
//                   let arrayindex = c + 9*(r-1) -1;
//                   // console.log('originalCellsArray[0]:', originalCellsArray[0]);
//                   // console.log(guess);
//                   // console.log(arrayindex);
//                   // console.log('originalCellsArray[0][arrayindex]:', originalCellsArray[0][arrayindex]);
//                   // console.log('originalCellsArray[0][arrayindex][num]:', originalCellsArray[0][arrayindex][num]);
//                   originalCellsArray[0][arrayindex][num]=false;
//                   // console.log('originalCellsArray[0][arrayindex][num]:', originalCellsArray[0][arrayindex][num]);
//                   setCells(originalCellsArray[0]);
//                   doneWithCell = true;
//                   foundNewInfo = true;
//                   success = true;
//                   i = cells.length-1;
//                 }
//                 else setCells(originalCellsArray[0]);
//               }
//             }
//             else doneWithCell = true;
//           }

//         }
//         // console.log('escaped the middle loop');
//         if (cells[i][0] === 'r9c9') {
//           if (!foundNewInfo){
//             foundNewInfo = true;
//           }
//         }
//         else if (!foundNewInfo) doneWithCell = false;
//       }
//     }
//     // console.log('escaped the final loop');
//     if (foundSolution) {
//       // setCells(solution);
//       // cells = solution;
//       num = correctGuess[5];
//       guess = guess.substring(0, guess.length -1);
//       let r = parseInt(guess[1]);
//       let c = parseInt(guess[3]);
//       let arrayindex = c + 9*(r-1) -1;
//       // cells[arrayindex][10] = num;
//       setCells([
//         ...cells,
//       ]
//       )
//     }
//     setNoContradiction(true);
//     return success
//   }

//   // Level 4 Solve

//   function solve (setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved) {
//     let success = false;
//     let done = false;
//     addKnowns(setfunctionOngoing, cells, setCells, setLastTested, setNoContradiction, setSolved);
//     let doneTest = function () {
//       if (testIsSolved(setfunctionOngoing, cells, setNoContradiction)) {
//         console.log('solution found');
//         success = true;
//         return true
//       }
//       else return false
//     }
//     let changes = 0;
//     let originalArray = [];
//     let testCount = 0;
//     while (!done) {
//       originalArray = duplicate(cells);
//       testCount ++;
//       testForKnowns(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells); console.log(`Test ${testCount}`);
//       addKnowns(setfunctionOngoing, cells, setCells, setLastTested, setNoContradiction, setSolved);
//       if (doneTest()) {
//         return true;
//       }
//       else {
//         if (testArrayEquivalences(cells, originalArray) === false) changes++;
//       }

//       originalArray = duplicate(cells);
//       testCount ++;
//       testRows(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells); console.log(`Test ${testCount}`);
//       addKnowns(setfunctionOngoing, cells, setCells, setLastTested, setNoContradiction, setSolved);
//       if (doneTest()) {
//         return true;
//       }
//       else {
//         if (testArrayEquivalences(cells, originalArray) === false) changes++;
//       }

//       originalArray = duplicate(cells);
//       testCount ++;
//       testCols(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells); console.log(`Test ${testCount}`);
//       addKnowns(setfunctionOngoing, cells, setCells, setLastTested, setNoContradiction, setSolved);
//       if (doneTest()) {
//         return true;
//       }
//       else {
//         if (testArrayEquivalences(cells, originalArray) === false) changes++;
//       }

//       originalArray = duplicate(cells);
//       testCount ++;
//       testBlocks(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells); console.log(`Test ${testCount}`);
//       addKnowns(setfunctionOngoing, cells, setCells, setLastTested, setNoContradiction, setSolved);
//       if (doneTest()) {
//         return true;
//       }
//       else {
//         if (testArrayEquivalences(cells, originalArray) === false) changes++;
//       }

//       if (changes === 0) {
//         originalArray = duplicate(cells);
//         testCount ++;
//         testLinkedPairs(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells); console.log(`Test ${testCount}`);
//         addKnowns(setfunctionOngoing, cells, setCells, setLastTested, setNoContradiction, setSolved);
//         if (doneTest()) {
//           return true;
//         }
//         else {
//           if (testArrayEquivalences(cells, originalArray) === false) changes++;
//         }
//       }
//       if (changes === 0) {
//         console.log('could not find solution, yet...');
//         done = true;
//       }
//       else changes = 0;
//     }
//     return success;
//   }

//   // Level 5 SolveWithBrute

//   function bruteSolve (setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved) {
//     let done = false;
//     let doneTest = function () {
//       if (testIsSolved(setfunctionOngoing, cells, setNoContradiction)) {
//         console.log('solution found');
//         return true
//       }
//       else return false
//     }
//     while (!done) {
//       console.log('ongoing');
//       // if (solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved)) {
//       //   done = true;
//       // }
//       // addKnowns(setfunctionOngoing, cells, setCells, setLastTested, setNoContradiction, setSolved);
//       // if (!done) {
//       //   bruteForce(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
//       // }
//       console.log(doneTest());
//       solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved)
//       console.log(doneTest());
//       if (doneTest() === true) {
//         console.log('done from solve');
//         done = true;
//         return;
//       }
//       addKnowns(setfunctionOngoing, cells, setCells, setLastTested, setNoContradiction, setSolved);
//       bruteForce(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
//       if (doneTest() === true) {
//         console.log('done from brute');
//         done = true;
//         return;
//       }
//     }
//     // addKnowns(setfunctionOngoing, cells, setCells, setLastTested, setNoContradiction, setSolved);
//     // solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
//     // // bruteForce(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
//     // cells.forEach((cell)=>{
//     //   for(let i=1; i<10; i++) {
//     //     cell[i]='unknown';
//     //   }
//     // })
//     // addKnowns(setfunctionOngoing, cells, setCells, setLastTested, setNoContradiction, setSolved);
//     // solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
//     return;
//   }


// export {
//   generateIntialCellsArray,
//   confirmInputs,
//   testEasy,
//   testMedium,
//   testHard,
//   testVeryHard,
//   testChallenge,
//   addKnowns,
//   testForKnowns,
//   testCols,
//   testRows,
//   testBlocks,
//   testLinkedPairs,
//   bruteForce,
//   solve,
//   bruteSolve,
//   resetEverything
// };




  //  Attempted to make guessing occur at deeper levels of indexfinding
  // function bruteForce (setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved) {

  //   setfunctionOngoing(true);

  //   let success = false;
  //   let originalCellsArray = [];
  //   originalCellsArray.push(duplicate(cells));
  //   let guessArray = [];
  //   let foundNewInfo = false;
  //   let doneWithCell = false;
  //   let doneGuessingingInside = false;
  //   let num = '';
  //   let guess = '';
  //   let foundSolution = false;
  //   let solution = [];
  //   let correctGuess = 0;

  //   while (!foundNewInfo) { // Global test.  If this is done you either solved it, or gained one number
  //     // cells.forEach((cell) => {
  //     for (let i = 0; i < cells.length; i++) {
  //       // console.log('begin testing', cells[i][0]);
  //       if (cells[i][10] != null) doneWithCell = true;
  //       while (!doneWithCell){
  //         // console.log('not yet done with', cells[i][0]);
  //         if (cells[i][10] === null) {
  //           // console.log(cells[i][0], 'is unknown, so there are some guesses to do:');
  //           let nums = [];
  //           while(!doneGuessingingInside){
  //             for (let j = 1; j< 10; j++) {
  //               if (cells[i][j] === 'unknown') {
  //                 guess = cells[i][0]+num;
  //                 nums.push(guess);
  //                 // guessArray.push(guess);
  //               }
  //               if (j===9) doneGuessingingInside = true;
  //             }
  //           }
  //           // console.log('escaped the inner loop');
  //           doneGuessingingInside = false;

  //           nums.forEach((guessFromNums)=> {
  //             num = guessFromNums[4];
  //             guess = guessFromNums.substring(0, guessFromNums.length -1);
  //             guessArray.push(guessFromNums);
  //           // guess
  //             cells[i][10] = num;
  //             console.log('solve value: ',solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved));
  //             if (solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved) === true){  //returns true if solved, false if not
  //               doneWithCell = true;
  //               foundNewInfo = true;
  //               success = true;
  //               foundSolution = true;
  //               i = cells.length-1;
  //               solution = duplicate(cells);
  //               correctGuess = guessArray[guessArray.length-1];
  //               // console.log('dingding');
  //             }
  //             else {
  //               solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
  //               // console.log('testContra:', testContradiction(setfunctionOngoing, cells, setNoContradiction));
  //               if (!testContradiction(setfunctionOngoing, cells, setNoContradiction)) {  // contradiction found, cell[10] is not num
  //                 console.log('A contradiction was found');
  //                 guess = guess.substring(0, guess.length -1);
  //                 let r = parseInt(guess[1]);
  //                 let c = parseInt(guess[3]);
  //                 let arrayindex = c + 9*(r-1) -1;
  //                 // console.log('originalCellsArray[0]:', originalCellsArray[0]);
  //                 // console.log(guess);
  //                 // console.log(arrayindex);
  //                 // console.log('originalCellsArray[0][arrayindex]:', originalCellsArray[0][arrayindex]);
  //                 // console.log('originalCellsArray[0][arrayindex][num]:', originalCellsArray[0][arrayindex][num]);
  //                 originalCellsArray[0][arrayindex][num]=false;
  //                 // console.log('originalCellsArray[0][arrayindex][num]:', originalCellsArray[0][arrayindex][num]);
  //                 setCells(originalCellsArray[0]);
  //                 doneWithCell = true;
  //                 foundNewInfo = true;
  //                 success = true;
  //                 i = cells.length-1;
  //               }
  //               else setCells(originalCellsArray[0]);
  //             }
  //           })
  //         }
  //         else doneWithCell = true;

  //       }
  //       // console.log('escaped the middle loop');
  //       if (cells[i][0] === 'r9c9') {
  //         if (!foundNewInfo){
  //           foundNewInfo = true;
  //         }
  //       }
  //       else if (!foundNewInfo) doneWithCell = false;
  //     }
  //   }
  //   // console.log('escaped the final loop');
  //   if (foundSolution) {
  //     // setCells(solution);
  //     // cells = solution;
  //     // num = correctGuess[5];
  //     // guess = guess.substring(0, guess.length -1);
  //     // let r = parseInt(guess[1]);
  //     // let c = parseInt(guess[3]);
  //     // let arrayindex = c + 9*(r-1) -1;
  //     // cells[arrayindex][10] = num;
  //     setCells([
  //       ...cells,
  //     ]
  //     )
  //   }

  //   setNoContradiction(true);
  //   setHasChanged(true);
    
  //   // setLastTested(false);
  //   // refreshNulls(setfunctionOngoing, cells, setCells);
  //   // setSolved(testIsSolved(setfunctionOngoing, cells, setNoContradiction));


  //   setfunctionOngoing(false);
  //   return success;
  // }

  // function bruteForce (setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved) {
  //   setfunctionOngoing(true);
  //   let foundNewInfo = false;
  //   let solveValue = solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
  //   if (solveValue) foundNewInfo = true;
  //   let success = false;
  //   let originalCellsArray = [];
  //   originalCellsArray.push(duplicate(cells));
  //   let holderI = '';
  //   let holderJ = '';
  //   while (!foundNewInfo) {
  //     for (let i = 0; i < cells.length; i++) {
  //       if (cells[i][10] === null){
  //         for (let j = 1; j<10; j++) {
  //           if (cells[i][j] === 'unknown') {
  //             if (cells[i] != undefined) {
  //               console.log('pre tests for number', j, 'of', cells[i][0], cells);
  //               }
  //             cells[i][10] = j;
  //             solveValue = solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
  //             let contradictionValue = testContradiction(setfunctionOngoing, cells, setNoContradiction);
  //             if (solveValue === true) {    // Suspect this will never occur, as if the solution were one step away, the solve function would find it
  //               console.log('solution found and inside loop');
  //               holderI = i;
  //               holderJ = j;
  //               j = 10;
  //               i = 81;
  //               foundNewInfo = true;
  //               setNoContradiction(true);
  //               setHasChanged(true);
  //               success = true;
  //               makeUnknown(cells);
  //               solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
  //             }
  //             else {
  //               if (contradictionValue === true) {
  //                 console.log('contradiction found and inside loop');
  //                 cells = originalCellsArray[0];
  //                 originalCellsArray.pop();
  //                 originalCellsArray.push(duplicate(cells));
  //                 cells[i][j] = false;
  //                 cells[i][10] = null;
  //                 j = 10;
  //                 i = 81;
  //                 foundNewInfo = true;
  //                 setNoContradiction(true);
  //                 setHasChanged(true);
  //                 success = true;
  //               }
  //               else {
  //                 cells = originalCellsArray[0];
  //                 originalCellsArray.pop();
  //                 originalCellsArray.push(duplicate(cells));
  //               }
  //             }
  //           }
  //           if (i === 80 && j === 9 && foundNewInfo === false) {
  //             console.log('made no progress with single level guesses');
  //             foundNewInfo = true;
  //             setNoContradiction(true);
  //             setHasChanged(false);
  //             cells = originalCellsArray[0];
  //             originalCellsArray.pop();
  //             originalCellsArray.push(duplicate(cells));
  //           }
  //         }
  //       }
  //     }
  //   }
  //   if (holderI > 0) {
  //     console.log('A different way of solving...');
  //     cells[holderI][holderJ] = true;
  //     cells[holderI][10] = holderJ;
  //     console.log(holderI, holderJ);
  //   }
    
  //   setCells([
  //     ...cells,
  //   ]
  //   )
  //   testContradiction(setfunctionOngoing, cells, setNoContradiction)
  //   setfunctionOngoing(false);
    
  //   return success;
  // }


  //   if (solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved)) {
  //     return;
  //   }
  //   let solveResult = solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
  //   let bruteForceResult = bruteForce(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
  //   while (!solveResult) {
  //     console.log('looping outside');
  //     if (bruteForceResult) bruteForceResult = false;
  //     while (!bruteForceResult) {
  //       console.log('start looping inside');
  //       bruteForceResult = bruteForce(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
  //       console.log('mid looping inside');
  //     }
  //     console.log('done looping inside');
  //     solveResult = solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
  //   }
  //   setCells([
  //     ...cells,
  //   ]
  //   )
  //   return;
  // }



    // bruteForce(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);

    // addKnowns(setfunctionOngoing, cells, setCells, setLastTested, setNoContradiction, setSolved);
    
    // let done = false
    // let doneTestBrute = function () {
    //   if (testIsSolved(setfunctionOngoing, cells, setNoContradiction, setSolved)) {
    //     console.log('solution found');
    //     done = true;
    //     return true
    //   }
    //   else return false
    // }
    // while (!done) {
    //   solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
    //   doneTestBrute();
    //   // addKnowns(setfunctionOngoing, cells, setCells, setLastTested, setNoContradiction, setSolved);
    //   if (!done) bruteForce(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
    //   doneTestBrute();
    //   // addKnowns(setfunctionOngoing, cells, setCells, setLastTested, setNoContradiction, setSolved);
    //   // solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
    //   // bruteForce(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
    // }


    // function isSolved (cells) {    
    //   let count = 0;
    //   let solved = false;
    //   let sum = 0;
    //   cells.forEach((cell)=> {
    //     if (cell[10] !== '') {
    //       count ++;
    //       sum += cell[10];
    //     }
    //   })

    //   if (count === 81 && sum === 405) {
    //     solved = true;
    //     console.log('A solution has been found!');
    //   }
    //   else console.log('No solution yet.');
    //   return solved;
    // }

    // let done = false;
    // let loops = 1;

    // while (!done) {
    //   console.log(`${loops} loops.`);
    //   bruteForce(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
    //   isSolved(cells) ? done = true : loops ++;
    // }
    // console.log('out of loop and finished');
  //   return;
  // }

  







  // function guessAndBruteSolve (setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved, solved, hasChanged) {
  //   setfunctionOngoing(true);
  //   let done = bruteSolve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved, solved, hasChanged)[0];
    
  //   if (done) {
  //     setfunctionOngoing(false);
  //     return done;
  //   }
  //   else {
  //     document.body.style.cursor = "wait";
  //     setTimeout(function(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved, solved, hasChanged){
  //       let done = false;
  //       let holderLocation = '';
  //       let holderValue = '';
  //       let solution = [];
  //       let solutionCopied = false;
  //       let guesses = 0;
  //       let originalArray = JSON.parse(JSON.stringify(cells));
  //       // let originalArray = duplicate(cells);
  //       console.log('original array', originalArray);
  //       cells.forEach((cell, index)=>{
  //         if (solution.length === 0) {
  //           for (let i = 1; i < 10; i++) {
  //             if (solution.length === 0) {
  //               if (cell[i] === 'unknown') {
  //                 if (!done) {
  //                   cell[10] = toString(i);
  //                   let solvedHolder = bruteSolve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved, solved, hasChanged);
  //                   guesses ++;
  //                   done = solvedHolder[0];
  //                   if (done === true) {
  //                     holderLocation = index;
  //                     holderValue = i;
  //                     if (!solutionCopied) {
  //                       solution = solvedHolder[1];
  //                       solution[holderLocation][10] = holderValue;
  //                       solutionCopied = true;
  //                     }
  //                   }
  //                   else if (guesses > 99) {
  //                     console.log('Too many guesses.  Escaping loops to prevent crash.');
  //                     done = true;
  //                     solution.push('failed');
  //                     i = 10;
  //                   }
  //                   else {
  //                     cells = originalArray;
  //                     originalArray = duplicate(cells);
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       })
      
  //         // document.getElementById(holderId).value = toString(holderValue);
  //         // document.getElementById(holderId).placeholder = toString(holderValue);
  //         if (solution.length != 1) {
  //           setCells(
  //           solution
            
  //           )
  //         }
  //         setfunctionOngoing(false);
  //         document.body.style.cursor = "default";
  //         return done;

        
  //     }, 1);
  //   }
  //   return;
  // }











  // function guessAndBruteSolve (setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved, solved, hasChanged) {
  //   document.body.style.cursor = "wait";
  //   const newfunction = async function {


  //   }
    
  //   setfunctionOngoing(true);
  //   let done = bruteSolve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved, solved, hasChanged)[0];
  //   let holderLocation = '';
  //   // let holderId = '';
  //   let holderValue = '';
  //   let solution = [];
  //   let solutionCopied = false;
  //   let guesses = 0;
  //   if (done) {
  //     setfunctionOngoing(false);
  //     document.body.style.cursor = "default";
  //     return done;
  //   }
  //   else {
      
  //     let originalArray = duplicate(cells);
  //     console.log('original array', originalArray);
  //     cells.forEach((cell, index)=>{
  //       if (solution.length === 0) {
  //         for (let i = 1; i < 10; i++) {
  //           if (solution.length === 0) {
  //             if (cell[i] === 'unknown') {
  //               if (!done) {
  //                 cell[10] = toString(i);
  //                 // done = bruteSolve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved, solved, hasChanged)[0];
  //                 let solvedHolder = bruteSolve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved, solved, hasChanged);
  //                 guesses ++;
  //                 done = solvedHolder[0];
  //                 if (done === true) {
  //                   holderLocation = index;
  //                   // holderId = cell[0];
  //                   holderValue = i;
  //                   // cells[holderLocation][10] = toString(holderValue);
  //                   if (!solutionCopied) {
  //                     solution = solvedHolder[1];
  //                     // solution[holderLocation][10] = toString(holderValue);
  //                     solution[holderLocation][10] = holderValue;
  //                     solutionCopied = true;
  //                   }
  //                 }
  //                 else if (guesses > 99) {
  //                   console.log('Too many guesses.  Escaping loops to prevent crash.');
  //                   done = true;
  //                   solution.push('failed');
  //                   i = 10;
  //                 }
  //                 else {
  //                   cells = originalArray;
  //                   originalArray = duplicate(cells);
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     })
  //   }
  //   // document.getElementById(holderId).value = toString(holderValue);
  //   // document.getElementById(holderId).placeholder = toString(holderValue);
  //   if (solution.length != 1) {
  //     setCells(
  //     solution
      
  //     )
  //   }
  //   setfunctionOngoing(false);
  //   document.body.style.cursor = "default";
  //   return done;
  // }



  function bruteSolve (setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved, solved, hasChanged) {
    // setSolved(false);
    let solveValue = solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
    let functionProgress = true;    
  while (solveValue === false && functionProgress === true) {
    setfunctionOngoing(true);
    let foundNewInfo = false;
    solveValue = solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
    if (solveValue) {
      foundNewInfo = true;
      setSolved(true);
    }
    // let success = false;
    let originalCellsArray = [];
    originalCellsArray.push(duplicate(cells));
    let holderI = '';
    let holderJ = '';
    while (!foundNewInfo) {
      // console.log('bruting');
      // console.log(foundNewInfo);
      for (let i = 0; i < cells.length; i++) {
        if (cells[i][10] === ''){
          for (let j = 1; j<10; j++) {
            if (cells[i][j] === 'unknown') {
              // if (cells[i] !== undefined) console.log('pre tests for number', j, 'of', cells[i][0], cells);
              // console.log(`${i} ${j}`);
              cells[i][10] = j;
              solveValue = solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
              // console.log('is solved? ', solveValue);
              let contradictionValue = testContradiction(setfunctionOngoing, cells, setNoContradiction);
                // console.log("contradictory? ", contradictionValue);
              if (solveValue === true) {
                console.log('solution found and inside loop');
                holderI = i;
                holderJ = j;
                j = 10;
                i = 81;
                foundNewInfo = true;
                setNoContradiction(true);
                setHasChanged(true);
                setSolved(true);
                // success = true;
                makeUnknown(cells);
                solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
              }
              else {
                if (contradictionValue === true) {
                  console.log('contradiction found and inside loop');
                  // console.log('cell#',i, j);
                  // console.log('cells after tests',cells);
                  // console.log('original cells', originalCellsArray[0]);
                  cells = originalCellsArray[0];
                  // console.log('cells after direct change',cells);
                  // setCells([originalCellsArray[0]]);
                  // console.log('cells after functional change',cells);
                  // cells = originalCellsArray[0];
                  originalCellsArray.pop();
                  originalCellsArray.push(duplicate(cells));
                  cells[i][j] = false;
                  cells[i][10] = '';
                  // console.log('cells after contradiction fix:', cells);
                  j = 10;
                  i = 81;
                  foundNewInfo = true;
                  setNoContradiction(true);
                  setHasChanged(true);
                  // success = true;
                }
                else {
                  cells = originalCellsArray[0];
                  originalCellsArray.pop();
                  originalCellsArray.push(duplicate(cells));
                  // setCells([originalCellsArray[0]]);
                  // console.log('cells after reset due to no progress:', cells);
                }
              }
            }
            // console.log(`i = ${i}, j = ${j}, foundNewInfo must be false to esc, it is: ${foundNewInfo}`);
            if (i === 80 && j === 9 && foundNewInfo === false) {
              console.log('made no progress with single level guesses');
              foundNewInfo = true;
              setNoContradiction(true);
              setHasChanged(false);
              cells = originalCellsArray[0];
              originalCellsArray.pop();
              originalCellsArray.push(duplicate(cells));
              functionProgress = false;
            }
            // if (cells[i] !== undefined) {
            //   console.log('post tests', cells[i][0], cells);
            // }
          }
        }
      }
    }
    solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
    if (holderI > 0) {
      console.log('A different way of solving...');
      cells[holderI][holderJ] = true;
      cells[holderI][10] = holderJ;
      console.log(holderI, holderJ);
      setSolved(true);
    }
    setCells([
      ...cells,
    ]
    )
  }
    testContradiction(setfunctionOngoing, cells, setNoContradiction)
    setfunctionOngoing(false);
    // while (hasChanged){
    //   console.log('bruting');
    //   bruteForce(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
    //   if (solved) return solved;
    //   console.log('bruted');
    //   // solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
    // }
    // console.log(solveValue);
    // console.log('cells at end of force', cells);
    // console.log(JSON.stringify(cells));
    let returnValue = [solveValue, cells]
    // return solveValue;
    return returnValue;
  }
  
  // function guessAndBruteSolve (setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved, solved, hasChanged) {
  //   document.body.style.cursor = "wait";

  //   const newFunction = async function (setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved, solved, hasChanged) {
  //     setfunctionOngoing(true);
  //     let done = bruteSolve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved, solved, hasChanged)[0];
  //     let holderLocation = '';
  //     // let holderId = '';
  //     let holderValue = '';
  //     let solution = [];
  //     let solutionCopied = false;
  //     let guesses = 0;
  //     if (done) {
  //       setfunctionOngoing(false);
  //       // document.body.style.cursor = "default";
  //       return;
  //     }
  //     else {
        
  //       let originalArray = duplicate(cells);
  //       console.log('original array', originalArray);
  //       cells.forEach((cell, index)=>{
  //         if (solution.length === 0) {
  //           for (let i = 1; i < 10; i++) {
  //             if (solution.length === 0) {
  //               if (cell[i] === 'unknown') {
  //                 if (!done) {
  //                   cell[10] = toString(i);
  //                   // done = bruteSolve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved, solved, hasChanged)[0];
  //                   let solvedHolder = bruteSolve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved, solved, hasChanged);
  //                   guesses ++;
  //                   done = solvedHolder[0];
  //                   if (done === true) {
  //                     holderLocation = index;
  //                     // holderId = cell[0];
  //                     holderValue = i;
  //                     // cells[holderLocation][10] = toString(holderValue);
  //                     if (!solutionCopied) {
  //                       solution = solvedHolder[1];
  //                       // solution[holderLocation][10] = toString(holderValue);
  //                       solution[holderLocation][10] = holderValue;
  //                       solutionCopied = true;
  //                     }
  //                   }
  //                   else if (guesses > 99) {
  //                     console.log('Too many guesses.  Escaping loops to prevent crash.');
  //                     done = true;
  //                     solution.push('failed');
  //                     i = 10;
  //                   }
  //                   else {
  //                     cells = originalArray;
  //                     originalArray = duplicate(cells);
  //                   }
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       })
  //     }
  //     // document.getElementById(holderId).value = toString(holderValue);
  //     // document.getElementById(holderId).placeholder = toString(holderValue);
  //     if (solution.length != 1) {
  //       setCells(
  //       solution
        
  //       )
  //     }
  //     setfunctionOngoing(false);
  //     // document.body.style.cursor = "default";
  //     return;
  //   }
  //   newFunction(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved, solved, hasChanged);
    
  //   return;
  // }



  // Attempt at setTimeout to get cursor spinning
  // function guessAndBruteSolve (setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved, solved, hasChanged) {
  //   document.body.style.cursor = "wait";
  //   setfunctionOngoing(true);
  //   let done = bruteSolve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved, solved, hasChanged)[0];

  //   function functionToBeCalled (setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved, solved, hasChanged) {
  //     let done = false;
  //     let holderLocation = '';
  //     let holderValue = '';
  //     let solution = [];
  //     let solutionCopied = false;
  //     let guesses = 0;
  //     // let originalArray = JSON.parse(JSON.stringify(cells));
  //     let originalArray = duplicate(cells);
  //     // console.log('original array', originalArray);
  //     // console.log(cells);
  //     cells.forEach((cell, index)=>{
  //       if (solution.length === 0) {
  //         for (let i = 1; i < 10; i++) {
  //           if (solution.length === 0) {
  //             if (cell[i] === 'unknown') {
  //               console.log(cell);
  //               if (!done) {
  //                 cell[10] = toString(i);
  //                 console.log('not done yet');
  //                 let solvedHolder = bruteSolve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved, solved, hasChanged);
  //                 debugger;
  //                 guesses ++;
  //                 done = solvedHolder[0];
  //                 if (done === true) {
  //                   holderLocation = index;
  //                   holderValue = i;
  //                   if (!solutionCopied) {
  //                     solution = solvedHolder[1];
  //                     solution[holderLocation][10] = holderValue;
  //                     solutionCopied = true;
  //                   }
  //                 }
  //                 else if (guesses > 99) {
  //                   console.log('Too many guesses.  Escaping loops to prevent crash.');
  //                   done = true;
  //                   solution.push('failed');
  //                   i = 10;
  //                 }
  //                 else {
  //                   cells = originalArray;
  //                   originalArray = duplicate(cells);
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     })
    
  //       // document.getElementById(holderId).value = toString(holderValue);
  //       // document.getElementById(holderId).placeholder = toString(holderValue);
  //       if (solution.length != 1) {
  //         setCells(
  //         solution
          
  //         )
  //       }
  //       setfunctionOngoing(false);
  //       document.body.style.cursor = "default";
  //       return done;

  //   }

  //   if (done) {
  //     setfunctionOngoing(false);
  //     document.body.style.cursor = "default";
  //     return done;
  //   }
  //   else {
  //     setTimeout(function(){
  //       functionToBeCalled(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved, solved, hasChanged);
  //     }, 1000);
  //   }
  //   return;
  // }


  // Before change:

// function bruteForce (setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved) {

//   setfunctionOngoing(true);
//   solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);

//   let success = false;
//   let originalCellsArray = [];
//   originalCellsArray.push(duplicate(cells));
//   let guessArray = [];
//   let foundNewInfo = false;
//   let doneWithCell = false;
//   let doneGuessingingInside = false;
//   let num = '';
//   let guess = '';
//   let foundSolution = false;
//   let solution = [];
//   let correctGuess = 0;

//   while (!foundNewInfo) { // Global test.  If this is done you either solved it, or gained one number
//     // cells.forEach((cell) => {
//     for (let i = 0; i < cells.length; i++) {
//       // console.log('begin testing', cells[i][0]);
//       if (cells[i][10] !== '') doneWithCell = true;
//       while (!doneWithCell){
//         // console.log('not yet done with', cells[i][0]);
//         if (cells[i][10] === '') {
//           // console.log(cells[i][0], 'is unknown, so there are some guesses to do:');
//           while(!doneGuessingingInside && cells[i].findIndex(isUnknown)>0){
//             // num = cells[i].findIndex(isUnknown);  // problem: this will only find the first number that is unknown  Changed this to do a random number until an unknown is found.
//             let foundRandomUnkown = false;
//             let randNum = 0;
//             while(!foundRandomUnkown){
//               randNum = 1+Math.floor(Math.random()*9);
//               // console.log(`randomly chose ${randNum}`);
//               if (cells[i][randNum] === 'unknown' && cells[i][10] === '') {
//                 console.log(`${randNum} of ${cells[i][0]} is unknown`);
//                 num = randNum;
//                 foundRandomUnkown = true;
//               }
//               else console.log(`${randNum} of ${cells[i][0]} not unknown`);
//             }

//             console.log('testing number: ', num, 'of ', cells[i][0]);
//             if (num>0){
//               guess = cells[i][0]+num;
//               if (guessArray.find(element => element === guess) === undefined) {
//                 guessArray.push(guess);
//                 doneGuessingingInside = true;
//                 console.log(guess, ' has not yet been made');
//               }
//             }
//             // else doneGuessingingInside = true;
//           }
//           // console.log('escaped the inner loop');
//           doneGuessingingInside = false;
//           cells[i][10] = num;
//           let solveValue = solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);
//           console.log('The statement: "the problem is solved", is: ',solveValue);
//           if (guess.length > 0) {
//             if (solveValue === true){  //returns true if solved, false if not
//               doneWithCell = true;
//               foundNewInfo = true;
//               success = true;
//               foundSolution = true;
//               i = cells.length-1;
//               solution = duplicate(cells);
//               correctGuess = guessArray[guessArray.length-1];
//               // console.log('dingding');
//             }
//             else {
//               // solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved);  // I don't think this is needed
//               // console.log('testContra:', testContradiction(setfunctionOngoing, cells, setNoContradiction));
//               if (testContradiction(setfunctionOngoing, cells, setNoContradiction)) {  // contradiction found, cell[10] is not num

//                 // num = guess[4];  // added to avoid -1 error...
//                 guess = guess.substring(0, guess.length -1);
//                 let r = parseInt(guess[1]);
//                 let c = parseInt(guess[3]);
//                 console.log(`A contradiction was found.  ${guess} is not ${num}`);
//                 console.log(cells);
//                 let arrayindex = c + 9*(r-1) -1;
//                 // console.log('originalCellsArray[0]:', originalCellsArray[0]);
//                 // console.log(guess);
//                 // console.log(arrayindex);
//                 // console.log('originalCellsArray[0][arrayindex]:', originalCellsArray[0][arrayindex]);
//                 // console.log('originalCellsArray[0][arrayindex][num]:', originalCellsArray[0][arrayindex][num]);
//                 originalCellsArray[0][arrayindex][num]=false;
//                 // console.log('originalCellsArray[0][arrayindex][num]:', originalCellsArray[0][arrayindex][num]);
//                 setCells(originalCellsArray[0]);
//                 doneWithCell = true;
//                 foundNewInfo = true;
//                 success = true;
//                 i = cells.length-1;
//               }
//               else {
//                 setCells(originalCellsArray[0]);
//                 console.log(`No contradiction found.  ${guess} may or may not be ${num}`);
//               }
//             }
//           }
//         }
//         else doneWithCell = true;
//       }
//       // console.log('escaped the middle loop');
//       if (cells[i][0] === 'r9c9') {
//         if (!foundNewInfo){
//           foundNewInfo = true;
//         }
//       }
//       else if (!foundNewInfo) {
//         doneWithCell = false;
//         // cells = originalCellsArray[0];
//       }
//     }
//   }
//   // console.log('escaped the final loop');
//   if (foundSolution) {
//     // setCells(solution);
//     // cells = solution;
//     // num = correctGuess[5];
//     // guess = guess.substring(0, guess.length -1);
//     // let r = parseInt(guess[1]);
//     // let c = parseInt(guess[3]);
//     // let arrayindex = c + 9*(r-1) -1;
//     // cells[arrayindex][10] = num;
//     setCells([
//       ...cells,
//     ]
//     )
//   }

//   setNoContradiction(true);
//   setHasChanged(true);
  
//   // setLastTested(false);
//   // refreshNulls(setfunctionOngoing, cells, setCells);
//   // addKnowns(setfunctionOngoing, cells, setCells, setLastTested, setNoContradiction, setSolved);
//   // setSolved(testIsSolved(setfunctionOngoing, cells, setNoContradiction, setSolved));


//   setfunctionOngoing(false);
  
//   return success;
// }