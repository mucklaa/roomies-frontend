# Roomies

## Description

Roomies is an app for shared flats. In the Roomies app, users can register, log in and create a private group for their flat-sharing community.

In the app, users can jointly create, edit and delete a to-do list, shopping list and also bills. The bills can also be split within the app. 

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - On the homepage I want to see what the app is about. To get to the homepage i first have to login. 
- **sign up** - I want to sign up on the webpage. If i do not have an account i want to find a button on the login page to go to the signup.
- **login** - As a user I want to be able to log in on the webpage and afterward be redirected to my homepage.
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account.
- **shoppinglist** - As a user I want to see what my flatmates and I have added to the shopping list. I want to add new items and delete them. 
- **bills** - As a user I want to see what bills my flatmates and I have added. I want to add new items and delete them. 
- **to-do-list** - As a user I want to see what  my flatmates and I have added to the to-do-list. I want to add new items and delete them. 
- **bills split** - As a user I want to split costs between me and my flatmates. I would like to have a diagram to see how much every persons spends.
- **flatmates** - As a user I want to see who are my flatmates


## Frontend:

| Method | Route | Component | Permission | Description|
|------|-------|------------|---------|---------|
| GET  | /auth/login     | {LoginComponent}  | anon only | Login page route. If logged in takes to create bill. If not redirects to login 
| POST | /auth/login | {LoginComponent} |anon only| Login route. Sends login formulary info to the server
| GET | /auth/signup | {SignUpComponent} |anon only| Signup route. Renders signup formulary view
| POST | /auth/signup | {SignUpComponent} |anon only| Signup route. Sends signup info to server and creates user in DB
| GET | /me/ ||| User route. Renders homepage view
| GET | /user/shopping |{ShoppingComponent} {PopUpComponent} {NavComponent}|Private| User route. Sends all shopping list items for the flat to the screen
| POST | /user/shopping |{ShoppingComponent} {PopUpComponent} {NavComponent}|Private| User route. Lets the user add and delete items to the shopping list of the flat
| GET | /user/shopping/new |{ShoppingComponent} {PopUpComponent} {NavComponent}|Private| User route. Lets the user add and delete items to the shopping list of the flat|| User route. Renders new shopping list view. Must pass shopping variable into next view.
| POST | /user/shopping/new |{ShoppingComponent} {PopUpComponent} {NavComponent}|Private| User route. Lets the user add and delete items to the shopping list of the flat|| User route. Renders new shopping list view. Must pass shopping variable into next view.
| GET | /user/shopping/edit |{ShoppingComponent} {PopUpComponent} {NavComponent}|Private| User route. Lets the user add and delete items to the shopping list of the flat|| User route. Renders shopping creation formulary view)
| POST | /user/shopping/edit |{ShoppingComponent} {PopUpComponent} {NavComponent}|Private| User route. Lets the user add and delete items to the shopping list of the flat|| User route. Renders shopping creation formulary view)
| DELETE | /user/shopping/delete |{ShoppingComponent} {PopUpComponent} {NavComponent}|Private| User route. Lets the user delete items of the shopping list of the flat|| User route. Renders shopping creation formulary view)
| GET | /user/to-do |{ToDoComponent} {PopUpComponent} {NavComponent}|Private| User route. Sends all to-do list items for the flat to the screen
| POST | /user/to-do |{ToDoComponent} {PopUpComponent} {NavComponent}|Private| User route. Lets the user add and delete items to the to-do list of the flat
| GET | /user/to-do/new |{ToDoComponent} {PopUpComponent} {NavComponent}|Private| User route. Lets the user add and delete items to the ToDo list of the flat|| User route. Renders new ToDo list view. Must pass ToDo variable into next view.
| POST | /user/to-do/new |{ToDoComponent} {PopUpComponent} {NavComponent}|Private| User route. Lets the user add and delete items to the ToDo list of the flat|| User route. Renders new ToDo list view. Must pass ToDo variable into next view.
| GET | /user/to-do/edit |{ToDoComponent} {PopUpComponent} {NavComponent}|Private| User route. Lets the user add and delete items to the ToDo list of the flat|| User route. Renders ToDo creation formulary view)
| POST | /user/to-do/edit |{ToDoComponent} {PopUpComponent} {NavComponent}|Private| User route. Lets the user add and delete items to the ToDo list of the flat|| User route. Renders ToDo creation formulary view)
| DELETE | /user/to-do/delete |{ToDoComponent} {PopUpComponent} {NavComponent}|Private| User route. Lets the user delete items of the to-do list of the flat|| User route. Renders to-do creation formulary view)
| GET | /user/bills |{BillsComponent} {PopUpComponent} {NavComponent}|Private| User route. Sends all bills of the flat to the screen
| POST | /user/bills |{BillsComponent} {PopUpComponent} {NavComponent}|Private| User route. Lets the user add and delete bills to the flat
| GET | /user/bills/new |{BillsComponent} {PopUpComponent} {NavComponent}|Private| User route. Lets the user add and delete items to the Bills list of the flat|| User route. Renders new Bills list view. Must pass Bills variable into next view.
| GET | /user/bills/overview |{OverviewComponent} {NavComponent}|Private| User route. Lets the user delete items of the bills list of the flat|| User route. Renders bills creation formulary view)
| POST | /user/bills/new |{BillsComponent} {PopUpComponent} {NavComponent}|Private| User route. Lets the user add and delete items to the Bills list of the flat|| User route. Renders new Bills list view. Must pass Bills variable into next view.
| GET | /user/bills/edit |{BillsComponent} {PopUpComponent} {NavComponent}|Private| User route. Lets the user add and delete items to the Bills list of the flat|| User route. Renders Bills creation formulary view)
| POST | /user/bills/edit |{BillsComponent} {PopUpComponent} {NavComponent}|Private| User route. Lets the user add and delete items to the Bills list of the flat|| User route. Renders Bills creation formulary view)
| POST | /user/bills/delete |{ToDoComponent} {PopUpComponent} {NavComponent}|Private| User route. Lets the user delete items of the bills list of the flat|| User route. Renders bills creation formulary view)
| DELETE | /user/bills/deleteAll |{ToDoComponent} {PopUpComponent} {NavComponent}|Private| User route. Lets the user delete items of the bills list of the flat|| User route. Renders bills creation formulary view)
| GET | /user/profile |{ProfileComponent}|Private/Admin| As a user i want to see my profile and see my flatmates
| POST | /user/profile/edit |{ProfileComponent}|Private| As a user i want to edit my profile
| GET | /user/logout ||Private| Logout route. The user will be logged out and the session will be deleted

## Components:

- NavbarComponent:
  - function component
  - Component
- ShoppingComponent
  - class component
  - Page
- ToDoComponent
  - class component
  - Page
- BillsComponent
  - class component
  - Page
- ButtonsComponent
  - class component
  - Component
- ChatComponent
  - class component
  - Page
- ProfileComponent
  - Page
  - class component
- PopupComponent
  - class component
  - Component
- ErrorComponent
  - function component
  - Page
- LoadingComponent
  - function component 
  - Component



## Services
- Auth Service
- auth.login(user)
- auth.signup(user)
- auth.logout()
- auth.me()
- auth.getUser()

- Profile Services
- getUser(id)
- editUser(id)
- getFlat(invitationCode)

- Shopping Services
- getFlat(invitationCode)
- getItems()
- getOneItem(itemName)
- deleteItem(itemName)
- editOneItem(itemName)

- To-Do Services
- getFlat(invitationCode)
- getToDos()
- getOneToDo(name)
- editOneToDo(name)
- deleteToDo(name)

- Bills Services
- getFlat(invitationCode)
- getBills()
- getOneBill(name)
- editOneBill(name)
- deleteBills()
- deleteOneBill(name)


# Server
## Models

User model

```javascript
{
email: {type: String, required: true, unique: true},
username: {type: String, required: true, unique: true},
password: {type: String, required: true},
image: String,
timeStamp: Date
}

```

Flat model

```javascript
invitationCode: {type: String, required: true, unique: true},
name: {type: String, required: true, unique: true},
users: [User],
shoppingList: [itemsSchema],
toDoList: [toDoSchema],
bill: [billSchema]
```

itemsSchema
```javascript
items = {
name: {type: String, required: true, unique: true},
amount: {type: Number, default: 1}
}
```

billSchema
```javascript
items = {
name: {type: String, required: true},
price: {type: Number, required: true},
username: {type: String, required: true}
}
```

toDoSchema
```javascript
items = {
username: {type: String, required: true},
itemName: {type: String, required: true}
}
```

## API Endpoints
- GET/auth/me
  - 200 with user object
  - 404 if no user in session
- POST /auth/signup
  - 200 with user object
  - 401 if user logged in
  - body:
    - email
    - username
    - password
    - image (not required)
  - validation
    - fields not empty (422)
    - user already exists (409)
    - create user with encrypted password
    - store user in session
- POST /auth/login
  - 200 with user object
  - 401 if user logged in
  - body:
    - username
    - password
    - validation
    - fields not empty (422)
    - user doesn't exists (404)
    - password doesn't match (403)
    - store user in session
- POST/auth/logout
  - 204

- GET /shopping
  - 200: return shopping list
  - 401: if user is not logged in
- POST /shopping/edit/:id
  - 401: if user is not logged in
  - validation:
    - id is valid
    - 422: if id is not valid
  - body:
    -  item object
- POST/shopping/new
  - 401: if user is not logged in
  - body:
    - Item object
    - Add Item to shopping list
- DELETE/shopping/delete/:id
  - 401: if user is not logged in
  - validation:
    - id is valid
    - 422: if id is not valid
  - body:
    - item id
    - remove one item

- GET /to-do
  - 401: if user is not logged in
  - 200: return to-do list
- POST /to-do/new
  - 401: if user is not logged in
  - body:
    - Item object
    - Add Item to to-do list
- POST /to-do/edit/:id
  - 401: if user is not logged in
  - validation:
    - id is valid
    - 422: if id is not valid
  - body:
    - item object
- DELETE /to-do/delete/:id
  - 401: if user is not logged in
  - validation:
    - id is valid
    - 422: if id is not valid
  - body:
    - item id
    - remove one item

- GET /bills
  - 401: if user is not logged in
  - 200: return bills list
- POST /bills/new
  - 401: if user is not logged in
  - body:
  - Item object
  - Add Item to bills list
- POST /bills/edit/:id
  - 401: if user is not logged in
  - body:
    - item object
  - validation:
    - 422: if id is not valid
    - id is valid
- DELETE /bills/delete/:id
  - 401: if user is not logged in
  - validation:
    - id is valid
    - 422: if id is not valid
  - body:
    - item id
    - remove one item
- DELETE /bills/delete-all
  - 401: if user is not logged in
  - remove all items
- GET /bills/overview
  - 401: if user is not logged in
  - 200: show overview

- GET /profile
  - 401: if user is not logged in
  - 200: returns profile page
  - POST/profile/edit/:id
    - 401: if user is not logged in
    - 422: if id is not valid
  - body:
  - user object
  - update user info



## Backlog


Main:
- Desktop version
- Chat function


Bill splitting:
- Currency calculator
- Payment System


Password:
- Password control
- forgot password button 


## Links
### Trello
[Trello Link](https://trello.com/b/szCRWrKq/roomies)


### Git

The url to your repository and to your deployed project

[Repository Link Backend]()

[Repository Link Frontend]()

[Deploy Link]()

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)
