import React from 'react';
import { render } from 'react-dom'
import Counter from './Counter'
import { Provider } from 'react-redux'
import './index.css';
import { store } from './redux'








const App = () => (
	//holds the entire state via store
	<Provider store={store}>
		<Counter />

	</Provider>
)

render(<App />, document.getElementById('root'))

