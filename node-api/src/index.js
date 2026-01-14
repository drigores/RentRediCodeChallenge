const express = require('express');
const cors = require('cors');
const {admin} = require('./v1/firebase/firebase.js');
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());


const userRoutes = require('./v1/user/UserController.js');
app.use('/api/v1/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});



app.listen(port, () => {
  console.log(`Express server running at http://localhost:${port}/`);
});
