const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database');
const userRoutes = require('./routes/userRoutes');
const chatbotRoutes = require('./routes/chatbotRoutes');
const conversationRoutes = require('./routes/conversationRoutes');
const endUserRoutes = require('./routes/endUserRoutes');
const session = require('express-session');
const passport = require('./passport'); // Adjust the path

const app = express();


// Set up session middleware
app.use(
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: false,
    })
  );

  
// Initialize Passport and set up session
app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/users', chatbotRoutes); // Assuming you want chatbot routes under /users/:userId/chatbots
app.use('/chatbots', conversationRoutes); // Assuming you want conversation routes under /chatbots/:chatbotId/conversations
app.use('/endusers', endUserRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
