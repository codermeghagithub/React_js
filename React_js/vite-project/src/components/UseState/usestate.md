## useState :
It is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.

* State updates are asynchronous, so console.log runs before state updates


```js
import { useState } from 'react';

function MyComponent() {
  const [age, setAge] = useState(28);
  const [name, setName] = useState('Taylor');
  const [todos, setTodos] = useState(() => createTodos());

```
**In your code example, there are 3 state variables:State Variables:**

**age** - holds the current age value (initially 28)
**name** - holds the current name value (initially 'Taylor')
**todos -** holds the current todos array (initially created by createTodos())

**Breaking it down:**
```js
const [age, setAge] = useState(28);
//     ^^^  state variable
//          ^^^^^^ setter function
//                         ^^ initial value

const [name, setName] = useState('Taylor');
//     ^^^^  state variable
//           ^^^^^^^ setter function
//                           ^^^^^^^^ initial value

const [todos, setTodos] = useState(() => createTodos());
//     ^^^^^  state variable
//            ^^^^^^^^ setter function  
//                             ^^^^^^^^^^^^^^^^^ lazy initial state
```
### Key Points:

State Variable = The first item in the destructured array (age, name, todos)
Setter Function = The second item in the destructured array (setAge, setName, setTodos)
The state variable holds the current value of that piece of state
The setter function is used to update that state variable

Usage:
```js
// Reading state variables
console.log(age);    // 28
console.log(name);   // 'Taylor'
console.log(todos);  // array from createTodos()

// Updating state variables
setAge(29);           // Updates age to 29
setName('John');      // Updates name to 'John'
setTodos([...todos, newTodo]); // Updates todos array

```