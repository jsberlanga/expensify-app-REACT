import { createStore } from 'redux';

// Action generators are functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

// Reducers
// 1. Reducers must be pure functions
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: action.count = 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// Actions are objects that get sent to the store

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 50 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 20 }));

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({ count: 102 }));