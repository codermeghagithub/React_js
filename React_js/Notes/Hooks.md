## ⁉️ What are Hooks in React?
Hooks are special functions introduced in React 16.8 that let you use state and lifecycle features inside functional components (earlier, only class components had these features).
#### Advantages :  They make code simpler, reusable, and more readable compared to class components.

##### 👉 Examples of important hooks:
* useState → store and update simple values that re-render the UI.

 * useEffect → handle side effects (API calls, subscriptions, DOM updates).

* useRef → access DOM elements or store mutable values without re-render.

* useReducer → manage complex state with multiple actions in a structured way.



### 🔹 1. Why do we use useState?

👉 We use useState to store and update state (data that changes over time) in a functional component.

Without useState, we can only use normal variables, but changes in normal variables do not re-render the component.

useState makes React re-render automatically when the state changes.

**Example:** A counter app where the number should update on button click.

```js
const [count, setCount] = useState(0);
<button onClick={() => setCount(count+1)}>Increment</button>
```
### 🔹 2. Why do we use useEffect?

👉 We use useEffect to perform side effects in React after rendering.

React components should only return UI. But often we need extra work (like fetching data, updating document title, subscribing/unsubscribing, timers, etc.).

useEffect allows this without blocking UI rendering.

Example: Change page title whenever count changes.
```js
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```
### 🔹 3. Why do we use useRef?

👉 We use useRef for two main purposes:

To directly access/manipulate a DOM element (like focus an input).

To store a mutable value that doesn’t cause re-renders when updated.

Example 1: Accessing DOM element
```js
const inputRef = useRef(null);
<button onClick={() => inputRef.current.focus()}>Focus</button>
<input ref={inputRef}/>
```

Example 2: Storing mutable value (like previous value)
```js
const countRef = useRef(0);
countRef.current++; 
```
### 🔹 4. Why do we use useReducer?

👉 We use useReducer when we have complex state logic that involves multiple actions or multiple state variables depending on each other.

It’s an alternative to useState, but more structured when state updates are complex.

It also makes code easier to maintain and test.

Example: Counter with actions
```js
function reducer(state, action) {
  switch (action.type) {
    case "increment": return {count: state.count + 1};
    case "decrement": return {count: state.count - 1};
    default: return state;
  }
}

const [state, dispatch] = useReducer(reducer, {count: 0});
<button onClick={() => dispatch({type: "increment"})}>+</button>
<button onClick={() => dispatch({type: "decrement"})}>-</button>

```



2. useState Questions

### What is useState? How does it work?
👉 It returns an array [state, setState]. On calling setState, React re-renders the component with new value.

### Can useState take a function as an initial value?
👉 Yes. Example: useState(()=>computeExpensiveValue()). The function runs only once on initialization.

### What happens if we call setState multiple times in a row?
👉 Updates may be batched. Use the callback form:

setCount(prev => prev + 1)


### What is useReducer? When should we use it?
👉 Alternative to useState for complex state logic.
**👉 Syntax:**
```js
const [state, dispatch] = useReducer(reducer, initialState);
function reducer(state, action) {
  switch(action.type) {
    case "increment": return {count: state.count+1}
    default: return state;
  }
}
```


### Difference between useState and normal variables.



### Difference between useRef and useState.



















## 🔹 Interview Questions on React Hooks
1. General Hooks Questions

What are React Hooks? Why were they introduced?

Difference between class components and functional components with hooks.

Rules of hooks (2 rules: only call hooks at the top level, only inside React functions).

Can we use hooks inside loops or conditions? Why not?

What are custom hooks? How do you create one?