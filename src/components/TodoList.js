import React from "react";
import "../css/TodoList.css";
import Todo from "./Todo";

const dummyData = ["Clean Room", "Laundry", "Grocery Store"];

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: dummyData,
      input: "",
    };

    this.addItem = this.addItem.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.deleteItem = this.deleteItem.bind(this)
  }

  addItem(event) {
    event.preventDefault();
    if (this.state.input.length > 0) {
      this.setState({
        items: [...this.state.items, this.state.input],
        input: "",
      });
    }
  }

  changeHandler(event) {
    this.setState({ input: event.target.value });
  }

  deleteItem(index) {
    this.setState({items: this.state.items.filter((item, idx) => idx !== index)})
  }

  render() {
    return (
      <div className="todo-list-main">
        <div className="header">
          <p>{this.props.text}</p>
          <form onSubmit={this.addItem}>
            <input
              onChange={this.changeHandler}
              value={this.state.input}
              placeholder="enter task"
            ></input>
            <button type="submit">add</button>
          </form>
          <ul>
            {this.state.items.map((item, idx) => (
              <Todo key={idx} idx={idx} item={item} deleteItem={this.deleteItem}/>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
