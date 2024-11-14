# React Notes
- React is a library with attachments react-dom and react-native
- React-dom for web development
- React-native for mobile development 

npm node package manager -> installer
npx node package executer -> directly executes w/o installing

1. Method to Create react app
- has node_modules folder
```bash
npx create-react-app <app-name>
```
Note: this is a way of slow installation as being a BULKY UTILITY
create-react-app -> utility = software

```bash
cd <app-name>
npm run start
npm run build
```

2. Alternative method to create react app
- We will make a react project through vite (a bundler)
- doesn't have node_modules folder
```bash
npm create vite@latest
cd <app-name>
npm install
npm run dev
npm run start
npm run build
```

- just index.html -> SPA (Single Page Application)
- index.js/main.jsx
- libraries react and react-dom used to manipulate the dom of the web
- React : core foundational library used to take all the refrences
- ReactDOM : react's implementation on the web
- Main websites DOM(tree structure) is already there but React makes its own virtual DOM, it compares its DOM to the web's DOM to manipulates the main DOM only where it is needed.
- React gives a power of jsx : we can render html elements through js 
- React gives : Take a function, return html in it then the react will render that html
- React like cool and Vite like military
- Vite :
    - can't name another component w/o jsx 
    - component needs to be uppercase
    - can only return 1 element tag (soln : wrap multiple tags under <div></div> tag AKA <></> AKA fragment)
- This tag can be `<functionname/>` in App.jsx and export the function usin `export default functionname` from componentname.jsx

- Only create-React :
    - component needs to be uppercase
    - can only return 1 element tag
    - good practice to set the starting character be uppercase in filename too

Since every react uses a bundler using jsx tag
custom react object and custom render -> works!
custom react object and in-built react render -> doesn't work
In-build react object with its valid structure and in-built react render -> works!! =>
```js
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit google!'
)
createRoot(document.getElementById('root')).render(
    reactElement
)
```
- Create element is automatically injected by bab(transpiler) in html

This is an Evaluated expression in file 01vitereact/src/App.jsx
- Meaning only the result of the evaluation of the expression will be used here = only output
- can't used evalution js code her as it doesn't fit in the react object we need.
```js
    <p>Hello miss {username}</p>
```

To control the variable in ui updation used mutiple times we use React methods AKA hooks

### Virtual DOM
create root make a DOM-like structure

[React Fiber link](https://github.com/acdlite/react-fiber-architecture)
- React uses react-fiber algorithm behind the scenes to update the virtual dom
- FEATURES : 
-  **incremental rendering**: the ability to split rendering work into chunks and spread it out over multiple frames.
- the ability to pause, abort, or reuse work as new updates come in; 
- the ability to assign priority to different types of updates; and new concurrency primitives.

Reconciliation:

The algorithm React uses to diff one tree with another to determine which parts need to be changed.

**update**

A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render

- Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique."

### Tailwind and Props
- Add the card component from tailwind in App.jsx
- Props makes a component reusable -> card once made , keep it in a componenet to reuse
    - Make a folder named components fo ryour componenet file like a Card.jsx in src folder
    - Use a loop with that component if you need that card for multiple items whose info came from an array or a database, these are done by props.


```bash
npm create vite@latest
cd <project-name>
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
- got a new file named tailwind.config.js

- **[Use resource](https://tailwindcss.com/docs/guides/vite)** to set up after this step.

```bash
npm run dev
```

### Interview Question React
- In counter project
- use mutiple 
```jsx
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
```
the answer still doesn't show abnormal behavior
- Becuase of useState() function as we send the info in batches and the control on fiber diff algorithm is better
- if you want to do the same work as the code the soln is
```jsx
    setCounter((prevCounter) => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
```

### Background Color Changer using react & tailwind

### Password generator project
- This uses memoization to optimize itself
- useCallback is a React Hook that lets you cache a function definition between re-renders.
useCallback(fn, dependencies) 
dependeancy every const that rerenders the password
- use useCallback do when passwordGenerator() is direcly called , react limits no. of renders to prevent an infinite loop. 
    - useCallback() memorizes the function as much as possible.
    - useCallback() will return a memoized version of the callback that only changes if one of the inputs has changed.
- use useEffect is called first time when the page is loaded or when an effect takes place by any change in dependency array.
- use useRef hook when you need to use a reference.

### Currency convertor project
- when the custom hook is used/ is loaded then api is called to get some data

```js
let url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json"
```

- json file data when gets return in string datatype
- remember the eky in loops in React
- `useId` is a React Hook for generating unique IDs that can be passed to accessibility attributes.
    - Do not call useId to generate keys in a list

### React router DOM
- react router dom is a third party library
- instead of using `<a>` tag we use `Link` in react using react-router-dom as `<a>` tag reloads/refreshes the site instead of manipulating the dom itself as we inject the tags in the nodes directly.
- `NavLink` provides additional things -> instead of href in a we use to=""
- use callback function in className with backticks when you need to change classes, Home(about, Contact, Github) highlight , using variable isActive => matches with the url

- Create Router in Two Ways
    1. 
    ```jsx
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
            children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            }
            ]
        }
        ])
    ```

    2. 
    ```jsx
        const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            </Route>
        )
        )

    ```

- Outlet from react-router-dom uses Layout as a base and changes only where the outlet tag is used

#### Bug
```jsx
<NavLink to="/about"
className={({isActive}) =>
    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
}
```
INSTEAD OF
```jsx
<NavLink to="/about"
className={(isActive) => //the missing of {} around isActive gave the error 
    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
}
```
#### UseParams to use userid into the page
```jsx
import { useParams } from "react-router-dom";

```

- This optimization given by the react-router-dom is also given by next.js
- loader in route tag is used to direct api call to directly fetch data from that api at the event

### Context API

- In early react, even though a component does not need some data using props, the data will pass through that component just because its inner components needs that data. 
![alt text](<context api use.png>)

- solution is that the card inner component takes data directly through a global component : **prop drilling**
- Context API only within React -> library for state management
- Redux for solving this problem outside of react -> purpose state management = data pass
- Redux -> library for state management
    - react-Redux -> redux use in react
    - Readux-toolkit(RTK) -> redux easier version

#### Define one context
1. First way : 08 min Context project
```js
import React from "react";

const UserContext = React.createContext()

export default UserContext;
```
- context is a variable provider
- when context is used as a wrapper it becomes a provider(gets access to the userContext => likegrobal variable)
```js
<UserContext>
<Login />
<Card>
    <Data />
</Card>
<UserContext/>
```

- Login to send data
- Profile to fetch data

2. Second way : 09 theme Switch project

```js
import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}
```
- same work but better use, mostly used in company production code
- add `darkMode: "class",` in tailwind.config.js

### todo app context
- create context, context.provider 

### Redux
- Redux is an independent state management library
- react-redux is used as a bridge to use redux in react.
- Flux is older version to support legacy code. Stronger point is its data flow
- you should never modify your state directly instead use functionality reducers/functions to modify the state.
- Problem faced with redux was its set up was really complicated, so redux-toolkit was formed.
- Store used a global variable => Single source of truth
- Reducers : updation in store only happes through reducers(object)
- Methods : useSelector & useDispatch
- Use [redux tookit use guide](https://redux-toolkit.js.org/introduction/getting-started) in react app
- make configureStore in src>app>store.js
- make object in createSlice in src>features>todo>todoSlice.js
```js
//Slice or reducer
import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello"}]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            if(state.todos.id === action.payload.id){
                state.todos.text = action.payload.text
            }
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions
export default todoSlice.reducer
```
- reducers have object with property and function
    - addTodo will always have access of state and action 
    - state -> for getting the current state
    - action -> get to something needed to do some work. ex: getting todoid for removeTodo function 
- set access of the in src>app>store.js
- use dispatcher to add AddTodo todo in the store
- useDispatch makes changes in store using reducers

SUMMARY
- make store -> configureStore
- make reducers using feuture> createSlice
    - name, initialState, reducers- function: state, action
    - export reducers
    - export slicereducer
- make store access the reducers
- make components -> send or receive values
    - sending values useDispatch > import reducer > send reducer using dispatch
    - receiving values useSelector using a particular state
    - use values in components to display

### Mega Blog project
Tech stack : react, appwrite -> Backend as a service & open-source, tinyMCE, html-react-parser library for content of the article parsing, react hook forms to better handle forms
- package.json dependencies > rtk, redux, react-router-dom, appwrite, react-html-parser, tinyMCE, react hook form

#### Environment variable
- to not send client id and some system secrets to be deployed, as react is a front-end library, everything written in js will be shipped to the browser, there are some variable called system variables, they are stored differently and when the app is deployed to vercel , aws or netlify, their secret manager manages these variables and use the id & password as it is in there.
- this file named ".env" will be added to .gitignore for safe keeping the ids and api-keys etc.
- env variable must be made in the root of the app(hoem directory of the app)
- environment variable file is usually defines in process -> process.env.REACT_APP_....
- env var is always starts with REACT_APP_.... when making react app with create react app 
- enc var for vite processed code uses naming conventions -> VITE_SOME_KEY
- access to the env var will be as -> import.meta.env.VITE_SOME_KEY

- Set up appwrite with all the things needed for the backen dof our project
- make a new js file src>conf>conf.js -> with alias variables to import all the env var in String type-cast to decrease the chances of getting id type issues

#### Prevent vendor lock-In
- Concept of services that is a class is introduced.
- use method that will be implemented in them
- Query can only be used if indexes is made in appwrte databases


#### Production grade react components
[forwardref react hook](https://react.dev/reference/react/forwardRef)

- purpose of using navigate instead of Link is that navigate automatically sends user to the destination and link needs to be clicked manually to get to the destination
- made components postcard, login , signup, select, authLayout (conainer to maade auth secure: protected container)
- Real time editor RTE and PostForm
- Pages build : Signup, Login, AddPost, AllPosts, EditPosts, Home, Post
- integration of app to appwrite for teh backend to avoid CORS error
- [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)