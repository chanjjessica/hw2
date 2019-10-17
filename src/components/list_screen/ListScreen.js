import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'
// import DeleteListDialog from './DeleteListDialog'
import AddItem from './AddItem.png';

// import PropTypes from 'prop-types';
// import { thisExpression } from '@babel/types';
// import { timingSafeEqual } from 'crypto';

export class ListScreen extends Component {
    state = {
        vis: false
    }

    showDialog = () => {
        // console.log(this.state.vis);
        this.setState({vis:true});
        // console.log(this.state.vis)
        // this.todoList.setState({className: 'cannotClick'});
        // let dialog = document.getElementsByClassName("modal");
        // dialog.style.visibility = 'visible';
    }
    hideDialog=()=>{
        this.setState({vis:false});
    }    
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

        if (event.target.value.trim()==="" || event.target.value===""){
            this.props.todoList.name = "Unknown";
        }
        else{
        this.props.todoList.name = event.target.value;
        }
    }
    setListOwner(event){
        if (event.target.value.trim()==="" || event.target.value==="") {
            this.props.todoList.owner = "Unknown";
        }
        else{
            this.props.todoList.owner = event.target.value;
        }
    }
    processAddItem = () => {
        // let listBeingEdited = this.props.todoList;
        // let item = listBeingEdited.items[index];
        // Set up the dialog
        // window.alert("hi");
        // document.getElementById("item_description_textfield").value = "";
        // document.getElementById("item_assigned_to_textfield").value = "";
        // document.getElementById("item_due_date_picker").value = "";
        // document.getElementById("item_completed_checkbox").checked = false;
        // document.getElementById(TodoGUIId.EDITCHECKBOX).checked = false;
        // document.getElementById().setAttribute("value", index);
    }

    render() {
        const Visible = this.state.vis ? 'modal is_visible' : 'modal';
        return (
            
            <div id="todo_list">
                <div className={Visible} data-animation="slideInOutLeft" 
                /* style={{visibility: this.state.vis ? 'visible' : 'hidden' }}  */
                >
                        <div className="modal_dialog">
                            <header className="dialog_header">
                                Delete list?
                            </header>
                            <section className="dialog_content">
                                <p><strong>Are you sure you want to delete this list?</strong></p>
                            </section>
                                <button id="dialog_yes_button" onClick={this.props.deleteList.bind(this, this.props.todoList.key)}>Yes</button>
                                <button id="dialog_no_button" onClick={this.hideDialog}>No </button>
                            <footer className="dialog_footer">
                                The list will not be retrievable.
                            </footer>
                        </div>
                    </div>
                <ListHeading goHome={this.props.goHome} />
                <ListTrash 
                showDialog={this.showDialog.bind(this)}
                />


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
                <ListItemsTable todoList={this.props.todoList} openNewItemScreen={this.props.openNewItemScreen} openEditItemScreen={this.props.openEditItemScreen}/>
                <div className= "list_item_add_card">
             <input type="image" src={AddItem} alt='additem'
             onClick={this.props.openNewItemScreen.bind(this, this.props.todoList)}
             />
             

             
        </div>



            </div>
        )
    }
}

// ListScreen.propTypes = {
//     currentScreen: PropTypes.string.isRequired,
//     todoItem: PropTypes.object.isRequired
// }

export default ListScreen
