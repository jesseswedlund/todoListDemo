import React from "react";
import "../css/TodoList.css";

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

  render() {
    console.log(this.state.items);
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
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoList;
