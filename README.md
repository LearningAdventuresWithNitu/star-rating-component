## Running React on Repl.it

[React](https://reactjs.org/) is a popular JavaScript library for building user interfaces.

[Vite](https://vitejs.dev/) is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

Using the two in conjunction is one of the fastest ways to build a web app.

### Getting Started
- Hit run
- Edit [App.jsx](#src/App.jsx) and watch it live update!

By default, Replit runs the `dev` script, but you can configure it by changing the `run` field in the [configuration file](#.replit). Here are the vite docs for [serving production websites](https://vitejs.dev/guide/build.html)

### Typescript

Just rename any file from `.jsx` to `.tsx`. You can also try our [TypeScript Template](https://replit.com/@replit/React-TypeScript)

### About the project 
TODO: format the readme

// we get access to the value that we are trying to store as well as the setter
  // intial value should be zero -- like the intial rating will be zero and the users sets it after
  // long term values - for example - a user has already given the rating and we don't want it to reset when they come back - we don't have session management or long term management at this point. Can be done in future, can be passed into the component and use it.
  // added reset 
  // now hover rating

why use callback?
re-initalzed every rerender, instead we use callback to render only if something in this changes


  // store what is being clicked
  // store the rating value - capture it on click and store it in the component itself
  // we use useState hook to store any kind of local component state


  // stars
  // map over an array to show the stars
  // values are undefined, but we aren't using them and instead using the index