# Boba Tracker
Keep track of your bubble tea purchases so you can remember what you liked and see what others have ordered.

[Front-end Client](https://kimdolion.github.io/boba-tracker-client/#/)

[Front-end Repo](https://github.com/kimdolion/boba-tracker-client)

[Back-end Client](https://limitless-everglades-63033.herokuapp.com/)

[Black-end Repo](https://github.com/kimdolion/boba-tracker-backend)

## Technologies Used
React, React Boostrap, Axios, MongoDB, Express, HTML, CSS, JS

## Setup and Installation
Change information, where need be, with proper project name.
   - `config/db.js` contains mongoose database name
   - `npm install` to install proper dependencies

**User** has many **Orders**

  <table style="display:inline">
  <th colspan="2" style="text-align:center">Orders</th>
  <th colspan="2" style="text-align:center">User</th>
  <tr>
  <td>_id</td>
  <td>MongoDB generated</td>
  <td>_id</td>
  <td>MongoDB generated</td>
  </tr>
  <tr>
  <td>flavor</td>
  <td>string</td>
  <td>email</td>
  <td>string</td>
  </tr>
  <tr>
  <td>datePurchased</td>
  <td>date</td>
  <td>hashedPassword</td>
  <td>string</td>
  </tr>
  <tr>
  <td>location</td>
  <td>string</td>
  <td>token</td>
  <td>string</td>
  </tr>
  <tr>
  <td>cost</td>
  <td>number</td>
  <td>timestamps</td>
  <td>datetime</td>
  </tr>
  <tr>
  <td>color</td>
  <td>string</td>
  <td></td>
  <td></td>
  </tr>
  <tr>
  <td>owner</td>
  <td>ref to user</td>
  <td></td>
  <td></td>
  </tr>
  </table>


  #### Order actions currently supported:
  - Create orders
  - (Read) See
    - All orders
    - All orders by owner
    - Show Order by id
  - Edit your order
  - Delete your order

##### End Point Testing

<ul style="list-style-type:none;">
  <li>get -> #index, #show</li>
  <li>post -> #create</li>
  <li>patch -> #update</li>
  <li>delete -> #destroy</li>
</ul>

## Resource Routes
`user routes`:
  - `/sign-up` - POST for sign up credentials
  - `/sign-in` - POST for sign in credentials
  - `/users` - GET for list of users
  - `/change-password` - PATCH for updating credentials
  - `/sign-out` - DELETE for sign out

`order routes`:
  - `/orders` - GET for index of orders
  - `/orders/:id` - GET for individual order (not used, but can be)
  - `/orders` - POST for order creation (applies ownership)
  - `/orders/:id` - PATCH for editting order (requires ownership)
  - `/orders/:id` - DELETE for deleting order (requires ownership)

## Development Process
Planning the project
I honestly started planning this out as soon as we were done with our tic tac toe game.

I love bubble tea also known as boba, which is a reference to the often ordered tapioca pearls that sit in the bottom of the cup.
That being said, I don't always have the best memory of what/where I have ordered this wonderful drink. It's especially frustrating when I can't easily get a hold of my friends who have gone to various shops and ordered any number of drinks.

I wanted to track what I ordered as well as see what my friends might be fans of so I could order it for myself.

## Problem Solving
### Launching the backend
I was so excited to get started on my front end that I had started out testing the examples curlscripts, saw that they were fine, then tried the nwe order curlscripts without having created routes for them. I carefully read the error messaging to get a better sense of what I was missing, then compared against the examples in the template.

### Model development
I began working on my front end and making various tweaks back and forth but the most important edit was when I had changed my location value to be an object of various key value pairs that the front end wasn't qute set up to send. I created a few orders that then had to be deleted using curlscripts

## Unsolved Problems
Location
I'm realizing it is a lot more complicated of a model and I need to also balance working the frontend forms with it before I create resources that get "corrupted".

## Wireframes and User Stories
[User Stories](https://docs.google.com/document/d/1rU0EMt1qlRVzYi5IN6PDTBv9FH-f241SB1buLiKU5VY/edit?usp=sharing)

[Wireframes](https://docs.google.com/document/d/1Bmr5gQ1BCXurel8O9UvznKwcHkwt-F_cnnR5uouSSXA/edit?usp=sharing)

[ERD](https://docs.google.com/document/d/1KAxKF9fMoZRf_MedIocuvrfn7yVN1JOpxzY0Z7Bnkl0/edit?usp=sharing)

## Stretch Goals
Implement the location model and/or integrate a maps api to better help users locate the bubble tea shops so that they are able to actually replicate an order.

Include options to sort by location and track likes on orders.

## Additional Resources
