import React, { Component } from 'react';
import testTodoListData from './TestTodoListData.json'
import HomeScreen from './components/home_screen/HomeScreen'
import ItemScreen from './components/item_screen/ItemScreen'
import ListScreen from './components/list_screen/ListScreen'
// import DeleteListDialog from './components/list_screen/DeleteListDialog'


const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  LIST_SCREEN: "LIST_SCREEN",
  ITEM_SCREEN: "ITEM_SCREEN"
}

class App extends Component {
  state = {
    currentScreen: AppScreen.HOME_SCREEN,
    todoLists: testTodoListData.todoLists,
    currentList: null,
    // trash:false
    currentItem: null
  }


  goHome = () => {
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
    this.setState({currentList: null});

  }

  loadList = (todoListToLoad) => {
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
    this.setState({currentList: todoListToLoad});
    this.state.currentList = todoListToLoad;

    // Put the recently loaded list on top
    var loadedListonTop = []; // make a new array of lists
    for(let i = 0; i < this.state.todoLists.length;i++){
      if(this.state.todoLists[i].key < todoListToLoad.key){ //update keys before current list key
        this.state.todoLists[i].key++;
      }
   }
   todoListToLoad.key = 0; //move current list on top
    for(var i = 0; i < this.state.todoLists.length; i++){
      loadedListonTop[this.state.todoLists[i].key] = this.state.todoLists[i];
    }
    this.setState({
      todoLists: loadedListonTop // replace old list
    })


    console.log("currentList: " + this.state.currentList);
    console.log("currentScreen: " + this.state.currentScreen);
  }
  openNewItemScreen = (currentlist) => {
    this.setState({currentScreen: AppScreen.ITEM_SCREEN});
    this.setState({currentList: currentlist});

;    // this.setState({currentList: todoListToLoad}); //keep the current list
  }

  openEditItemScreen = (currentlist, currentItem) => {
    console.log(currentItem)
    this.setState({currentScreen: AppScreen.ITEM_SCREEN});
    this.setState({currentList: currentlist});
    this.setState({currentItem: currentItem});


    

  }
closeItemScreen = () => {
  this.setState({currentScreen: AppScreen.LIST_SCREEN});
  this.setState({currentItem: null});

}

  deleteList = (key) => {
    // console.log(key);
    this.setState({todoLists: [...this.state.todoLists.filter(currentList => currentList.key !== key)]});
    // this.setState({todolists: this.state.todoLists.map(todoList =>{
    let count = this.state.currentList.key;
    for (let i = 0; i < this.state.todoLists.length; i++ ){
      if (this.state.todoLists[i].key > this.state.currentList.key){
        this.state.todoLists[i].key = count;
        count = count + 1;
      }
    }
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
    this.setState({currentList: null});
  }


  createNewList = () => {
    const newList = {
      'key': this.state.todoLists.length,
      'name': "Unknown",
      'owner': "Unknown",
      "items":[]
    };
    this.setState({ todoLists: [newList, ...this.state.todoLists, ]});
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
    this.setState({currentList: newList});
    
  }
  editItem = () => {
    this.setState({currentScreen: AppScreen.ITEM_SCREEN});
    //keep the same current list --> do not change current_list

  }

  render() {
    switch(this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen 
        loadList={this.loadList.bind(this)} 
        todoLists={this.state.todoLists} 
        createNewList={this.createNewList.bind(this)}
        />;
      case AppScreen.LIST_SCREEN:            
        return <ListScreen
          goHome={this.goHome.bind(this)}
          todoList={this.state.currentList}  
          deleteList={this.deleteList}
          loadList={this.loadList.bind(this)} 
          openNewItemScreen={this.openNewItemScreen}
          closeItemScreen={this.closeItemScreen.bind(this)}
          openEditItemScreen={this.openEditItemScreen}

          />
          
          ;

      case AppScreen.ITEM_SCREEN:
        return <ItemScreen 
        currentList={this.state.currentList}  
        closeItemScreen={this.closeItemScreen.bind(this)}
        item={this.state.currentItem}

      
        />;
      default:
        return <div>ERROR</div>;
    }
  }
}

export default App;
