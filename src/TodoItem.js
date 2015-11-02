var React = require('react-native')

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
    this._animatedValueX = 0
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setOffset(this._animatedValueX)
        this.state.pan.setValue(0)
        this._highlight()
      },
      onPanResponderMove: (e, gestureState) => {this.state.pan.setValue(gestureState.dx)},
      onPanResponderRelease: () => {
        Animated.spring(this.state.pan, { toValue: 0 }).start()
      }
    })
  },
  _highlight: () => {},
  getStyle: function() {
    return [
      styles.todoItem,
      {
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
        <Text>{this.props.todo}</Text>
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
    fontSize: 40,
    alignItems: 'center',
    color: 'white'
  }
})
