import React, { Component } from 'react';
import { connect } from 'react-redux'

class Counter extends Component { 

	decrement = () => {
		//this is the action 
		//dispatch is made available through connect
		this.props.dispatch({ type: 'DECREMENT' })
	}

	increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }
  //function declared
  acitvateLasers = () => {
  	console.log("boom")
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
				<br />
				<div>
					//button element and onClick in one line
					<button onClick={this.acitvateLasers}>activate lasers</button>
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


//connet the function to redux
export default connect(mapStateToProps)(Counter)

