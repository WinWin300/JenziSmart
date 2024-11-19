const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// Sample endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
