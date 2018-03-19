import {
	applyMiddleware,
	combineReducers,
	createStore
} from 'redux'


//actions.js
export const activateGeod = geod => ({
	type: 'ACTIVATE_GEOD',
	geod
})

export const closeGeod = () => ({
	type: 'CLOSE_GEOD'
})

//reducers.js
export const geod = (state = {}, action) => {
	switch (action.type) {
		case 'ACTIVATE_GEOD':
			return action.geod
		case 'CLOSE_GEOD':
			return {}
		default: 
			return state
	}
}

const initialState = {
	count: 0
}

//reducers take current state + action and return updated state
function counting (state = initialState, action) {
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

export const reducers = combineReducers({
	geod,
	counting
})

export function configureStore(initialState = {}) {
	const store = createStore(reducers, initialState)
	return store
}

export const store = configureStore()



