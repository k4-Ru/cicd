const express  = require('express');

const app = express();
app.use(express.json());
app.use(express.static('public'));


const demoUser = {
    username: 'Carl Nicolas',
    password: 'password123'
};




//endpoints
app.get('/', (req, res) => {
    res.send('hello im running just fine');
});



app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (username === demoUser.username && password === demoUser.password) {
        res.status(200).json({ message: 'Login successful' , username: demoUser.username});
    } else if (!username || !password) {
        return res.status(400).json('Missing fields');
    }

    return res.status(401).json('Invalid credentials');
});

module.exports = app;
