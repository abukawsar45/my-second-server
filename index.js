const express = require('express');
const app = express();
port = 3000;

app.get('/', (req, res) => {
    res.send('La--- ilaha illalloh');
})
app.get('/login', (req, res) => {
    res.send('login12--345')
})

app.listen(port, () => {
    console.log(`my second server in running on port: ${port}`)
})