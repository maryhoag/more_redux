import React, { Component } from 'react';
import { connect } from 'react-redux'

import {
	activateGeod,
	closeGeod
} from './redux'

import './App.css'


class Counter extends Component {

  //function declared
  acitvateLasers = () => {
  	console.log("boom")
  }
	
	render() {
		return (

			<div>
				<div className="buttonDiv">
					{/* button element and onClick in one line */}
					<button className="btn" onClick={this.acitvateLasers}>activateLasers</button>
				</div>
				<br />
				<div className="buttonDiv">
				<h1>{this.props.geod.title || 'why hello there'}</h1>
				{this.props.geod.title ?
					<button className="btn" onClick={this.props.closeGeod}>
						Exit geod
					</button> :
					<button onClick={() => this.props.activateGeod({ title: "boo"})}>
						Click here!
					</button>
				}
				</div>

			</div>
	)}
}


function mapStateToProps(state) {
	return {
		geod: state.geod
	}
}

const mapDispatchToProps = {
	activateGeod,
	closeGeod
}


/* connect the function to redux */
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter)

