



import React, {useContext } from 'react';
import Dice from './Dice'
import { SumContext} from './SumContext';





export default function(props) {
    

    const [sum, dispatch] = useContext(SumContext)
    
    
    return (
        <div>
            
            <button onClick={() => dispatch({type: "ADD"})}>Roll Dice</button>
            <button onClick={() => dispatch({type: "CLEAR"})}>Clear Dice</button>
            <h1 >Sum:{sum.sum} </h1>
            <div className= "diceHolder">
            {sum.dices.map((diceNumber) => {
                return <Dice num={diceNumber} />
            })}
                
            </div>
        </div>
    )
}