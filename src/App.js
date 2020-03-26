// To do: make the game playable?
// fix solver
// display for completed game

import React, { useState} from 'react';

import styled from 'styled-components';

import GridMaker from './components/gridMaker'
import {
  generateIntialCellsArray,
  confirmInputs,
  testEasy,
  testMedium,
  testHard,
  testVeryHard,
  testChallenge,
  testExtreme,
  testEpic,
  addKnowns,
  testForKnowns,
  testCols,
  testRows,
  testBlocks,
  testLinkedPairs,
  bruteForce,
  solve,
  // bruteSolve,
  guessAndBruteSolve,
  resetEverything
} from './components/functions'

// const [noContradiction, setNoContradiction] = useState(true);
// export {noContradiction};

function App() {

  const [cells, setCells] = useState(generateIntialCellsArray());
  const [inputted, setInputted] = useState(false);
  const [functionOngoing, setfunctionOngoing] = useState(false);
  const [lastTested, setLastTested] = useState(false);
  const [hasChanged, setHasChanged] = useState(true);
  const [noContradiction, setNoContradiction] = useState(true);
  const [solved, setSolved] = useState(false);
  const [playing, setPlaying] = useState(true);

 
  return(
    <Wrapper>
      <GridMaker
        cells = {cells}
        setCells = {setCells}
        inputted = {inputted}
        playing = {playing}
        setfunctionOngoing = {setfunctionOngoing} 
        setLastTested = {setLastTested}
        setNoContradiction = {setNoContradiction}
        setSolved = {setSolved}
        noContradiction = {noContradiction}
      />
      {inputted === false ? (
        <ButtonWrapper>
          <Button 
          onClick = {() => confirmInputs(setfunctionOngoing, setCells, cells, setInputted, setNoContradiction)}
          >
            Set Initial Values
          </Button>
          <Button 
          onClick = {() => testEasy(setCells, cells, setInputted, setfunctionOngoing, setNoContradiction)}
          >
            Very Easy Test
          </Button>
          <Button 
          onClick = {() => testMedium(setCells, cells, setInputted, setfunctionOngoing, setNoContradiction)}
          >
            Medium Test
          </Button>
          <Button 
          onClick = {() => testHard(setCells, cells, setInputted, setfunctionOngoing, setNoContradiction)}
          >
            Hard Test
          </Button>
          <Button 
          onClick = {() => testVeryHard(setCells, cells, setInputted, setfunctionOngoing, setNoContradiction)}
          >
            Very Hard Test
          </Button>
          <Button 
          onClick = {() => testChallenge(setCells, cells, setInputted, setfunctionOngoing, setNoContradiction)}
          >
            Challenge Test
          </Button>
          <Button 
          onClick = {() => testExtreme(setCells, cells, setInputted, setfunctionOngoing, setNoContradiction)}
          >
            Extreme Test
          </Button>
          <Button 
          onClick = {() => testEpic(setCells, cells, setInputted, setfunctionOngoing, setNoContradiction)}
          >
            Epic Test
          </Button>
        </ButtonWrapper>
      ) : (
        playing === true ? (
          <Button onClick = {() => setPlaying(false)} disabled = {lastTested}>
            HELP
          </Button>
        ) : (
          <>
            <ButtonWrapper>
              <Button onClick = {() => setPlaying(true)} disabled = {lastTested}>
                Switch to Play
              </Button>
              <Button onClick = {() => addKnowns(setfunctionOngoing, cells, setCells, setLastTested, setNoContradiction, setSolved)} disabled = {!lastTested}>
                {hasChanged === true ? ( 
                  'Add New Knowns'
                ) : (
                  'Next Test'
                )
                }
              </Button>
              <Button onClick = {() => testForKnowns(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells)} disabled = {lastTested}>
                Test Nake Singles
              </Button>
              <Button onClick = {() => testCols(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells)} disabled = {lastTested}>
                Test Columns
              </Button>
              <Button onClick = {() => testRows(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells)} disabled = {lastTested}>
                Test Rows
              </Button>
              <Button onClick = {() => testBlocks(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells)} disabled = {lastTested}>
                Test Blocks
              </Button>
              <Button onClick = {() => testLinkedPairs(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells)} disabled = {lastTested}>
                Test for Naked Pairs
              </Button>
              <Button onClick = {() => bruteForce(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved)} disabled = {lastTested}>
                BRUTE FORCE FOR PROGRESS
              </Button>
            </ButtonWrapper>
          </>
      ))}
        
        <ButtonWrapper>
          <Button 
          onClick = {() => resetEverything(setHasChanged, setfunctionOngoing, setCells, setInputted, setLastTested, setNoContradiction, setSolved, cells, setPlaying)} disabled = {functionOngoing}
          >
            RESET
          </Button>
          {inputted ? (
            <>
              <Button 
              disabled = {!inputted}
              onClick = {() => solve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved)} disabled = {functionOngoing}
              >
                SOLVE w/ simple logic
              </Button>
              <Button 
              onClick = {() => guessAndBruteSolve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved, solved, hasChanged)} disabled = {functionOngoing}
              // onClick = {() => bruteSolve(setLastTested, setfunctionOngoing, setHasChanged, cells, setCells, setNoContradiction, setSolved, solved, hasChanged)} disabled = {functionOngoing}
              >
                SOLVE w/ brute
              </Button>
            </>
          ) : (null)
          }
        </ButtonWrapper>

        
        {hasChanged ? (
          <ChangedWrapper>
            NEW INFO
            <Changed>
              ✓
            </Changed>
          </ChangedWrapper>
        ) : (
          <NotChangedWrapper>
            NOTHING NEW
            <NotChanged>
              ✖︎
            </NotChanged>
          </NotChangedWrapper>
        )}
        {noContradiction ? (
          <ChangedWrapper>
            NO ISSUES
            <Changed>
              ✓
            </Changed>
          </ChangedWrapper>
        ) : (
          <NotChangedContradictionWrapper>
            <p>!!!</p>
            <p>CONTRADICTION</p>
            <p>!!!</p>
            <NotChangedContradiction>
              ✖︎
            </NotChangedContradiction>
            <p>NO</p>
            <p>POSSIBLE</p>
            <p>SOLUTION</p>
          </NotChangedContradictionWrapper>
        )}
        {solved ? (
          <ChangedWrapper>
            PUZZLE SOLVED
            <Changed>
              ✓
            </Changed>
          </ChangedWrapper>
        ) : (
          <NotChangedWrapper>
            NOT SOLVED
            <NotChanged>
              ✖︎
            </NotChanged>
          </NotChangedWrapper>
        )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 25px;
  display: flex;
  flex-direction: row;
  justify-content: left;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  margin-left: 25px;
  margin-bottom: 25px;
  width: 100px;
  min-width: 100px;
  height: 30px;
  background-color: lightblue;
  &:hover {
    cursor: pointer;
    background-color: royalblue;
    color: white;
    transform: scale(1.2);
  }
`
const ChangedWrapper = styled.div`
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  color: lime;
  text-align: center;
`

const NotChangedContradictionWrapper = styled.div`
margin-left: 25px;
display: flex;
flex-direction: column;
color: red;
text-align: center;
`

  const NotChangedWrapper = styled.div`
  margin-left: 25px;
  display: flex;
  flex-direction: column;
  color: purple;
  text-align: center;
`
// const Contradiction = styled.div`
// position: absolute;
// z-index: 1;
// top: 75px;
// left: 225px;
// margin-left: 25px;
// display: flex;
// flex-direction: column;
// color: red;
// text-align: center;
// `

const Changed = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  border: 10px solid lime;
  border-radius: 10px;
  color: lime;
  font-size: 75px;
  font-weight: bold;
  height: 100px;
  width: 100px;
`

const NotChangedContradiction = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  border: 10px solid red;
  border-radius: 10px;
  color: red;
  font-size: 75px;
  font-weight: bold;
  height: 100px;
  width: 100px;
`
const NotChanged = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  border: 10px solid purple;
  border-radius: 10px;
  color: purple;
  font-size: 75px;
  font-weight: bold;
  height: 100px;
  width: 100px;
`

export default App;