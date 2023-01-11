// server.js File
const express = require('express'); // Importing express module

const app = express(); // Creating an express object
const port = 5000;  // Setting an port for this application
////////
const cors = require('cors')
var corsOptions = {
  origin: "http://localhost:5000"
};

app.use(cors(corsOptions));
const path = require('path');
const router = express.Router();
let messages = {
    1: {
      id: '1',
      text: 'Hello World',
      userId: '1',
    },
    2: {
      id: '2',
      text: 'By World',
      userId: '2',
    },
  };
let users = {
    1: {
      id: '1',
      username: 'siva',
    },
    2: {
      id: '2',
      username: 'bhaaru',
    },
  };
router.get('/save',function (req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});
/////////
// Starting server using listen function
app.get('/users', (req, res) => {
  res.json({ message: "Welcome to sivapy application.",name:'siva'});
  });
  
  app.post('/users', (req, res) => {
    return res.send('POST HTTP method on user resource');
  });
  
  app.put('/users', (req, res) => {
    return res.send('PUT HTTP method on user resource');
  });
  
  app.delete('/users', (req, res) => {
    return res.send('DELETE HTTP method on user resource');
  });

  /////
  app.put('/users/:userId', (req, res) => {
    return res.send(
      `PUT HTTP method ${req.params.userId} resource zoom`,
    );});
    app.get('/messages', (req, res) => {
        return res.send(Object.values(messages));
      });


app.listen(port)
// app.get('/hello', function (req, res) {
//     res.sendFile('index.html');
//     });
