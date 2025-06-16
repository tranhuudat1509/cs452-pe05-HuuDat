# cs452-pe05-HuuDat – Recipe Finder (Full-Stack MERN App)

## Input
Users can input new recipes through a form with name, ingredients, and instructions. They can also edit or delete recipes. Navigation between pages (list, add, edit, and view) is handled through links.

## Process
The frontend is built in React using React Router and Axios. It interacts with a Node.js Express backend, which handles CRUD routes (`GET`, `POST`, `PUT`, `DELETE`) and communicates with MongoDB Atlas. Data is stored and retrieved dynamically using Mongoose.

## Output
The application displays a list of recipes, individual recipe details, and forms to add or edit entries. Successful actions update the UI immediately and persist data to MongoDB Atlas.
