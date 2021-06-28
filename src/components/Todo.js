import React from "react"
import "../css/Todo.css"

class Todo extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
          completed: false
      }

      this.toggleTodo = this.toggleTodo.bind(this)
  }
  
  toggleTodo() {
      this.setState({ completed: !this.state.completed})
  }
  
  render() {
      return(
          <div className="list-item-box">
              <li className={this.state.completed ? "todo-completed" : "todo"}>{this.props.item}</li>
              <div>
                <button type="button" onClick={this.toggleTodo}>complete</button>
                <button type="button" onClick={() => this.props.deleteItem(this.props.idx)}>delete</button>
              </div>
          </div>
      )
  }
}

export default Todo