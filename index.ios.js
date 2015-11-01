/**
 * React Native Clear
 * 
 */
'use strict';

var NewTodo = require('./src/NewTodo')
var TodoList = require('./src/TodoList')

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  View,
} = React;

var RNProj = React.createClass({
  getInitialState: function() {
    return { todos: [] }
  },
  handleNewTodo: function(text) {
    var todos = this.state.todos
    todos.push(text)
    this.setState(
      { todos }
    )
  },
  render: function() {
    return(
      <View style={styles.container}>
        <NewTodo onNewTodo={this.handleNewTodo}/>
        <TodoList todos={this.state.todos}/>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('RNProj', () => RNProj);
