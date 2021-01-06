import React from 'react';
import AddToDo from './components/addToDoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        {
          'id': 1,
          'title': 'Add something to Your list',
          'status': 'Done'
        },
        {
          'id': 2,
          'title': 'Just like this',
          'status': 'Pending'
        }
      ]
    };
  }

  deleteToDo(item) {
    let filteredItems = this.state.todoList.filter((listItem) => {
      return listItem.id !== item.id;
    });
    // console.log(filteredItems);
    this.setState({
      todoList: filteredItems
    });
  };

  editToDo(item) {
    this.setState({
      todoList: this.state.todoList.map((listItem) => {
        if (listItem.id === item.id) {
          return {
            ...listItem,
            status: item.status === "Done" ? "Pending" : "Done"
          };
        } else {
          return listItem;
        }
      })
    });
  };

  addNewToDo(entry) {
    console.log(entry);
    this.setState({
      todoList: [
        ...this.state.todoList,
        entry
      ]
    });
  }

  render() {
    return (
      <div className="App container-sm">
        <h1>To Do List</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todoList.map((todoItem) => {
              return (
                <tr key={todoItem.id}>
                  <td>{todoItem.id}</td>
                  <td>{todoItem.title}</td>
                  <td >{todoItem.status}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => this.deleteToDo(todoItem)}><i className="material-icons">delete</i></button> {todoItem.status === 'Done' ? '' : <button className="btn btn-sm" onClick={() => this.editToDo(todoItem)}><i className="material-icons">check</i></button>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <AddToDo
          lastId={this.state.todoList.length}
          onAdd={(event) => { this.addNewToDo(event) }}
        />
      </div>
    );
  }
}

export default App;
