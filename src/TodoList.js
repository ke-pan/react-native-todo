var React = require('react-native')
var {
  ListView,
  Text,
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
      <Text style={styles.todoItem}>{todo}</Text>
    )
  },
  render: function() {
    return (
      <ListView
        dataSource={this.state.dataSource.cloneWithRows(this.props.todos)}
        renderRow={this.renderTodo} 
        style={styles.todoList}
      />
    )
  }
})

var styles = StyleSheet.create({
  todoItem: {
    height: 58,
    marginTop: 2,
    paddingLeft: 5,
    backgroundColor: 'red',
    fontSize: 40,
    alignItems: 'center',
    color: 'white'
  },
  todoList: {
    
  }
})