const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('client'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('client', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

