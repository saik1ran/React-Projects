import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
    <h2>
        How to Play Dice Game
    </h2>
    <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on dice if selected number is equal to dice number you will get same point as dice{" "}
        </p>
        <p>If you guess wrong then 2 points will be deducted</p>
    </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
max-width: 800px;
margin: 0 auto;
background-color: coral;
padding: 20px;
margin-top: 40px;
border-radius: 10px;
h2{
    font-size: 24px;

}
.text{
    margin-top: 24px;
}
`;