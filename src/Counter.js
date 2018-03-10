import React, { Component } from 'react';
import { connect } from 'react-redux'

class Counter extends Component { 

	decrement = () => {
		this.props.dispatch({ type: 'DECREMENT' })
	}

	increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }
	
	render() {
		return (

			<div>
				<h2>Counter</h2>
				<div>
					<button onClick={this.decrement}>-</button>
					<span>{this.props.count}</span>
					<button onClick={this.increment}>+</button>
				</div>
			</div>
		)
	}
}


function mapStateToProps(state) {
	return {
		count: state.count
	}
}

export default connect(mapStateToProps)(Counter)

