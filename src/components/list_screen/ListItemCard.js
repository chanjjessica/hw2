import React, { Component } from 'react'
import moveUp from './MoveUp.png';
import moveDown from './MoveDown.png';
// import deleteItem from './Close.png';
// import { throwStatement } from '@babel/types';


export class ListItemCard extends Component {



    render() {
        return (
            <div className='list_item_card'  
             onClick={this.props.openEditItemScreen.bind(this, this.props.todoList, this.props.listItem)} 
            /* onClick={ (e) => console.log(this.props.listItem)} */

            >
                <div className='list_item_card_description'>
                    {this.props.listItem.description}
                </div>
                <div className='list_item_card_assigned_to'>
                    Assigned To: <strong>{this.props.listItem.assigned_to}</strong>
                </div>
                <div className='list_item_card_due_date'>
                    {this.props.listItem.due_date}
                </div>
                <div className='list_item_card_completed'>
                
                    {this.props.listItem.completed === true &&
                         <span>Completed</span>}

                </div>

                <div className = 'list_item_card_not_completed'>
                    {this.props.listItem.completed === false &&
                    <span>Pending</span>}
                </div>

                <div id="move_item_up_button"><img src={moveUp} alt="moveup"  
                    onClick={this.props.moveItemCardUp.bind(this, this.props.index)}
                    style={{backgroundColor : this.props.index===0 ?  'lightgray': "#669966" }}

                />
                        
                </div>
                <div id="move_item_down_button"><img src={moveDown} alt="movedown"  
                onClick={this.props.moveItemCardDown.bind(this, this.props.index)}
                style={{backgroundColor : this.props.index === this.props.todoList.items.length -1 ?  'lightgray': "#669966" }}


                />

                </div>
                <div id="delete_item_button" 
                onClick={this.props.deleteItemCard.bind(this, this.props.index)}
                >&#10005;

                </div>
            </div>
        )
    }
}

export default ListItemCard
