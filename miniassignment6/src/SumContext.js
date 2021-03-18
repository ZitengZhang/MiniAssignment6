import {createContext, useReducer} from 'react';
import Dice from './Dice';
export const SumContext = createContext()
//export const DiceContext = createContext()

var x;

function randomNum(){
    return Math.floor(Math.random() * 6) + 1
}

function sumReducer(state, action) {
    x = randomNum();
    if (action.type === "ADD") {
        
        return {
            sum : state.sum + x,
            dices : [...state.dices, x]
        }
    } else if (action.type === "CLEAR") {
        return{
            sum : 0,
            dices: []
        }
    }
}



export function SumContextComponent(props) {

    const [sumState, sumDispatch] = useReducer(sumReducer, 
         { 
        sum:0,
        dices: [] 
    })
    //const [diceState,Dicedispatch] = useReducer(DiceReducer,0)
    
    return (
        <SumContext.Provider value={[sumState, sumDispatch]}>
            {props.children}
        </SumContext.Provider>
    )
} 
