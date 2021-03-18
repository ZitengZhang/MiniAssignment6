import React from 'react';
import './index.css';



export default class Dice extends React.Component{

        constructor(props){
            super(props)
            console.log("The dice number is "+ props.num)
        }


        render(){
            return(
            <div className="dice"
                 
                >{this.props.num}
            </div>
            )
        }



}