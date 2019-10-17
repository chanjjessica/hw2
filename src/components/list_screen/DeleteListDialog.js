import React, {Component} from 'react';
// import "./css/todo_style.css";
// import "./css/todo_layout.css";


export class DeleteListDialog extends Component {


    render(){
        let dialog = (
            
            <div className='modal'>
                <div className='modal_dialog'>
                {this.props.children}
                </div>

            </div>

        );
        if (! this.props.isOpen) {
            dialog = null;
        }
        return(
            <div>
                {dialog}
            </div>

        );
    }


}

export default DeleteListDialog;