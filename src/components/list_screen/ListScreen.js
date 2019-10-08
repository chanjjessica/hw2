import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'
import PropTypes from 'prop-types';
// import { thisExpression } from '@babel/types';
// import { timingSafeEqual } from 'crypto';

export class ListScreen extends Component {
    getListName() {
        if (this.props.todoList) {
            let name = this.props.todoList.name;
            // return this.props.todoList.name;
            return name;
        }
        else
            return "";
    }
    getListOwner() {
        if (this.props.todoList) {
            let owner = this.props.todoList.owner;
            // return this.props.todoList.owner;
            return owner;
        }
    }
    setListName(event){

        if (event.target.value.trim()=="" || event.target.value==""){
            this.props.todoList.name = "Unknown";
        }
        else{
        this.props.todoList.name = event.target.value;
        }
        
        // this.setState({name: event.target.name})
    }
    setListOwner(event){
        if (event.target.value.trim()=="" || event.target.value=="") {
            this.props.todoList.owner = "Unknown";
        }
        else{
            this.props.todoList.owner = event.target.value;
        }
    }    
    render() {
        return (
            <div id="todo_list">
                <ListHeading goHome={this.props.goHome} />
                <ListTrash />
                <div id="list_details_container">
                    <div id="list_details_name_container" className="text_toolbar">
                        <span id="list_name_prompt">Name:</span>
                        <input 
                            defaultValue={this.getListName()} 
                            type="text" 
                            id="list_name_textfield" 
                            onChange= {(e) => this.setListName(e)}/>
                    </div>
                    <div id="list_details_owner_container" className="text_toolbar">
                        <span id="list_owner_prompt">Owner:</span>
                        <input 
                            defaultValue={this.getListOwner()}
                            type="text" 
                            id="list_owner_textfield" 
                            onChange= {(e) => this.setListOwner(e)}/>
                    </div>
                </div>
                <ListItemsTable todoList={this.props.todoList} />
            </div>
        )
    }
}

// ListScreen.propTypes = {
//     currentScreen: PropTypes.string.isRequired,
//     todoItem: PropTypes.object.isRequired
// }

export default ListScreen
