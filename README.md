# Umain Code Test

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Code Test Brief

xxxxx

### Approach and process

- Planned project in Miro, how to structure the components and display information
- Began with the restaurant component that would display the restaurant names. I started with a basic fetch from the API within the component which was successful. I saved this to state however when attempting to render the data as I would with a normal create-react-app, I was getting an error that the property 'map' didn't exist on type. I saw that there were 2 cheats which could be added to the tsConfig (StrictNullChecks and implicityAny which could be set to false) but thought this would defeat the purpose of using TS but read that an interface could be created with defined types that could then be checked against. I also realised that the array in the state needed to be set to an empty array
- Wrote a basic test for the restaurant component to check that the header had rendered

### Future improvements

xxxxx

### Challenges

xxxxx

### Packages used

npm install --save-dev jest-fetch-mock - for testing after fetch
