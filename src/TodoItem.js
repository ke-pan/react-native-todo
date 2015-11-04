var React = require('react-native')
var Dimensions = require('Dimensions')

var deviceWidth = Dimensions.get('window').width


var {
  Text,
  StyleSheet,
  Animated,
  PanResponder
} = React

module.exports = React.createClass({
  getInitialState: function() {
    return { pan: new Animated.Value(0) }
  },
  componentWillMount: function() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        this._highlight()
      },
      onPanResponderMove: (e, gestureState) => {this.state.pan.setValue(gestureState.dx)},
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dx > deviceWidth / 2) {
          this.props.onDeleteTodo(this.props.todo.id)
        }
        Animated.spring(this.state.pan, { toValue: 0 }).start()
      }
    })
  },
  _highlight: () => {},
  getStyle: function() {
    opacity = this.state.pan.interpolate({
      inputRange: [0, deviceWidth], 
      outputRange: [1, 0.2]
    })
    return [
      styles.todoItem,
      {
        opacity,
        transform: [
          {translateX: this.state.pan}
        ]
      }
    ]
  },
  render: function() {
    return (
      <Animated.View 
        style={this.getStyle()} 
        {...this._panResponder.panHandlers}
      >
        <Text style={styles.text}>{this.props.todo.text}</Text>
      </Animated.View>
    )
  }
})

var styles = StyleSheet.create({
  todoItem: {
    height: 58,
    marginTop: 2,
    paddingLeft: 5,
    backgroundColor: 'red',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 40,
  }
})
