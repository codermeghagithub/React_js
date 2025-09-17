## function reducer(state, action) { ... }

* function → Defines a new function.

* reducer → The name of the function. By convention, we call it reducer because it reduces state transitions (like in Redux).

* (state, action) → This function takes two arguments:

* state → The current state value (e.g., { age: 42 }).

* action → An object that describes what change you want to make (e.g., { type: 'increment_age' }).

```jsx
const [state, dispatch] = useReducer(reducer, { age: 42 });
```


- This is the heart of the code. Let’s break it step by step:

- const → Declares a constant variable.

- [state, dispatch] → Array destructuring:

- state → Holds the current state (initially { age: 42 }).

- dispatch → A function we call when we want to update the state.

= useReducer(...) → Calls the useReducer hook.

* useReducer(reducer, { age: 42 }) →

* reducer → The function we defined earlier that knows how to update the state.

* { age: 42 } → The initial state (starting value).

## { type: 'INCREAMENT' } — the action object. It has a type property that your reducer can check to decide how to update state.