# Umain Code Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Code Test Brief

xxxxx

### Approach and process

- Planned project in Miro, how to structure the components and display information
- Began with the restaurant component that would display the restaurant names. I started with a basic fetch from the API within the component which was successful. I saved this to state however when attempting to render the data as I would with a normal create-react-app, I was getting an error that the property 'map' didn't exist on type. I saw that there were 2 cheats which could be added to the tsConfig (StrictNullChecks and implicityAny which could be set to false) but thought this would defeat the purpose of using TS but read that an interface could be created with defined types that could then be checked against. I also realised that the array in the state needed to be set to an empty array
- Wrote a basic test for the restaurant component to check that the header had rendered
- Moved on to menus component. Needed to figure out a way for passing data from the restaurant to the menus component. Didn't want to pass it as props as this felt clunky.
- This caused an issue with testing as components also needed to be wrapped with a provider in tests.
- Moved on to cart and used redux to store the cart. Created a cart slice

### Future improvements

xxxxx

### Challenges

xxxxx

### Packages used

npm install --save-dev jest-fetch-mock - for testing after fetch
npm install @reduxjs/toolkit - for sharing state
npm install react-redux
