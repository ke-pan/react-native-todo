var React = require('react-native');
var {
  View,
  TextInput,
  StyleSheet,
} = React;

module.exports = React.createClass({
  getInitialState: function() {
    return {text: ''}
  },
  handleSubmit: function(e) {
    this.props.onNewTodo(e.nativeEvent.text)
    this.setState({text: ''})
  },
  render: function() {
    return(
        <TextInput 
          style={styles.input}
          placeholder="New Todo"
          onSubmitEditing={this.handleSubmit}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
    )
  }
})

var styles = StyleSheet.create({
  input: {
    height: 60, 
    borderColor: 'gray', 
    borderWidth: 1
  }
})