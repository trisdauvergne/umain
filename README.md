# Umain Code Test

This project was bootstrapped with [Create React App](https://umain-pizza.netlify.app).

The project has been deployed [here](https://umain-pizza.netlify.app/)

## Code Test Brief

_The code challenge is a “Pizza Ordering App”_

_Your task is to build an app for ordering Pizza with mocked APIs from the Apiary specification using React._

- _Show a list of pizza restaurants and have the closest to your current location at the top_
- _From the list enter into a detailed view for that restaurant and display the available menu for that location._
- _Let the users add items from the menu into a shopping cart_
- _Place the order_
- _Display the orders state_

## Approach and process

- I began by planning the project on Miro by creating basic wireframes, outlining a structure for the app and where elements could be placed. I also outlined what functionality needed to be implemented on which component for easy reference
- As I am new to TypeScript, I spent some time following TypeScript tutorials and documentation to familiarise myself with the concepts before moving forward with writing actual code
- After spending time experimenting in a practise workspace, where I started getting a feel for TypeScript combined with React and state management with Redux Toolkit I then moved on to building the final project. I find the ‘playing around’ and changing properties to see the effects of changes, before working on the final project and before there are too many moving parts very helpful to understand how everything is connected
- I initialised a create-react-app project with the TypeScript template
- The first step I took was fetching data from the [Pizza App API](https://pizzaapp.docs.apiary.io/#reference/0/read-order/get-details-for-a-given-order?console=1) with the links provided in the docs and performing a basic. After data on the restaurants was fetched from the API, I moved on to ensuring I could render this in to a component. This revealed my first obstacle was I was getting an error trying to map over the data and render certain properties. This highlighted that TypeScript was going to be stricter than I had anticipated and required that I needed to specify a type in useState, as well as ensure the type in the default state was defined. I understood that TypeScript would infer the type if it wasn’t specified but then realised that the type TypeScript automatically infers wasn’t necessarily the correct type in every situation

#### Restaurant

- I created the component which would render the restaurant names but learned that I couldn’t just specify a type of ‘object’ for storing the data here and felt that the cleanest way for me to do this (and anticipating that I may be able to reuse this again) created an interface to define the structure of the object for the data object structure to match against

#### Menu

- After fetching data on the restaurants and successfully rendering the restaurant information in the component, I moved on to fetching menu data for the individual restaurants. I created the component that would show the menus. The data for the menus would be fetched when the restaurant was clicked on and render to the component. I thought at first that I would just pass the menu data as props from the restaurant component to the menu as the most straightforward method, but then anticipated the menu information might be used by other components within the app so began to implement Redux using Redux toolkit in the app
- The store was first created for storing menu data which could be accessed from the menu components. I was successfully fetching data with the restaurant ID (which I knew from console logs) so now had to pass this to the store. When working on the slice for the menu items, I created a menu item interface which matched the structure of the objects received from the API. This could then tell TypeScript that the menu state would be an array of objects of this structure. The challenge I encountered here was passing in the menu data as the redux action payload, which required imports from the RTK library and specifying the type again as the action payload. After the reducer functionality was written, I moved back to the restaurant component where it would trigger fetching the menu data. The function here would use the helper function for fetching data and use Redux’s dispatch for calling the reducer in the menu slice to save the menu data in its state
- Rather than showing the menu in one long list, I wanted to give users the option to view the items by their category as I thought this would make it easier for a user to search through the menu. I first split the menu into 2 sections - one for the categories and for the items themselves. To show the categories only I first created a new array that included each of the category names. When a category name was clicked, a function runs which filters the menu items based on the category type and only displays the items in the next section that belong to that category.

#### Cart

- After rendering menu data into the app from the store, I moved on to the cart and adding items to it. I started by creating a component for the cart. I also knew that the cart itself would be stored using Redux so created a slice for the cart itself. The process for creating the cart was similar to the menu, in that there would be an array of items that matched the cart item interface. The reducer function for adding an item to the existing cart then just spread the values of the array and add the new item as an action payload to it
- I then followed a similar process as when working on the menu component, in now using Redux’s useSelector to access the cart data in the store, then rendering that data on to the cart itself. I also decided to create a simple clear cart function within the cart which simply replaces the cart state with an empty array in the reducer function

#### Placing an order

- Towards the end of the project I would implement the functionality for placing an order. I decided to add the trigger for this function into the cart component, with a button underneath the items within the cart. By clicking on the place order button, a post is triggered to the API sending the cart as the body. I placed the functionality for submitting the order into a separate helper function as I had done this previously for functions which made calls to the API
- When the order is placed a modal appears with order confirmation with the order status, ID and estimated delivery appears which then clears the the cart when OK is pressed
- I anticipated that the order information might need to be made available to other components of the app, so created an order store where order information could be stored with Redux. When an order is placed, the response is saved in the store and then can be accessed by the component which shows the order status after an order is placed
- I decided that clicking the OK button in the modal would not only close the modal but also clear the cart and hide the restaurant menus

#### Order status

- I hadn’t initially planned for somewhere to show the status of the order, but felt that the best place for this would be in the cart. After pressing the OK button inside the modal, the order status then appears in the cart. When it appears in the cart the component is immediately visible so the user notices it, however its visibility can be changed if wanted

#### Styling

- I decided to keep styling quite minimal for this code test
- I installed sass as this would allow me to use variables for consistency such as spacing, colors and fonts
- The layout attemps to replicate a one sheet menu from a pizza restaurant

## Challenges

- Testing proved to be a challenge for me and highlighted this as an area for improvement. I found it challenging as tests were being performed on asynchronous elements and started with the first test which checked when the restaurants were rendered after the initial fetch, as the test ran before the fetch was complete. It took me a while to find a solution for this, which I came across in the testing library docs. The solution worked for this purpose but then didn’t work when I tried to apply it to further tests beyond this. I didn’t manage to write any tests beyond the test in the restaurant component but have kept in the test files along with the types tests I would have run. In addition to tests being performed on asynchronous elements, I think the decision to use Redux also added an additional layer of complexity. If I was to do this again, I would take a more TDD approach and the testing may have been more 'bite-size' and challenges easier to find solutions for
- I tried to avoid using type 'any', however have used it twice in the app - once in the GetLocation function and in the function for getting the location. Specifying the type created more errors and I will continue exploring the cause of the errors as I understand using 'any' defeats the purpose of TypeScript
- The location functionality was challenging and I relied on existing solutions which I found online

## Future improvements

- I would switch to Axios instead of using fetch as I discovered that Axios works best across all browsers
- The functionality to fetch a menu is very clunky and I think this could be streamlined when I have developed a better understanding of modifying and creating objects with TypeScript and Redux
- Testing
- Responsiveness is very basic at the moment and currently performs best on desktop
- Animations could be added to help guide the user on to next steps
- More state changes to highlight the user's current stage in the process
- Cart item and menu item interfaces are practically identical
- The location functionality could be moved into its own helper function and also rewritten for extra clarity

## Packages used

- **jest-fetch-mock** - for exploring testing after fetch
- **@reduxjs/toolkit** and **react-redux**- for state management
- **node-sass** and **@types/node-sass** - for additional features with styling
