const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares first
app.use((req, res, next) => {
  if (req.method === 'GET') {
    next();
  } else {
    bodyParser.json({ limit: '10mb' })(req, res, next);
  }
});
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Handle JSON parse error
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).send({ success: false, message: 'Invalid JSON body' });
  }
  next();
});

// Routes/APIs
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from server!' });
});
app.use('/api/admin', require('./api/admin.js'));
app.use('/api/customer', require('./api/customer.js'));

app.use('/admin', express.static(path.resolve(__dirname, '../client-admin/build')));
app.get('/admin/{*path}', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client-admin/build', 'index.html'))
});
app.use('/', express.static(path.resolve(__dirname, '../client-customer/build')));
app.get('/{*path}', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client-customer/build', 'index.html'));
});

//START SERVER
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

