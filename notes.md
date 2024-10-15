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