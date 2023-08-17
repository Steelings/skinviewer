const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const sendgrid = require('@sendgrid/mail');

const app = express();
app.use(bodyParser.json());


const db = mysql.createConnection({
  host: 'localhost:3306',
  user: 'berre',
  password: 'Ia4&hk701',
  database: 'berre_staelens_',
});

// Configure SendGrid API key
sendgrid.setApiKey('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');

// Endpoint to handle subscription
app.post('/subscribe', (req, res) => {
  const email = req.body.email;

  // Insert email into database
  const query = 'INSERT INTO newsletter (email) VALUES (?)';
  db.query(query, [email], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Error subscribing.');
    }

    // Send confirmation email
    const token = generateUniqueToken(); // Implement your token generation logic
    const confirmationLink = `https://topics.ep3.ikdoeict.be/src/index.html/${token}`;
    const msg = {
      to: email,
      from: 'steelings@protonmail.com',
      subject: 'Confirm Subscription',
      text: `Click the following link to confirm your subscription: ${confirmationLink}`,
    };
    
    sendgrid.send(msg);

    res.status(200).send('Subscription request received.');
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
