import React from 'react';
import styled from 'styled-components';

import CellPotentials from './CellPotentials';
import {
  addKnowns,
} from '../components/functions'
// import {
//   noContradiction,
// } from '../App'

function GridMaker({ cells, setCells, inputted, playing, setfunctionOngoing, setLastTested, setNoContradiction, setSolved, noContradiction}) {

  // const MasterGrid = styled.div`
  // padding-left: 5px;
  // width: 565px;
  // height: 568px;
  // display: grid;
  // background-color: ${noContradiction ? "black" : "red"};
  // grid-template-columns: repeat(9, 1fr);
  // text-align: center;
  // justify-content: center;
  // align-items: center;
  // `

  function handleChange (event) {
    console.log(event.target);
    if (event.target.value.length > 1 && inputted === false) {
      event.target.value = event.target.value[0];
    }
  }

  function handleKeyDown (event) {
    event.preventDefault();
    console.log(event.key);
    if (inputted & ((event.key > 0 && event.key < 10)
    || (event.key === 'Escape' || event.keyCode === 'Backspace' || event.keyCode === 'Delete')) // esc and del
    ) {
      if (event.key > 0 && event.key < 10) {
        // console.log(event.target.id);
        let cell = cells.find(element => element[0]===event.target.id);
        // console.log(cell);
        let removedNumber = cell[10];
        let row = cell[0][1];
        let col = cell[0][3];
        cell[10] = (parseInt(event.key));
        // cell[removedNumber] = 'unknown';
        // cells.forEach((cellFromCells)=> {
        //   if (cellFromCells[0][1] === row || cellFromCells[0][3] === col){
        //     cellFromCells[removedNumber] = 'unknown';
        //   }
        // })
        addKnowns(setfunctionOngoing, cells, setCells, setLastTested, setNoContradiction, setSolved);
        setCells([
          ...cells,
        ]
        )
      }
      else {
        let cell = cells.find(element => element[0]===event.target.id);
        cell[10] = '';
        addKnowns(setfunctionOngoing, cells, setCells, setLastTested, setNoContradiction, setSolved);
        setCells([
          ...cells,
        ]
        )
      }
      return;
    }
    // if (inputted & ((event.keyCode > 48 && event.keyCode <= 58)
    // || (event.keyCode === 27 || event.keyCode === 8)) // esc and del
    // ) {
    //   if (event.keyCode > 48 && event.keyCode <= 58) {
    //     // console.log(event.target.id);
    //     let cell = cells.find(element => element[0]===event.target.id);
    //     // console.log(cell);
    //     cell[10] = (parseInt(event.keyCode - 48));
    //     addKnowns(setfunctionOngoing, cells, setCells, setLastTested, setNoContradiction, setSolved);
    //     setCells([
    //       ...cells,
    //     ]
    //     )
    //   }
    //   else {
    //     let cell = cells.find(element => element[0]===event.target.id);
    //     cell[10] = '';
    //     addKnowns(setfunctionOngoing, cells, setCells, setLastTested, setNoContradiction, setSolved);
    //     setCells([
    //       ...cells,
    //     ]
    //     )
    //   }
    //   return;
    // }
    // else if (inputted) return;
    else {
      if ( !((event.keyCode > 36 && event.keyCode < 41) || event.keyCode === 13 || event.keyCode === 9 || (event.key > 0 && event.key < 10) || (event.keyCode === 27 || event.keyCode === 8)) ) return;
      let row = event.target.id[1];
      let col = event.target.id[3];
      row = parseInt(row);
      col = parseInt(col);

      // case right, enter, tab
      if (event.keyCode === 39 || event.keyCode === 13 || event.keyCode === 9) {
        if (col<9) {
          col ++;
          let newId = `r${row}c${col}`;
          if (document.getElementById(newId)) {
            document.getElementById(newId).focus();
          }
        }
        else if (col === 9 && row === 9 ) {
          if (document.getElementById('r1c1')) {
            document.getElementById('r1c1').focus();
          }
        }
        else {
          col = 1;
          row ++;
          let newId = `r${row}c${col}`;
          if (document.getElementById(newId)) {
            document.getElementById(newId).focus();
          }
        }
      }
      // case left
      else if (event.keyCode === 37) {
        if (col>1) {
          col --;
          let newId = `r${row}c${col}`;
          if (document.getElementById(newId)) {
            document.getElementById(newId).focus();
          }
        }
        else if (col === 1 && row === 1 ) {
          if (document.getElementById('r9c9')) {
            document.getElementById('r9c9').focus();
          }
        }
        else {
          col = 9;
          row --;
          let newId = `r${row}c${col}`;
          if (document.getElementById(newId)) {
            document.getElementById(newId).focus();
          }
        }
      }
      // case up
      else if (event.keyCode === 38) {
        if (row>1) {
          row --;
          let newId = `r${row}c${col}`;
          if (document.getElementById(newId)) {
            document.getElementById(newId).focus();
          }
        }
        else {
          row = 9;
          let newId = `r${row}c${col}`;
          if (document.getElementById(newId)) {
            document.getElementById(newId).focus();
          }
        }
      }
      // case down
      else if (event.keyCode === 40) {
        if (row<9) {
          row ++;
          let newId = `r${row}c${col}`;
          if (document.getElementById(newId)) {
            document.getElementById(newId).focus();
          }
        }
        else {
          row = 1;
          let newId = `r${row}c${col}`;
          if (document.getElementById(newId)) {
            document.getElementById(newId).focus();
          }
        }
      }
      // case del
      else if (event.keyCode === 27 || event.keyCode === 8) { 
        let cell = cells.find(element => element[0]===event.target.id);
        let newId = `r${row}c${col}`;
          if (document.getElementById(newId)) {
            document.getElementById(newId).value = '';
            document.getElementById(newId).placeholder = '';
          }
        // cell[10] = ('');
        // setCells([
        //   ...cells,
        // ]
        // )
      }
      else event.target.value = parseInt(event.key);
      // else event.target.value = parseInt(event.keyCode - 48);
    }
  }

    return(
      <MasterGrid>
        {/* <LargeGrid> */}
        {cells.map(cell => { 
          return (
              <SingleCell
              key = {cell[0]}
              >
                {inputted === false ? (
                  <CellInput onChange = {handleChange} onKeyDown = {handleKeyDown} id = {cell[0]} row = {cell[0][1]} column = {cell[0][3]} autoComplete = "off" type = 'string' min = '1' max = '9' size = '1'/>
                ) : (
                  playing === true ? (
                    // cell[10] ||
                    <CellInput 
                    placeholder = {cell[10]} value = {cell[10]} 
                    onChange = {handleChange} onKeyDown = {handleKeyDown} id = {cell[0]} row = {cell[0][1]} column = {cell[0][3]} autoComplete = "off" 
                    type = 'string' 
                    min = '1' max = '9' size = '1'/>
                  ) : (
                    cell[10] ||
                    <CellPotentials cell= {cell}></CellPotentials>
                )
                )
                }
              </SingleCell>
          )
        })}
        {/* </LargeGrid> */}
      </MasterGrid>
    )


}

const MasterGrid = styled.div`
padding-left: 5px;
width: 565px;
height: 568px;
display: grid;
background-color: black;
border-color: black;
/* border: 3px solid; */
grid-template-columns: repeat(9, 1fr);
text-align: center;
justify-content: center;
align-items: center;
/* &:nth-child(3n) {
  border-color: blue;
  border-left: 3px thick;
} */
`

// const LargeGrid = styled.div`
//   color: blue;
//   width: 90px;
//   height: 90px;
//   background-color: lightgray;
//   border-color: slategrey;
//   border: 2px solid;
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   justify-content: center;
//   align-items: center;
// `
const SingleCell = styled.div`
  width: 60px;
  height: 60px;
  background-color: lightgray;
  border-color: slategrey;
  border: 1px solid;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  &:nth-of-type(3n) {
    margin-right: 5px;
  }
  &:nth-of-type(n+19):nth-of-type(-n+27) {
    margin-bottom: 5px;
  }
  &:nth-of-type(n+46):nth-of-type(-n+54) {
    margin-bottom: 5px;
  }
`

const CellInput = styled.input`
width: 50px;
height: 50px;
text-align: center;
font-size: 40px;
&::-webkit-inner-spin-button,
&::-webkit-outer-spin-button { 
  -moz-appearance: none; 
  -webkit-appearance: none;
  appearance: none;
  margin: 0; 
}
/* -webkit-user-select: none; */
&:hover {
  background-color: lightgray;
}
&:focus {
  background-color: palegreen;
}
`

export default GridMaker;

    // return(
    //   <LargeGrid>
    //     {keys.forEach(key => { cells[key].map(cell => { 
    //       // {console.log('key', key);}
    //       return (
    //         <CellInput id= {key} maxlength = "1" type = 'text'/>
    //       )
    //     })})}
    //   </LargeGrid>
    // )


    // return(
    //   // <>
    //   <MasterGrid>
    //     {keys.forEach(key => { cells[key].map(cell => { 
    //       {console.log('key', key);}
    //       return (
    //         <LargeGrid>
    //           <SingleCell>
    //             help
    //             {/* <CellInput id= {key} maxlength = "1" type = 'text'/> */}
    //           </SingleCell>
    //         </LargeGrid>
    //       )
    //     })})}
    //   </MasterGrid>
    //   // </>
    // )


      // was an object, switching to an array
  // let cells = {};
  
  // for (let i=1; i<10; i++) {
  //   for (let j=1; j<10; j++) {
  //     cells[`r${i}c${j}`] = [['unknown', 'unknown', 'unknown','unknown', 'unknown', 'unknown','unknown', 'unknown', 'unknown']];
  //   }
  // }
  // console.log(cells);

  // let keys = Object.keys(cells);
  // console.log(keys);
