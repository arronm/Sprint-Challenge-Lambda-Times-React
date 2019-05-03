What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
 - PropTypes are used to specify a specific type of data for our props. It's important to type check
   because it creates a more stable application, if we get a string and are using it like an integer
   it can cause bugs that aren't caught until after it is in production.

Describe a life-cycle event in React?
 - A life-cycle event is a method that handles creating effects on our view when our data updates

Explain the details of a Higher Order Component?
 - A higher order component is much like a higher order function (since components are functions)
   in that it can take multiple components and add business logic and/or additional data on to
   those components before returning them

What are three different ways to style components in React? Explain some of the benefits of each.
 1) Vanilla Sass: Enables nesting, keeps code clean, keeps HTML structure in place
 2) Styled Components: Lets you use CSS in JS as a component, Prevents CSS Leaking
 3) CSS Modules: Combines the benefits of Vanilla Sass and Styled Components