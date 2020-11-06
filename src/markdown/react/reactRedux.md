# React-Redux
React State Manager, useful for large scale projects

## Library
```
npm install redux react-redux
```

## `index.js`
```jsx
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
```

## ACTION
```jsx
const action1 = (num) =>{
    return {
        type: "ACTION1",
        payload: num
    }
}
const action2 = () =>{
    return {
        type: "ACTION2"
    }
}
```

## REDUCER
```jsx
const initialState = INITIAL_STATE
const reducer1 = (state=initialState, action) =>{
    switch (action.type){
        case 'ACTION1':
            return changeState1;
        case 'ACTION2':
            return changeState2;
        default:
            return state;
    }
})

const reducer2 = (state=initialState2, action) =>{
    switch (action.type){
        case 'ACTION3':
            return changeState3;
        case 'ACTION4':
            return changeState4;
        default:
            return state;
    }
})

// Combine reducer
const allReducers = combineReducers({
    redu1: reducer1,
    redu2: reducer2
})
```

## STORE
```jsx
import { createStore, combineReducers } from 'redux' 
// Single reducer
let store = createStore(reducer1)
// Combine reducer
let store = createStore(allReducers)
``` 
## DISPATCH
```jsx
store.dispatch(action1())
``` 

## Access state 
```jsx
import { useSelector, useDispatch } from 'react-redux';
function Dummy(){
    const redu1 = useSelector(state => state.redu1);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{redu1}</h1>
            <button onClick={() => dispatch(action1(10))}>Click</button>
        </div>
    )
}
```

## Console
```jsx
store.subscribe(() => console.log(store.getState()))
``` 

