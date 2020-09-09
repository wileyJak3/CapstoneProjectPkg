

# Install directions
- Clone  CapstoneProjectPkg repository 
- Open up Postico or similar PostgresSQL database client
- Create a database named "springDB" ( The spring app will auto create the collections upon running the application)
- Open springDB and then open  spring-boot-testdb back-end in Java and import as a maven project
- Launch the spring app in intellij
- Open up the testapp react-app in your preferred IDE and npm i- to obtain all of the dependencies
- navigate in terminal to the challenger react app folder and type npm start to launch the app on your local server
- Enjoy!

# Capstone Project 

An ecommerce project that allows you to store and delete items in a a database and add the those items to a cart database. 
The project was mainly to serve as an introduction to spring and springboot.


### Front-end Technologies Used
- JS (primarily ES6)
- React
- React Router
- Use of async requests
- Has 5 model APIs ( 2 are used)
- 2 API's are CRUD API
- react-bootstrap
- Responsive mobile design

### Back-end Technologies Used
- Java 
- Use of Postgres as SQL database
- Uses Spring Boot with Maven as a build tool
- Uses MVC architecture

### Anticipated Challenges
- connecting the front-end to the back-end 
- full CRUD capabilities on one of the model APIs
- being able to update my SQL database in real-time


### Stretch Goal
 - Sign In (not implemented, userDB wasn't created in time)



### CRUD model API
Both of the use model APIs will include full CRUD capabilities.
The page will have a preset preset items that can be added to cart. The user can also add items to the present inventory that can also be added to cart.
This entered data will be updated on the page and in the PostgreSQL database.