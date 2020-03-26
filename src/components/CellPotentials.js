import React from 'react';
import styled from 'styled-components';


function CellPotentials({ cell }) {

  
  let cellPotentials = [];
  for (let i=1; i<10; i++){
    cellPotentials.push(cell[i]);
  }

  // console.log('potentials: ', cellPotentials);

  return(
    <MiniCell>
      {cellPotentials.map((number, index) => {
        { if (number === "unknown") {
            return (
              <Grey
              key = {`${cell[0]}${index+1}`}
              >{index+1}</Grey>
            )
          } else if (number === false) {
            return (
              <Red
              key = {`${cell[0]}${index+1}`}
              >{index+1}</Red>
            )
          } else {  // case true  if (number === true) 
            return (
              <Blue
              key = {`${cell[0]}${index+1}`}
              >{index+1}</Blue>
            )
          }
        }
      })}
    </MiniCell>
  )

  // The following removes the nested loop warning, but messes up many other functions as I did this after the fact
  // cellPotentials.map((number, index) => {
  //   if (number === "unknown") {
  //       return (
  //         <MiniCell>
  //           <Grey
  //           key = {`${cell[0]}${index+1}`}
  //           >{index+1}</Grey>
  //         </MiniCell>
  //       )
  //     } else if (number === false) {
  //       return (
  //         <MiniCell>
  //           <Red
  //           key = {`${cell[0]}${index+1}`}
  //           >{index+1}</Red>
  //         </MiniCell>
  //       )
  //     } else {  // case true  if (number === true) 
  //       return (
  //         <MiniCell>
  //           <Blue
  //           key = {`${cell[0]}${index+1}`}
  //           >{index+1}</Blue>
  //         </MiniCell>
  //       )
  //     }
  // })
}


const MiniCell = styled.div`
width: 25px;
height: 25px;
text-align: center;
display: grid;
grid-template-columns: repeat(3, 1fr);
margin: 0;
padding: 0;
`
const Red = styled.p`
  font-size: 10px;
  color: red;
  margin: 0;
  padding: 0;
`
const Grey = styled.p`
  font-size: 10px;
  color: grey;
  margin: 0;
  padding: 0;
`
const Blue = styled.p`
  font-size: 10px;
  color: blue;
  font-weight: bold;
  margin: 0;
  padding: 0;
`

export default CellPotentials;