import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname, '')));

// Serve css and js files
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening at http://localhost:${port}`);
});
