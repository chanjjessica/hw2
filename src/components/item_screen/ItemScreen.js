import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ItemScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description:this.props.item ? this.props.item.description : "",
            due_date: this.props.item ? this.props.item.due_date : "",
            assigned_to:this.props.item ? this.props.item.assigned_to : "",
            completed: this.props.item && this.props.item.completed ? true: false,
            editing: this.props.item ? true : false
        }
    }


    addItem = (description, due_date, assigned_to, completed) => {

        var items = this.props.currentList.items;
        description = this.state.description;
        due_date = this.state.due_date;
        assigned_to = this.state.assigned_to;
        completed = this.state.completed;
        const newItem = {
            "description": description,
            "due_date": due_date,
            "assigned_to": assigned_to,
            "completed": completed,
            "new_item": true,
            'key': this.props.currentList.items.length

        }
        if (this.state.description === ''){
            // this.props.closeItemScreen();
        }
        else{
            items.push(newItem);
            this.props.currentList.items = items;
            this.props.closeItemScreen();
        }
        

    }

    editItem = () => {
        var items = this.props.currentList.items;

        const item = {
            'key':this.props.currentList.items.length,
            'description': this.state.description,
            'assigned_to': this.state.assigned_to,
            'due_date': this.state.due_date,
            'completed': this.state.completed
            
        }
        if (this.state.description === ''){
            // this.props.closeItemScreen();
        }
        else {
            for (var i = 0; i<this.props.currentList.items.length; i++){
                if (items[i].key === this.props.item.key) {
                    var oldKey = this.props.item.key;
                    items[i] = item;
                    items[i].key = oldKey;
                }
            }
            this.props.currentList.items = items;
            this.props.closeItemScreen();
        }
    }

    descriptionInput = (event) => {
        this.setState({description: event.target.value});
    }

    dueDateInput = (event) => {
        this.setState({due_date: event.target.value});
    }

    assignedToInput = (event) => {
        this.setState({assigned_to: event.target.value});
    }
    
    completedInput = (event) => {
        this.setState({completed: event.target.checked});
    }

    render() {
        return (
            <div id="todo_item">
                <h3 id="item_heading">Item</h3>
                <div id="item_form_container">
                    <div id="item_description_prompt" className="item_prompt">Description:</div>
                    <input id="item_description_textfield" className="item_input"
                            defaultValue={this.state.description}
                            type="text" 
                            onChange= {this.descriptionInput}
                    />
                    <div id="item_assigned_to_prompt" className="item_prompt">Assigned To:</div>
                    <input id="item_assigned_to_textfield" className="item_input"  
                            defaultValue={this.state.assigned_to} 
                            type="text" 
                            onChange= {this.assignedToInput}
                    />
                    <div id="item_due_date_prompt" className="item_prompt">Due Date:</div>
                    <input id="item_due_date_picker" className="item_input" type="date" 
                            defaultValue={this.state.due_date} 
                            onChange= {this.dueDateInput}
                    />
                    <div id="item_completed_prompt" className="item_prompt">Completed:</div>
                    <input id="item_completed_checkbox" className="item_input" type="checkbox" 
                            defaultChecked={this.state.completed}
                            onChange= {this.completedInput}
                    />
                </div>
                <button id="item_form_submit_button" className="item_button" onClick={this.state.editing ? this.editItem : this.addItem.bind(this.descriptionInput, this.dueDateInput, this.assignedToInput, this.completedInput)}>Submit</button>
                <button id="item_form_cancel_button" className="item_button" onClick={this.props.closeItemScreen}>Cancel</button>
            </div>
        )
    }
}

ItemScreen.propTypes = {
    currentScreen: PropTypes.string.isRequired,
    todoItem: PropTypes.object.isRequired
}

export default ItemScreen
