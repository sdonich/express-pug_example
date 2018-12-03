const express = require('express');
  
const app = express();
  
app.set('view engine', 'pug');
 
app.use('/contact', (req, res) => {
      
  res.render('contact', {
    title: 'Our contacts',
    emailsVisible: true,
    emails: ['gavgav@mycorp.com', 'mioaw@mycorp.com'],
    phone: '+1234567890'
  });
}); 
 
app.use('/', (req, res) => {
      
  res.render('home', {
    mission: 'Play it fucking loud',
    title: 'Home page'
  });
});

app.listen(3000);