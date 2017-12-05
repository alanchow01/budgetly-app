import {createStore} from 'redux';

// action generators functions that return action objects

const incrementCount = ( {incrementBy = 1} = {} ) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ( {decrementBy = 1} = {} ) =>  ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({ type: 'RESET' });

const setCount = ( {setAmt} ) => ({
  type: 'SET',
  setAmt
});

// reducers
// qualities of reducers
// 1. reducers are pure functions
// 2. never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
    return {
      count: state.count + action.incrementBy
    };
    case 'DECREMENT':
    return {
      count: state.count - action.decrementBy
    };
    case 'SET':
    return {
      count: action.setAmt
    }
    case 'RESET':
    return {
      count: 0
    };
    default:
    return state;
  }
};
// this is a reducer
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}) );

store.dispatch(incrementCount() );

store.dispatch(resetCount() );

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({setAmt:-100}));
