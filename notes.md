# React Notes
- React is a library with attachments react-dom and react-native
- React-dom for web development
- React-native for mobile development 

npm node package manager -> installer
npx node package executer -> directly executes w/o installing

1. Method to Create react app
- has node_modules folder
```
npx create-react-app <app-name>
```
Note: this is a way of slow installation as being a BULKY UTILITY
create-react-app -> utility = software

```
cd <app-name>
npm run start
npm run build
```

2. Alternative method to create react app
- We will make a react project through vite (a bundler)
- doesn't have node_modules folder
```
npm create vite@latest
cd <app-name>
npm install
npm run dev
npm run start
npm run build
```