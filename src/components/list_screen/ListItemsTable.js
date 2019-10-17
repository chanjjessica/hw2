import React, { Component } from 'react'
import ListItemCard from './ListItemCard'

export class ListItemsTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            increase_task_sorted: false,
            increase_due_date_sorted: false,
            increase_completed_sorted: false
        };
    }

    moveItemCardUp = (index, e) => {
        e.stopPropagation();
        // console.log(index);
        let listBeingEdited = this.props.todoList;
        // console.log(listBeingEdited.items[index]);
        let a = index -1;
        if (index > 0){
            let b = listBeingEdited.items[a]
            let c = listBeingEdited.items[index];
            listBeingEdited.items[a] = c;
            listBeingEdited.items[index] = b;
            this.forceUpdate();
        }
    }

    moveItemCardDown = (index, e) =>{
        e.stopPropagation();

        // window.alert(index);
        let listBeingEdited = this.props.todoList;
        // let listBeingEdited = window.todo.model.listToEdit;
        let a = parseInt(index)+1;
        // window.alert(a);
        // window.alert(this.getNumItems());
        if (a < listBeingEdited.items.length){
            let b = listBeingEdited.items[a]
            let c = listBeingEdited.items[index];
            listBeingEdited.items[index] = b;
            listBeingEdited.items[a] = c;
            this.forceUpdate();

        }
        
    }

    deleteItemCard = (index, e) => {
        e.stopPropagation();
        let listBeingEdited = this.props.todoList;
        listBeingEdited.items.splice(index, 1);
        this.forceUpdate();


    }

    sortTasks = () => {
        if (this.state.increase_task_sorted === false){
        var sorted = this.props.todoList.items;
        sorted.sort((a,b) => {
            return a.description > b.description;
        });
        this.props.todoList.items = sorted;
        this.state.increase_task_sorted = true;
        this.setState({items:sorted});
        }
        else{
            var sorted = this.props.todoList.items;
            // this.props.todoList.items = sorted.reverse();
            sorted.sort((a,b) => {
                return a.description < b.description;
            });
            this.state.increase_task_sorted = false;
            this.setState({items:sorted});
        }
    }

    sortDueDates = () => {
        if (this.state.increase_due_date_sorted === false){
            var sorted = this.props.todoList.items;
            sorted.sort((a,b) => {
                return a.due_date > b.due_date
            });
            this.props.todoList.items = sorted;
            this.state.increase_due_date_sorted = true;
            this.setState({items:sorted});
            }
            else{
                var sorted = this.props.todoList.items;
                // this.props.todoList.items = sorted.reverse();
                sorted.sort((a,b) => {
                    return a.due_date < b.due_date
                });
                this.state.increase_due_date_sorted = false;
                this.setState({items:sorted});
            }
    }

    sortCompleted = () => {
        if (this.state.increase_completed_sorted === false){
        var sorted = this.props.todoList.items;
        sorted.sort((a,b) => {
            return (a.completed === b.completed)? 0: a? -1 : 1;
        });
        this.props.todoList.items = sorted;
        this.state.increase_completed_sorted = true;
        this.setState({items:sorted});
        }
        else{
            var sorted = this.props.todoList.items;
            // this.props.todoList.items = sorted.reverse();
            sorted.sort((a,b) => {
                return (a.completed === b.completed)? 0: a? 1 : -1;
            });
            this.setState({items:sorted});
        }
    }


    render() {
        return (
            <div id="list_items_container">
                <div className= "list_item_header_card"> 
                <div className="list_item_task_header" onClick={this.sortTasks}>Task</div>
                <div className="list_item_due_date_header" onClick={this.sortDueDates}>Due Date</div>
                <div className="list_item_status_header" onClick={this.sortCompleted}>Status</div>
                </div>
                {
                    this.props.todoList.items.map((todoItem, index)=>(
                        <ListItemCard 
                            openNewItemScreen={this.props.openNewItemScreen}
                            openEditItemScreen={this.props.openEditItemScreen}
                            todoList={this.props.todoList}
                            index = {index}
                            key={todoItem.key}
                            listItem={todoItem} 
                            moveItemCardUp={this.moveItemCardUp}
                            moveItemCardDown={this.moveItemCardDown}
                            deleteItemCard={this.deleteItemCard}
                            />
                    ))
                }
            </div>
            
        )
    }
}

export default ListItemsTable
