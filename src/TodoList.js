var TodoItem = require('./TodoItem') 
var React = require('react-native')
var {
  ListView,
  StyleSheet
} = React

module.exports = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    }
  },
  renderTodo: function(todo) {
    return (
      <TodoItem onDeleteTodo={this.props.onDeleteTodo} todo={todo}/>
    )
  },
  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource.cloneWithRows(this.props.todos)}
        renderRow={this.renderTodo}
        scrollEnabled={false}
        style={styles.todoList}
      />
    )
  }
})

var styles = StyleSheet.create({
  todoList: {
    
  }
})