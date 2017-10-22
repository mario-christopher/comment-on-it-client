import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

let staticPath = path.resolve(__dirname, '../../');
let staticPathPublic = path.resolve(__dirname, '../../public');
let staticPathDist = path.resolve(__dirname, '../../dist');

app.use(express.static(staticPath));
app.use(express.static(staticPathDist));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(staticPathDist, 'index.html'));
})

app.listen(PORT, () => {
    console.log(`Running server at port ${PORT}`);
})