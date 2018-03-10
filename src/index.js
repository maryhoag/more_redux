import React from 'react';
import { render } from 'react-dom'
import Counter from './Counter'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css';



const initialState = {
	count: 0
}
//reducers take current state + action and return updated state
function reducer (state = initialState, action) {
	//
	switch(action.type) {
		case 'INCREMENT':
			return {
				//returns new state not changed state
				count: state.count + 1
			}
		case 'DECREMENT':
			return {
				count: state.count - 1
			}
		//fallback 
		default:
			return state
	}
}

const store = createStore(reducer)

const App = () => (
	//holds the entire state via store
	<Provider store={store}>
		<Counter />

	</Provider>
)

render(<App />, document.getElementById('root'))