import React, { Component } from 'react'
// import PropTypes from 'prop-types';


export class ListTrash extends Component {

    render() {
        return (
            <div id="list_trash"   
            //onClick= {this.props.changeTrashState}
            // onClick = {(e) => this.props.setState({isOpen:true})}
             onClick={this.props.showDialog}
            >&#128465;
            {/* {this.props.todoList.items}<br /> */}
            </div>
            
        )
    }
}

// ListTrash.propTypes = {
//     todoList: PropTypes.object.isRequired
// }

export default ListTrash
